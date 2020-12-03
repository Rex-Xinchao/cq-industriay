const UP = -1 // 上游
const DOWN = 1 // 下游
const ROUTE_COLOR = '#3E73E3' // 根节点
let data_o = {
  nodes: [
    {
      nameZh: '农机具及其零部件',
      nameEn: 'Agricultural Implements and Parts',
      productCode: 'GB_C35070902',
      dsCnt: 39,
      usCnt: 3
    },
    { nameZh: '淀粉糖', nameEn: 'Starch Sugar', productCode: 'GB_C13090102', dsCnt: 8, usCnt: 15 },
    { nameZh: '水稻', nameEn: 'Paddy', productCode: 'GB_A01010101', dsCnt: 6, usCnt: 3 },
    { nameZh: '糠油', nameEn: 'Bran Oil', productCode: 'GB_C1303010106', dsCnt: 16, usCnt: 6 },
    { nameZh: '水稻种子', nameEn: 'Paddy Seeds', productCode: 'GB_A05010104', dsCnt: 3, usCnt: 1 },
    {
      nameZh: '农产品烘干服务',
      nameEn: 'Agricultural Product Drying Services',
      productCode: 'GB_A05010401',
      dsCnt: 0,
      usCnt: 16
    },
    { nameZh: '大米', nameEn: 'Rice', productCode: 'GB_C13010101', dsCnt: 18, usCnt: 6 },
    {
      nameZh: '其他肥料制造',
      nameEn: 'Manufacturing of Other Fertilizers',
      productCode: 'GB_C260209',
      dsCnt: 39,
      usCnt: 5
    },
    { nameZh: '毛油', nameEn: 'Crude Oils', productCode: 'GB_C13030102', dsCnt: 2, usCnt: 12 },
    { nameZh: '农业保险', nameEn: 'Agricultural Insurance', productCode: 'GB_J68020005', dsCnt: 3, usCnt: 70 }
  ],
  relationships: [
    {
      id: 18258,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_J68020005',
      endNameZh: '农业保险',
      endNameEn: 'Agricultural Insurance',
      weight: 2,
      typeCode: 'T',
      typeName: '技术服务',
      direction: 1
    },
    {
      id: 18120,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_A05010401',
      endNameZh: '农产品烘干服务',
      endNameEn: 'Agricultural Product Drying Services',
      weight: 4,
      typeCode: 'T',
      typeName: '技术服务',
      direction: 1
    },
    {
      id: 18568,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_C13010101',
      endNameZh: '大米',
      endNameEn: 'Rice',
      weight: 4,
      typeCode: 'P',
      typeName: '产品/业务',
      direction: 1
    },
    {
      id: 18600,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_C13030102',
      endNameZh: '毛油',
      endNameEn: 'Crude Oils',
      weight: 3,
      typeCode: 'P',
      typeName: '产品/业务',
      direction: 1
    },
    {
      id: 18121,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_C35070902',
      endNameZh: '农机具及其零部件',
      endNameEn: 'Agricultural Implements and Parts',
      weight: 4,
      typeCode: 'A',
      typeName: '生产设备',
      direction: -1
    },
    {
      id: 18617,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_C1303010106',
      endNameZh: '糠油',
      endNameEn: 'Bran Oil',
      weight: 3,
      typeCode: 'P',
      typeName: '产品/业务',
      direction: 1
    },
    {
      id: 36569,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_C260209',
      endNameZh: '其他肥料制造',
      endNameEn: 'Manufacturing of Other Fertilizers',
      weight: 1,
      typeCode: 'M',
      typeName: '生产原料',
      direction: -1
    },
    {
      id: 18122,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_C13090102',
      endNameZh: '淀粉糖',
      endNameEn: 'Starch Sugar',
      weight: 2,
      typeCode: 'P',
      typeName: '产品/业务',
      direction: 1
    },
    {
      id: 383,
      startCode: 'GB_A01010101',
      startNameZh: '水稻',
      startNameEn: 'Paddy',
      endCode: 'GB_A05010104',
      endNameZh: '水稻种子',
      endNameEn: 'Paddy Seeds',
      weight: 4,
      typeCode: 'M',
      typeName: '生产原料',
      direction: -1
    }
  ]
}
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
      this.noData = false
      let data = this.handleData()
      let $graphBox = document.querySelector('.graph-box')
      this.params.width = ($graphBox && $graphBox.offsetWidth) || 0
      this.params.height = ($graphBox && $graphBox.offsetHeight) || 0
      $graphBox.innerHTML = '' // 清空tree图
      this.initChartOptions()
      this.initSvg()
      if (!data || !data.length) return
      data[0].children.length > 0 && this.graphTree(data[0])
      data[1].children.length > 0 && this.graphTree(data[1])
      if (!data[0].children.length && !data[1].children.length) {
        this.graphTree(data[0])
      }
      this.treeData = data
      this.rootNode(data[1].children.length > 0)
      this.createMark()
    },
    handleData() {
      let map_UP = {}
      let map_DOWN = {}
      let data = [
        { name: '水稻', code: 'GB_A01010101', root: true, direction: UP, children: [] },
        { name: '水稻', code: 'GB_A01010101', root: true, direction: DOWN, children: [] }
      ]
      data_o.nodes.forEach((item) => {
        map_UP[item.productCode] = { ...item }
        map_DOWN[item.productCode] = { ...item }
      })
      data_o.relationships.forEach((item) => {
        if (item.direction === UP) {
          let node = map_UP[item.startCode]
          node.children = node.children || []
          let typeNode = node.children.find((type) => type.typeCode === item.typeCode)
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
          let typeNode = node.children.find((type) => type.typeCode === item.typeCode)
          if (typeNode) {
            typeNode.children.push(map_DOWN[item.endCode])
          } else {
            typeNode = { ...item }
            typeNode.children = [map_DOWN[item.endCode]]
            node.children.push(typeNode)
          }
        }
      })
      data[0].children = map_UP['GB_A01010101'].children
      data[1].children = map_DOWN['GB_A01010101'].children
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
      rootNode.on('click', (d) => this.showMenu(d3.event, d.data))
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
      rootNode.append('title').text((d) => `${d.data.name} [${d.data.code}]`)
      rootNode
        .append('text')
        .attr('fill', '#fff')
        .attr('x', 0)
        .attr('y', 5)
        .attr('text-anchor', 'middle')
        .style('font', '12px sans-serif')
        .style('font-weight', 'bold')
        .append('tspan')
        .text((d) => {
          return vm._substring(d.data.name, 14, true)
        })
    },
    async graphTree(data) {
      let vm = this
      let root = d3.hierarchy(data)
      let $pos = data.direction === UP
      root.x0 = this.d3TreeBox.width / 2
      root.y0 = this.d3TreeBox.height / 2
      root.descendants().forEach((d, i) => {
        d.id = d.id || ($pos ? 'up_' : 'down_') + i
        if (d.children) d._children = d.children
      })
      let d3TreeData = d3.tree().nodeSize([this.treeNode.height + 10, this.treeNode.width])(root)
      let duration = d3.event && d3.event.altKey ? 2500 : 250
      let nodes = d3TreeData.descendants().reverse()
      let links = d3TreeData.links()
      nodes.forEach((d) => {
        d.y = ($pos ? UP : DOWN) * d.depth * 180 + this.d3TreeBox.width / 2
      })
      let transition = this.svgInstance
        .transition()
        .duration(duration)
        .attr('viewBox', [vm.viewBox.y, vm.viewBox.x, vm.viewBox.width, vm.viewBox.height])
        .tween('resize', window.ResizeObserver ? null : () => () => this.svgInstance.dispatch('toggle'))

      this.visInstance
        .selectAll('g.node')
        .data(nodes, (d) => d.id)
        .enter()
        .append('g')
        .attr('class', (d) => {
          let className = 'node '
          className += d.data.productCode || d.data.typeCode
          className += $pos ? ' up' : ' down'
          className += d.data.typeCode ? ' typeNode' : ' productNode'
          className += d.data.root ? ' isRoot' : ''
          return className
        })
        .attr('transform', () => `translate(${root.y0},${root.x0})`)
        .on('click', (d) => this.showMenu(d3.event, d.data))
        .on('mouseover', (d) => {
          vm.setHighLight(true, d.data, $pos)
          vm.showTip(d3.event, d.data)
        })
        .on('mouseout', (d) => {
          vm.setHighLight(false, d.data, $pos)
        })
        .transition(transition)
        .attr('transform', (d) => `translate(${d.y},${d.x})`)

      this.createProductNode($pos)
      this.createTypeNode($pos)

      this.visInstance
        .selectAll('path.link')
        .data(links, (d) => d.target.id)
        .enter()
        .insert('path', 'g')
        .attr('class', 'link ' + ($pos ? 'up' : 'down'))
        .transition(transition)
        .attr('d', this.diagonal)
      this.createLink($pos, root)
    },
    createProductNode($pos) {
      const Product = this.visInstance.selectAll(`g.${$pos ? 'up' : 'down'}.productNode`)
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
      Product.append('title').text((d) => `${d.data.nameZh} [${d.data.productCode}]`)
      Product.append('text')
        .attr('fill', '#2897EF')
        .attr('x', 0)
        .attr('y', 5)
        .attr('text-anchor', 'middle')
        .style('font', '12px sans-serif')
        .style('font-weight', 'bold')
        .append('tspan')
        .text((d) => {
          return this._substring(d.data.nameZh, 14, true)
        })
      if (this.type === 'boom') {
        Product.append('text')
          .attr('class', (d) => (d.depth ? '' : 'remove'))
          .attr('x', (d) => ($pos ? -114 : 90))
          .attr('y', 5)
          .attr('text-anchor', 'middle')
          .style('font', '12px sans-serif')
          .style('fill', 'black')
          .append('tspan')
          .text((d) => {
            return '7.12%'
          })
        Product.append('image')
          .attr('xlink:href', require(`@/assets/imgs/icons/up.svg`))
          .attr('class', (d) => (d.depth ? '' : 'remove'))
          .attr('x', (d) => ($pos ? -90 : 114))
          .attr('y', -6)
          .attr('height', '14px')
          .attr('width', '8px')
        this.visInstance.selectAll('.remove').remove()
      } else {
        Product.append('image')
          .attr('xlink:href', require(`@/assets/imgs/icons/lamp.svg`))
          .attr('class', (d) => (d.depth ? '' : 'remove'))
          .attr('x', (d) => ($pos ? -110 : 70))
          .attr('y', -12)
          .attr('height', '22px')
          .attr('width', '22px')
        this.visInstance.selectAll('.remove').remove()

        Product.append('text')
          .attr('class', (d) => (d.depth ? '' : 'remove'))
          .attr('x', (d) => ($pos ? -80 : 100))
          .attr('y', 5)
          .attr('text-anchor', 'middle')
          .style('font', '12px sans-serif')
          .style('fill', '#FFB21C')
          .append('tspan')
          .text((d) => {
            return '7'
          })
      }
    },
    createTypeNode($pos) {
      const Type = this.visInstance.selectAll(`g.${$pos ? 'up' : 'down'}.typeNode`)
      Type.append('text')
        .attr('dy', -4)
        .attr('x', 0)
        .attr('x', (d) => ($pos ? (d._children ? 16 : -16) : d._children ? -16 : 16))
        .attr('text-anchor', (d) => ($pos ? (d._children ? 'start' : 'end') : d._children ? 'end' : 'start'))
        .attr('style', (d) => ($pos ? (d._children ? 'start' : 'end') : d._children ? 'end' : 'start'))
        .attr('style', 'cursor: default')
        .text((d) => d.data.typeName)
    },
    createLink($pos, root) {
      let linkEnter = this.visInstance.selectAll(`path.${$pos ? 'up' : 'down'}.link`)
      linkEnter
        .attr('d', (d) => {
          let o = { x: root.x0, y: root.y0 }
          return this.diagonal({ source: o, target: o })
        })
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
    },
    setHighLight(isHighLight, data, $pos) {
      return
      // if (data.root) return
      // const direction = $pos ? 'up' : 'down'
      // const nodes = this.visInstance.selectAll(`g.${direction}.${data.productCode}`)
      // if (isHighLight) {
      //   nodes.selectAll('rect').attr('style', (d) => `stroke: red`)
      // } else {
      //   nodes.selectAll('rect').attr('style', (d) => `stroke: #5DB7FE`)
      // }
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
  },
  mounted() {
    this.initChart()
  }
}
