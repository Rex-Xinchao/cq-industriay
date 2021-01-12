const UP = -1 // 上游
const DOWN = 1 // 下游
const ROUTE_COLOR = '#3E73E3' // 根节点
import * as d3 from 'd3'
export default {
  data() {
    return {
      d3TreeBox: {
        margin: { top: 0, right: 0, bottom: 55, left: 0 },
        width: 0,
        height: 0,
        dx: 0,
        dy: 0
      },
      params: {},
      viewBox: {},
      d3Zoom: {},
      svgInstance: null,
      visInstance: null,
      treeNode: {
        width: 120,
        height: 40
      }
    }
  },
  methods: {
    initChart() {
      let data = this.handleData()
      let $graphBox = document.querySelector('.graph-box')
      this.params.width = ($graphBox && $graphBox.offsetWidth) || 0
      this.params.height = ($graphBox && $graphBox.offsetHeight) || 0
      $graphBox.innerHTML = '' // 清空tree图
      this.initChartOptions()
      this.initSvg()
      if (!data || !data.length) return
      let root_0 = this.getRoot(data[0])
      let root_1 = this.getRoot(data[1])
      data[0].children.length > 0 && this.graphTree(root_0, data[0].direction === UP)
      data[1].children.length > 0 && this.graphTree(root_1, data[1].direction === UP)
      if (!data[0].children.length && !data[1].children.length) {
        this.graphTree(root_0, data[0].direction === UP)
      }
      this.treeData = data
      this.rootNode(data[1].children.length > 0)
      this.createMark()
    },
    handleData() {
      let map_UP = {}
      let map_DOWN = {}
      let name = this.chartData.nodes.find((item) => item.code === this.code).name
      let data = [
        { name: name, code: this.code, root: true, direction: UP, children: [] },
        { name: name, code: this.code, root: true, direction: DOWN, children: [] }
      ]
      this.chartData.nodes.forEach((item) => {
        map_UP[item.code] = { ...item }
        map_DOWN[item.code] = { ...item }
      })
      this.chartData.relationships.forEach((item) => {
        if (item.direction === UP) {
          let node = map_UP[item.startCode]
          node.children = node.children || []
          let typeNode = node.children.find((type) => type.typeName === item.typeName)
          if (typeNode) {
            typeNode.children.push(map_UP[item.endCode])
          } else {
            typeNode = { ...item }
            typeNode.children = [map_UP[item.endCode]]
            node.children.push(typeNode)
          }
        } else {
          let node = map_DOWN[item.startCode]
          node.children = node.children || []
          let typeNode = node.children.find((type) => type.typeName === item.typeName)
          if (typeNode) {
            typeNode.children.push(map_DOWN[item.endCode])
          } else {
            typeNode = { ...item }
            typeNode.children = [map_DOWN[item.endCode]]
            node.children.push(typeNode)
          }
        }
      })
      data[0].children = map_UP[this.code].children
      data[1].children = map_DOWN[this.code].children
      return data
    },
    initChartOptions() {
      this.d3TreeBox.width = this.params.width - this.d3TreeBox.margin.right - this.d3TreeBox.margin.left
      this.d3TreeBox.height = this.params.height - this.d3TreeBox.margin.top - this.d3TreeBox.margin.bottom
      this.viewBox = {
        x: 0,
        y: 0,
        width: this.d3TreeBox.width,
        height: 100
      }
      this.d3TreeBox.dx = 25
      this.d3TreeBox.dy = this.d3TreeBox.width / this.d3TreeBox.height
      this.d3Zoom = d3.zoom().scaleExtent([0.1, 10])

      this.diagonal = d3
        .linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x)
    },
    initSvg() {
      let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.id = 'graph-box-svg'
      document.querySelector('.graph-box').appendChild(svg)
      // svg对象
      this.svgInstance = d3
        .select('#graph-box-svg')
        .attr('width', this.params.width - this.d3TreeBox.margin.right - this.d3TreeBox.margin.left)
        .attr('height', this.params.height - this.d3TreeBox.margin.top - this.d3TreeBox.margin.bottom)
        .style('font-size', '12px')
        .style('user-select', 'none')
        .call(
          this.d3Zoom.on('zoom', () => {
            this.visInstance.attr('transform', d3.event.transform.toString())
          })
        )
        .on('dblclick.zoom', null)
      // g对象
      this.visInstance = this.svgInstance.append('g').attr('cursor', 'pointer')
    },
    rootNode(hasDown) {
      //中心点
      let vm = this
      let rootNode = null
      if (hasDown) {
        rootNode = this.visInstance.select('g.isRoot.down')
        this.visInstance.select('g.up.isRoot').attr('display', 'none')
      } else {
        rootNode = this.visInstance.select('g.isRoot')
        this.visInstance.select('g.down.isRoot').attr('display', 'none')
      }
      rootNode.select('text').remove()
      let colorLiner = this.svgInstance
        .append('linearGradient')
        .attr('id', 'colorLiner')
        .attr('x1', '0')
        .attr('y1', '0')
        .attr('x2', '0')
        .attr('y2', '100%')
      colorLiner
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#3E73E3')
      colorLiner
        .append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#1F337C')
      rootNode
        .append('rect')
        .attr('width', this.treeNode.width)
        .attr('height', this.treeNode.height)
        .attr('fill', ROUTE_COLOR)
        .attr('rx', 4)
        .attr('ry', 4)
        .attr('x', -65)
        .attr('y', -20)
        .attr('text-anchor', 'middle')
      rootNode.append('title').text((d) => `${d.data.name}`)
      rootNode
        .append('text')
        .attr('fill', '#fff')
        .attr('x', 0)
        .attr('y', 5)
        .attr('text-anchor', 'middle')
        .style('font', '12px sans-serif')
        .style('font-weight', 'bold')
        .append('tspan')
        .text((d) => vm._substring(d.data.name, 14, true))
    },
    getRoot(data) {
      let $pos = data.direction === UP
      let root = d3.hierarchy(data)
      this[`root_${$pos}`] = root
      root.x0 = this.d3TreeBox.width / 2
      root.y0 = this.d3TreeBox.height / 2
      root.descendants().forEach((d, i) => {
        if (d.depth > 3) {
          d.children = null
        }
        d.id = d.id || ($pos ? 'up_' : 'down_') + (`${d.data.code}_${i}` || d.data.id)
        if (d.children) d._children = d.children
        if (d.depth > 1) d.children = null
      })
      return root
    },
    async graphTree(root, $pos) {
      let d3TreeData = d3.tree().nodeSize([this.treeNode.height + 10, this.treeNode.width])(root)
      let duration = d3.event && d3.event.altKey ? 2500 : 250
      let nodes = d3TreeData.descendants().reverse()
      let links = d3TreeData.links()
      nodes.forEach((d) => {
        d.y = ($pos ? UP : DOWN) * d.depth * 180 + this.d3TreeBox.width / 2
      })
      let vm = this
      let transition = this.svgInstance
        .transition()
        .duration(duration)
        .attr('viewBox', [vm.viewBox.y, vm.viewBox.x, vm.viewBox.width, vm.viewBox.height])
        .tween('resize', window.ResizeObserver ? null : () => () => this.svgInstance.dispatch('toggle'))

      let nodeEnter = this.visInstance
        .selectAll('g.node')
        .data(nodes, (d) => d.id)
        .enter()
        .append('g')
        .attr('class', (d) => {
          let className = 'node '
          className += `${d.data.code}${(d.data.parent && d.data.parent.typeName) || ''}` || d.data.typeName
          className += $pos ? ' up' : ' down'
          className += d.data.typeName ? ' typeNode' : ' productNode'
          className += d.data.root ? ' isRoot' : ''
          return className
        })
        .transition(transition)
        .attr('transform', () => `translate(${root.y0},${root.x0})`)
        .attr('transform', (d) => {
          return `translate(${d.y},${d.x})`
        })

      this.visInstance.selectAll('g.node').attr('transform', (d) => {
        return `translate(${d.y},${d.x})`
      })

      this.createProductNode($pos)
      this.createTypeNode($pos)

      let node = this.visInstance.selectAll(`g.${$pos ? 'up' : 'down'}`).data(nodes, (d) => d.id)
      node.merge(nodeEnter).transition(transition)
      node
        .exit()
        .transition(transition)
        .remove()

      let linkEnter = this.visInstance
        .selectAll('path.link')
        .data(links, (d) => `${d.target.id}-${d.source.id}`)
        .enter()
        .insert('path', 'g')
        .attr('class', 'link ' + ($pos ? 'up' : 'down'))
        .transition(transition)
        .attr('d', this.diagonal)
        .attr('style', 'cursor: default')
        .attr('marker-start', (d) => {
          if (!$pos) return
          if (d.source.data.code) return
          return 'url(#marker_arrow_reverse)'
        })
        .attr('marker-end', (d) => {
          if ($pos) return
          if (!d.source.data.code) return
          return 'url(#marker_arrow)'
        })

      this.visInstance
        .selectAll(`path.link`)
        .transition(transition)
        .attr('d', this.diagonal)

      let link = this.visInstance
        .selectAll(`path.${$pos ? 'up' : 'down'}`)
        .data(links, (d) => `${d.target.id}-${d.source.id}`)
      link.merge(linkEnter).transition(transition)
      link
        .exit()
        .attr('marker-end', null)
        .transition(transition)
        .remove()
    },
    createProductNode($pos) {
      const Product = this.visInstance.selectAll(`g.${$pos ? 'up' : 'down'}.productNode`)
      const vm = this
      Product.append('rect')
        .attr('class', 'rect')
        .attr('width', this.treeNode.width)
        .attr('height', this.treeNode.height)
        .attr('stroke-width', '1px')
        .attr('stroke', '#5DB7FE')
        .attr('fill', '#E6E6FA')
        .attr('rx', 4)
        .attr('ry', 4)
        .attr('x', -65)
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .on('click', (d) => {
          if (d.data.typeName) return
          vm.showTip(d3.event, d.data)
        })
      Product.append('title').text((d) => `${d.data.name}`)
      Product.append('text')
        .attr('fill', '#2897EF')
        .attr('x', 0)
        .attr('y', 5)
        .attr('text-anchor', 'middle')
        .style('font', '12px sans-serif')
        .style('font-weight', 'bold')
        .append('tspan')
        .text((d) => {
          return this._substring(d.data.name, 14, true)
        })
        .on('click', (d) => {
          if (d.data.typeName) return
          vm.showTip(d3.event, d.data)
        })
      if (this.type === 'boom') {
        Product.append('text')
          .attr('class', (d) => {
            // return (d.depth && d.data.isRisk ? '' : 'remove')
            if (!['GB_C3612', 'FA0040010709', 'EC001001130201'].includes(d.data.code)) {
              return 'remove'
            }
          })
          .attr('x', (d) => {
            if (d.depth) return $pos ? -114 : 90
            return -10
          })
          .attr('y', (d) => {
            if (d.depth) return 5
            return 40
          })
          .attr('text-anchor', 'middle')
          .style('font', '12px sans-serif')
          .style('fill', 'black')
          .append('tspan')
          .text((d) => {
            // if (d.data.isRisk) return '7.12%'
            if (d.data.code === 'GB_C3612') {
              return '-0.64%'
            } else if (d.data.code === 'FA0040010709') {
              return '-2.78%'
            } else if (d.data.code === 'EC001001130201') {
              return '0.32%'
            }
          })
          .on('mouseover', (d) => {
            this.showMenu(d3.event, d.data)
          })
          .on('mouseout', (d) => {
            this.interval && clearTimeout(this.interval)
          })
        Product.append('image')
          .attr('xlink:href', (d) => {
            // require(`@/assets/imgs/icons/up.svg`)
            if (d.data.code === 'GB_C3612') {
              return require(`@/assets/imgs/icons/down.svg`)
            } else if (d.data.code === 'FA0040010709') {
              return require(`@/assets/imgs/icons/down.svg`)
            } else if (d.data.code === 'EC001001130201') {
              return require(`@/assets/imgs/icons/down.svg`)
            }
          })
          .attr('class', (d) => {
            // return (d.depth && d.data.isRisk ? '' : 'remove')
            if (['GB_C3612', 'FA0040010709', 'EC001001130201'].includes(d.data.code)) {
              return ''
            } else {
              return 'remove'
            }
          })
          .attr('x', (d) => {
            if (d.depth) return $pos ? -90 : 114
            return 16
          })
          .attr('y', (d) => {
            if (d.depth) return -6
            return 29
          })
          .attr('height', '14px')
          .attr('width', '8px')
          .on('mouseover', (d) => {
            this.showMenu(d3.event, d.data)
          })
          .on('mouseout', (d) => {
            this.interval && clearTimeout(this.interval)
          })
        this.visInstance.selectAll('.remove').remove()
      } else {
        Product.append('image')
          .attr('xlink:href', require(`@/assets/imgs/icons/lamp.svg`))
          .attr('class', (d) => {
            // if (!d.data.isRisk) return 'remove'
            if (!['GB_C3612', 'FA0040010709', 'EC001001130201'].includes(d.data.code)) {
              return 'remove'
            }
          })
          .attr('x', (d) => {
            if (d.depth) return $pos ? -110 : 70
            return -14
          })
          .attr('y', (d) => {
            if (d.depth) return -12
            return 28
          })
          .attr('height', '22px')
          .attr('width', '22px')
          .on('mouseover', (d) => {
            this.showMenu(d3.event, d.data)
          })
          .on('mouseout', (d) => {
            this.interval && clearTimeout(this.interval)
          })
        this.visInstance.selectAll('.remove').remove()
      }
      this.createIcon($pos)
    },
    createIcon($pos) {
      this.visInstance
        .selectAll('g.productNode')
        .append('g')
        .attr('class', (d) => {
          return d.depth > 0 && d._children && d._children.length ? 'icon' : null
        })

      this.visInstance
        .selectAll('g.icon')
        .attr('style', 'cursor: pointer')
        .append('image')
        .attr('class', 'icon-circle')
        .attr('width', 14)
        .attr('height', 14)
        .attr('x', (d) => {
          if (d.parent.data.direction === DOWN) {
            return this.treeNode.width / 2 - 7
          } else {
            return -this.treeNode.width / 2 - 14
          }
        })
        .attr('y', () => -7)
        .attr('xlink:href', function(d) {
          if (d.children && d.children.length && d._children && d._children.length) {
            return require('@/assets/imgs/down_circle.svg')
          } else {
            return require('@/assets/imgs/up_circle.svg')
          }
        })
        .on('click', (d) => {
          console.log('onClicked')
          let show = !d.children
          if (show) {
            d.children = d._children
            d.children.forEach((child) => {
              child.children = child._children
            })
          } else {
            d.children.forEach((child) => {
              child.children = null
            })
            d.children = null
          }
          let $pos = d.parent.data.direction === UP
          const root = this[`root_${$pos}`]
          this.graphTree(root, $pos)
        })
    },
    createTypeNode($pos) {
      const Type = this.visInstance.selectAll(`g.${$pos ? 'up' : 'down'}.typeNode`)
      Type.append('text')
        .attr('dy', -12)
        .attr('x', 0)
        .attr('x', (d) => (!$pos ? (d._children ? 16 : -16) : d._children ? -16 : 16))
        .attr('text-anchor', (d) => ($pos ? (d._children ? 'start' : 'end') : d._children ? 'end' : 'start'))
        .attr('style', (d) => ($pos ? (d._children ? 'start' : 'end') : d._children ? 'end' : 'start'))
        .attr('style', 'cursor: default')
        .text((d) => d.data.typeName)
    },
    _substring(str, n, $dot) {
      let r = /[^\x00-\xff]/g
      if (!str) {
        return str
      }
      if (str.replace(r, 'mm').length <= n) {
        return str
      }
      let m = Math.floor(n / 2)
      for (let i = m; i < str.length; i++) {
        if (str.substr(0, i).replace(r, 'mm').length >= n) {
          return str.substr(0, i) + ($dot ? '...' : '')
        }
      }
      return str
    },
    createMark() {
      let defs = this.visInstance.append('svg:defs')
      let marker = defs
        .append('svg:marker')
        .attr('id', 'marker_arrow')
        .attr('markerHeight', 10)
        .attr('markerWidth', 10)
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .attr('refX', 0)
        .attr('refY', 0)
        .attr('viewBox', '-5 -5 10 10')
        .append('svg:path')
        .attr('d', 'M 0,0 m -5,-5 L 5,0 L -5,5 Z')
        .attr('fill', '#00C0D1')
      marker = defs
        .append('svg:marker')
        .attr('id', 'marker_arrow_reverse')
        .attr('markerHeight', 10)
        .attr('markerWidth', 10)
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .attr('refX', 0)
        .attr('refY', 0)
        .attr('viewBox', '-5 -5 10 10')
        .append('svg:path')
        .attr('d', 'M 0,0 m -5,-5 L 5,0 L -5,5 Z')
        .attr('fill', '#00C0D1')
        .attr('style', 'transform: rotate(180deg)')
    }
  }
}
