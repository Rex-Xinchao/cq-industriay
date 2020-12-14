import * as d3 from 'd3'
export default {
  data() {
    return {
      treeBox: {
        width: 1200,
        height: 500,
        dx: 0,
        dy: 0
      },
      svgInstance: null,
      visInstance: null,
      rect: {
        width: 132,
        height: 38,
        radius: 8,
        colors_border: {
          0: '#34465A',
          1: '#727B95',
          2: '#444444'
        },
        colors_bg: {
          0: '#34465A',
          1: '#727B95',
          2: '#FFFFFF'
        }
      },
      reserve: false,
      colors: [
        '#4CB0FF',
        '#85B52C',
        '#FFA725',
        '#78909C',
        '#66BB6A',
        '#8D6E63',
        '#FFCA28',
        '#8555D9',
        '#9CCC65',
        '#FF7043'
      ],
      relList: [],
      nodeList: [],
      treeMap: {},
      showDepth_min: 2, // 第一层为0
      root: null,
      interval: null
    }
  },
  methods: {
    // 提供外部调用
    async start(data, list) {
      this.nodeList = []
      this.initList(data)
      this.treeMap = data
      this.relList = list.filter((item) => item.rel)
      this.init(data, list)
    },
    // 绘制图表
    initList(data, depth = 0) {
      if (depth < this.showDepth_min) {
        this.nodeList.push(data.productCode)
        if (data && data.children && data.children.length) {
          data.children.forEach((item) => {
            this.initList(item, depth + 1)
          })
        }
      }
    },
    async init() {
      this.loading = true
      const data = JSON.parse(JSON.stringify(this.treeMap))
      await this.initSvg()
      await this.initRoot(data)
      this.update(this.root)
      await this.createMark()
      this.loading = false
    },
    initSvg() {
      const $dialog = document.getElementById('chart-body')
      this.treeBox.width = $dialog.clientWidth
      this.treeBox.height = $dialog.clientHeight
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.id = 'tree-svg'
      svg.setAttribute('version', '1.1')
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      const $graphBox = document.getElementById('chart')
      $graphBox.appendChild(svg)
      this.svgInstance = d3
        .select('#tree-svg')
        .attr('width', this.treeBox.width)
        .attr('height', this.treeBox.height)
        .style('font-size', '12px')
        .style('user-select', 'none')
      this.visInstance = this.svgInstance.append('g').attr('class', 'drag-layer')
      this.svgInstance
        .call(
          d3
            .zoom()
            .scaleExtent([0.001, 1000])
            .on('zoom', () => this.visInstance.attr('transform', d3.event.transform))
        )
        .on('dblclick.zoom', null)
      return this.svgInstance
    },
    initRoot(data) {
      this.root = d3.hierarchy(data)
      this.root.x0 = this.treeBox.width / 2
      this.root.y0 = this.treeBox.height / 2
      this.root.descendants().forEach((d, i) => {
        d.id = d.data.productCode || 'main'
        d._children = d.children
        if (d.depth > this.showDepth_min - 1) d.children = null
      })
      return this.root
    },
    createMark() {
      let defs = this.visInstance.append('svg:defs')
      let marker = defs
        .selectAll('marker')
        .data(this.colors)
        .enter()
        .append('svg:marker')
        .attr('id', (d, i) => {
          let index = i % 10
          return `marker_arrow_${this.colors[index]}`
        })
        .attr('markerHeight', 5)
        .attr('markerWidth', 5)
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .attr('refX', 0)
        .attr('refY', 0)
        .attr('viewBox', '-5 -5 10 10')
        .append('svg:path')
        .attr('d', 'M 0,0 m -5,-5 L 5,0 L -5,5 Z')
        .attr('fill', (d, i) => {
          let index = i % 10
          return this.colors[index]
        })

      marker = defs
        .append('svg:marker')
        .attr('id', 'marker_arrow')
        .attr('markerHeight', 5)
        .attr('markerWidth', 5)
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .attr('refX', 0)
        .attr('refY', 0)
        .attr('viewBox', '-5 -5 10 10')
        .append('svg:path')
        .attr('d', 'M 0,0 m -5,-5 L 5,0 L -5,5 Z')
        .attr('fill', '#B4BACA')

      return marker
    },
    update(source) {
      const root = this.root
      const duration = d3.event && d3.event.altKey ? 2500 : 250
      this.treeBox.layerDis = this.reserve ? 120 : 320
      this.treeBox.nodeDis = this.reserve ? 160 : 60
      const d3TreeData = d3.tree().nodeSize([this.treeBox.nodeDis, this.treeBox.layerDis])(root)
      const nodes = d3TreeData.descendants().reverse()
      const links = d3TreeData.links()

      const transition = this.svgInstance
        .transition()
        .duration(duration)
        .attr('viewBox', [-this.treeBox.width / 3, -this.treeBox.height / 2, this.treeBox.width, this.treeBox.height])
        .tween('resize', window.ResizeObserver ? null : () => () => this.svgInstance.dispatch('toggle'))

      this.createNode(nodes, source, transition)
      this.createLink(links, source, transition)
      this.createFirstLevelLink()
    },
    // 创建&更新节点
    createNode(nodes, source, transition) {
      let node = this.visInstance.selectAll('g.node').data(nodes, (d) => d.id)
      source.y0 = source.y0 || source.y
      source.x0 = source.x0 || source.x

      let nodeEnter = node
        .enter()
        .append('g')
        .attr('transform', (d) => `translate(${source.y0},${source.x0})`)
        .attr('class', (d) => `node node_${d.id}`)
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3)
        .attr('transform', (d) => {
          if (this.reserve) {
            return `translate(${d.x},${d.y})`
          } else {
            return `translate(${d.y},${d.x})`
          }
        })
      this.createRect(nodeEnter)

      // Transition nodes to their new position.
      node
        .merge(nodeEnter)
        .transition(transition)
        .attr('transform', (d) => {
          if (this.reserve) {
            return `translate(${d.x},${d.y})`
          } else {
            return `translate(${d.y},${d.x})`
          }
        })
        .attr('fill-opacity', 1)
        .attr('stroke-opacity', 1)

      // Transition exiting nodes to the parent's new position.
      node
        .exit()
        .transition(transition)
        .remove()
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .attr('transform', (d) => {
          if (this.reserve) {
            return `translate(${source.x},${source.y})`
          } else {
            return `translate(${source.y},${source.x})`
          }
        })

      this.createIcon()
    },
    createRect(nodeEnter) {
      nodeEnter
        .append('rect')
        .attr('class', (d) => d.id)
        .attr('width', this.rect.width)
        .attr('height', this.rect.height)
        .attr('style', (d) => `stroke-width:1; stroke:${this.rect.colors_border[d.depth > 1 ? 2 : d.depth]}`)
        .attr('fill', (d) => this.rect.colors_bg[d.depth > 1 ? 2 : d.depth])
        .attr('rx', this.rect.radius)
        .attr('ry', this.rect.radius)
        .attr('x', (this.rect.width / 2) * -1)
        .attr('y', (this.rect.height / 2) * -1)
        .attr('text-anchor', 'middle')
        .append('title')
        .text((d) => `${d.data.name}`)
      nodeEnter
        .append('text')
        .attr('fill', (d) => (d.depth > 1 ? '#444444' : '#FFFFFF'))
        .attr('x', 0)
        .attr('y', 5)
        .attr('text-anchor', 'middle')
        .style('font', '12px sans-serif')
        .style('font-weight', 'bold')
        .append('tspan')
        .text((d) => {
          if (d.data.name && d.data.name.length > 10) {
            return d.data.name.substring(0, 10) + '...'
          } else {
            return d.data.name
          }
        })
        .append('title')
        .text((d) => d.data.name)
    },
    createIcon() {
      this.visInstance
        .selectAll('g.node')
        .append('g')
        .attr('class', (d) => {
          return d.depth === 0 || (d._children && d._children.length) ? 'icon' : null
        })

      this.visInstance
        .selectAll('g.icon')
        .attr('style', 'cursor: pointer')
        .append('image')
        .attr('class', 'icon-circle')
        .attr('width', 14)
        .attr('height', 14)
        .attr('x', () => (!this.reserve ? this.rect.width / 2 - 7 : 0))
        .attr('y', () => (!this.reserve ? -7 : this.rect.height / 2 + 5))
        .attr('xlink:href', function(d) {
          if (d.children && d.children.length && d._children && d._children.length) {
            return require('@/assets/imgs/down_circle.svg')
          } else {
            return require('@/assets/imgs/up_circle.svg')
          }
        })
        .on('click', (d) => {
          d.children = d.children ? null : d._children
          this.update(d)
        })
    },
    // 创建&更新连线
    createLink(links, source, transition) {
      let link = this.visInstance.selectAll('path.link').data(links, (d) => d.target.id)
      let linkEnter = link
        .enter()
        .insert('path', 'g')
        .attr('class', (d) => `link link_${d.target.id}`)
        .attr('fill', 'none')
        .attr('stroke', '#555')
        .attr('stroke-opacity', 1)
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#marker_arrow)')

      const diagonal = d3
        .line()
        .x((d) => d.x)
        .y((d) => d.y)
      const getlinkPath = this.reserve ? this.getReversePath : this.getPath

      linkEnter.transition(transition).attr('d', (d) => getlinkPath(d))
      // Transition links to their new position.
      link
        .merge(linkEnter)
        .transition(transition)
        .attr('d', (d) => getlinkPath(d))

      // Transition exiting nodes to the parent's new position.
      link
        .exit()
        .attr('marker-end', null)
        .transition(transition)
        .remove()
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .attr('d', (d) => {
          const o = { x: source.x, y: source.y }
          return diagonal({ source: o, target: o })
        })
    },
    getPath(d) {
      let diagonal = d3
        .line()
        .x((d) => d.x)
        .y((d) => d.y)
      let lineData = []
      const startPosition = { x: d.source.y, y: d.source.x }
      const endPosition = { x: d.target.y, y: d.target.x }
      if (startPosition.y === endPosition.y) {
        lineData.push(startPosition)
        lineData.push({
          x: endPosition.x - this.rect.width / 2 - 5,
          y: endPosition.y
        })
        return diagonal(lineData)
      }
      const offset_x = (endPosition.x - startPosition.x) / 2
      const offset_y = (endPosition.y - startPosition.y) / 2
      const radius_x = 8
      const radius_y = offset_y >= 0 ? 8 : -8
      // 1 - 开始节点
      lineData.push(startPosition)
      // 2 - 起始弧度开始点
      lineData.push({
        x: startPosition.x + offset_x - radius_x,
        y: startPosition.y
      })
      // 3 - 起始弧度弧线参考点
      lineData.push({
        x: startPosition.x + offset_x,
        y: startPosition.y
      })
      // 4 - 起始弧度结束点
      lineData.push({
        x: startPosition.x + offset_x,
        y: startPosition.y + radius_y
      })
      // 5 - 第二个弧度开始点
      lineData.push({
        x: startPosition.x + offset_x,
        y: endPosition.y - radius_y
      })
      // 6 - 第二个弧度弧线参考点
      lineData.push({
        x: startPosition.x + offset_x,
        y: endPosition.y
      })
      // 7 - 第二个弧度结束点
      lineData.push({
        x: startPosition.x + offset_x + radius_x,
        y: endPosition.y
      })
      // 8 - 尾点 减去一个节点一半宽度防止icon箭头被遮住
      lineData.push({
        x: endPosition.x - this.rect.width / 2 - 5,
        y: endPosition.y
      })
      return this.drawPath(lineData)
    },
    getReversePath(d) {
      let diagonal = d3
        .line()
        .x((d) => d.x)
        .y((d) => d.y)
      let lineData = []
      const startPosition = { x: d.source.x, y: d.source.y }
      const endPosition = { x: d.target.x, y: d.target.y }
      if (startPosition.x === endPosition.x) {
        lineData.push(startPosition)
        lineData.push({
          x: endPosition.x,
          y: endPosition.y - this.rect.height / 2 - 5
        })
        return diagonal(lineData)
      }
      const offset_x = (endPosition.x - startPosition.x) / 2
      const offset_y = (endPosition.y - startPosition.y) / 2
      const radius_x = offset_x >= 0 ? 8 : -8
      const radius_y = 8
      // 1 - 开始节点
      lineData.push(startPosition)
      // 2 - 起始弧度开始点
      lineData.push({
        x: startPosition.x,
        y: startPosition.y + offset_y - radius_y
      })
      // 3 - 起始弧度弧线参考点
      lineData.push({
        x: startPosition.x,
        y: startPosition.y + offset_y
      })
      // 4 - 起始弧度结束点
      lineData.push({
        x: startPosition.x + radius_x,
        y: startPosition.y + offset_y
      })
      // 5 - 第二个弧度开始点
      lineData.push({
        x: endPosition.x - radius_x,
        y: startPosition.y + offset_y
      })
      // 6 - 第二个弧度弧线参考点
      lineData.push({
        x: endPosition.x,
        y: startPosition.y + offset_y
      })
      // 7 - 第二个弧度结束点
      lineData.push({
        x: endPosition.x,
        y: startPosition.y + offset_y + radius_y
      })
      // 8 - 尾点 减去一个节点一半宽度防止icon箭头被遮住
      lineData.push({
        x: endPosition.x,
        y: endPosition.y - this.rect.height / 2 - 5
      })
      return this.drawPath(lineData)
    },
    drawPath(lineData) {
      let path = ''
      path += `M${lineData[0].x},${lineData[0].y} ${lineData[1].x},${lineData[1].y}`
      path += ` M${lineData[1].x},${lineData[1].y} Q${lineData[2].x} ${lineData[2].y} ${lineData[3].x},${lineData[3].y}`
      path += ` M${lineData[3].x},${lineData[3].y} ${lineData[4].x},${lineData[4].y}`
      path += ` M${lineData[4].x},${lineData[4].y} Q${lineData[5].x} ${lineData[5].y} ${lineData[6].x},${lineData[6].y}`
      path += ` M${lineData[6].x},${lineData[6].y} ${lineData[7].x},${lineData[7].y}`
      return path
    },
    // 创建第一层节点的上下游关系
    createFirstLevelLink() {
      let relList = this.relList
      relList.forEach((item) => {
        let start = d3.select(`rect.${item.startCode}`)
        let end = d3.select(`rect.${item.endCode}`)
        item.source = start._groups[0][0].__data__
        item.target = end._groups[0][0].__data__
      })
      let link = this.visInstance.selectAll('path.relation').data(relList, (d) => {
        d.id = `${d.startCode}-${d.endCode}`
      })
      link
        .enter()
        .insert('path', 'g')
        .attr('class', 'relation')
        .attr('fill', 'none')
        .attr('stroke', (d, i) => {
          let index = i % 10
          return this.colors[index]
        })
        .attr('stroke-opacity', 1)
        .attr('stroke-dasharray', '2,2')
        .attr('stroke-width', 2)
        .attr('marker-end', (d, i) => {
          let index = i % 10
          return `url(#marker_arrow_${this.colors[index]})`
        })
        .attr('d', (d) => {
          // if (!d.source || !d.target) return
          if (this.reserve) {
            return `M${d.source.x},${d.source.y} ${d.target.x - this.rect.width / 2 - 5},${d.target.y}`
          } else {
            return `M${d.source.y},${d.source.x} ${d.target.y},${d.target.x - this.rect.height / 2 - 5}`
          }
        })
        .attr('id', (d) => {
          return 'textPath' + d.id
        })
      link
        .enter()
        .append('text')
        .style('text-anchor', 'middle')
        .style('style', 'font-size:14px')
        .style('fill', (d, i) => {
          let index = i % 10
          return this.colors[index]
        })
        .text((d) => {
          return d.rel
        })
        .attr('x', (d) => {
          if (this.reserve) {
            let offset = (d.target.x - d.source.x) / 2
            return d.target.x - offset + 4
          } else {
            return d.target.y - 15 - this.strlen(d.rel)
          }
        })
        .attr('y', (d) => {
          if (this.reserve) {
            return d.target.y - 20
          } else {
            let offset = (d.target.x - d.source.x) / 2
            return d.target.x - offset + 4
          }
        })
    },
    strlen(str) {
      let len = 0
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i)
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
          len += 1
        } else {
          len += 2
        }
      }
      return len * 2.5
    }
  }
}
