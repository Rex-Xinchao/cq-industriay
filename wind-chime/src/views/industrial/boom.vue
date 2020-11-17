<template>
  <div class="main">
    <h1 class="main-title">
      景气图谱
      <span class="sign">汽车行业</span>
    </h1>
    <div class="chart">
      <div class="graph-box"></div>
    </div>
  </div>
</template>
<script>
const UP = -1 // 上游
const UP_COLOR = '#A49FFF' // 上游
const UP_COLOR_ACTIVE = '#7B74FF' // 上游
const DOWN = 1 // 下游
const DOWN_COLOR = '#83BFFF' // 下游
const DOWN_COLOR_ACTIVE = '#3697FF' // 下游
const REPEATED_COLOR = '#999999' // 重复节点
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
      noData: false,
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
      visInstance: null
    }
  },
  methods: {
    initChart() {
      this.noData = false
      let map_UP = {}
      let map_DOWN = {}
      let data = [
        { name: '水稻', code: 'GB_A01010101', root: true, direction: UP, children: [] },
        { name: '水稻', code: 'GB_A01010101', root: true, direction: DOWN, children: [] }
      ]
      data_o.nodes.forEach((item) => {
        map_UP[item.productCode] = item
        map_DOWN[item.productCode] = item
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
            typeNode.children = [map_DOWN[item.endCode]]
            node.children = [typeNode]
          }
        } else {
          let node = map_DOWN[item.startCode]
          node.children = node.children || []
          let typeNode = node.children.find((type) => type.typeCode === item.typeCode)
          if (typeNode) {
            typeNode.children.push(map_UP[item.endCode])
          } else {
            typeNode = { ...item }
            typeNode.children = [map_DOWN[item.endCode]]
            node.children = [typeNode]
          }
        }
      })
      data[0].children = map_UP['GB_A01010101'].children
      data[1].children = map_DOWN['GB_A01010101'].children
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
      rootNode.on('click', (d) => {
        // todo 点击事件
      })
      rootNode.select('text').remove()
      let colorLiner = this.svgInstance
        .append('linearGradient')
        .attr('id', 'colorLiner')
        .attr('x1', '0')
        .attr('y1', '0')
        .attr('x2', '0')
        .attr('y2', '100%')
      colorLiner.append('stop').attr('offset', '0%').attr('stop-color', '#3E73E3')
      colorLiner.append('stop').attr('offset', '100%').attr('stop-color', '#1F337C')
      rootNode
        .append('rect')
        .attr('width', 130)
        .attr('height', 42)
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
    graphTree(data) {
      let root = d3.hierarchy(data)
      let $pos = data.direction === UP
      root.x0 = this.d3TreeBox.width / 2
      root.y0 = this.d3TreeBox.height / 2
      root.descendants().forEach((d, i) => {
        d.id = d.id || ($pos ? 'up_' : 'down_') + i
        if (d.children) {
          d._children = d.children
        }
      })
      this.updateTree(root, root, $pos)
    },
    updateTree(source, originData, $pos) {
      let vm = this
      let d3TreeData = d3
        .tree() /*.size([this.d3TreeBox.width, this.d3TreeBox.height])*/
        .nodeSize([this.d3TreeBox.dx, 0])(originData)
      let diagonal = d3
        .linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x)
      let duration = d3.event && d3.event.altKey ? 2500 : 250
      let nodes = d3TreeData.descendants().reverse()
      let links = d3TreeData.links()
      nodes.forEach((d) => {
        //上游在左侧，下游在右侧
        d.y = ($pos ? UP : DOWN) * d.depth * 180 + this.d3TreeBox.width / 2
      })
      let transition = this.svgInstance
        .transition()
        .duration(duration)
        .attr('viewBox', [vm.viewBox.y, vm.viewBox.x, vm.viewBox.width, vm.viewBox.height])
        .tween('resize', window.ResizeObserver ? null : () => () => this.svgInstance.dispatch('toggle'))
      let node = this.visInstance.selectAll('g.node').data(nodes, (d) => d.id)
      let nodeEnter = node
        .enter()
        .append('g')
        .attr('class', (d) => {
          let className = 'node '
          className += d.data.productCode || d.data.typeCode
          className += $pos ? ' up' : ' down'
          className += d.data.typeCode ? ' no-circle' : ' circle'
          className += d.data.root ? ' isRoot' : ''
          return className
        })
        .attr('transform', () => `translate(${source.y0},${source.x0})`)
        .on('click', (d) => {
          // todo 点击事件
        })
        .on('mouseover', (d) => {
          vm.setHighLight(true, d.data, $pos)
        })
        .on('mouseout', (d) => {
          vm.setHighLight(false, d.data, $pos)
        })

      let nodeUpdate = nodeEnter.transition(transition).attr('transform', (d) => `translate(${d.y},${d.x})`)
      let circle = this.visInstance.selectAll(`g.${$pos ? 'up' : 'down'}.circle`)
      let noCircle = this.visInstance.selectAll(`g.${$pos ? 'up' : 'down'}.no-circle`)
      circle
        .append('circle')
        .attr('r', 10)
        .attr('style', (d) => `fill: ${$pos ? UP_COLOR : DOWN_COLOR}`)
      circle
        .append('text')
        .attr('dy', '0.35em')
        .attr('x', (d) => ($pos ? (d._children ? 16 : -16) : d._children ? -16 : 16))
        .attr('text-anchor', (d) => ($pos ? (d._children ? 'start' : 'end') : d._children ? 'end' : 'start'))
        .text((d) => d.data.nameZh)
      circle.append('svg:title').text((d) => `${d.data.nameZh} [${d.data.productCode}]`)
      noCircle
        .append('text')
        .attr('dy', -4)
        .attr('x', 0)
        .attr('x', (d) => ($pos ? (d._children ? 16 : -16) : d._children ? -16 : 16))
        .attr('text-anchor', (d) => ($pos ? (d._children ? 'start' : 'end') : d._children ? 'end' : 'start'))
        .text((d) => d.data.typeName)

      let link = this.visInstance.selectAll('path.link').data(links, (d) => d.target.id)
      let linkEnter = link
        .enter()
        .insert('path', 'g')
        .attr('class', 'link ' + ($pos ? 'up' : 'down'))
        .attr('d', (d) => {
          let o = { x: source.x0, y: source.y0 }
          return diagonal({ source: o, target: o })
        })
      linkEnter.transition(transition).attr('d', diagonal)
      nodes.forEach(function (d) {
        d.x0 = d.x
        d.y0 = d.y
      })
      // 次级节点去除circle
      d3.selectAll('path')
        .append('title')
        .text((d) => {
          return d.source.data.typeName
        })
    },
    setHighLight(isHighLight, data, $pos) {
      const vm = this
      if (data.root) return
      const direction = $pos ? 'up' : 'down'
      setHigh(direction)
      function setHigh(direction) {
        const nodes = vm.visInstance.selectAll(`g.${direction}.${data.productCode}`)
        if (isHighLight) {
          nodes.selectAll('circle').attr('style', (d) => `fill: ${$pos ? UP_COLOR_ACTIVE : DOWN_COLOR_ACTIVE}`)
        } else {
          nodes.selectAll('circle').attr('style', (d) => `fill: ${$pos ? UP_COLOR : DOWN_COLOR}`)
        }
      }
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
    }
  },
  mounted() {
    this.initChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.chart {
  width: 100%;
  height: calc(100% - 40px);
  background-color: white;
}
.graph-box {
  width: 100%;
  height: 100%;
  margin: 0;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
}
</style>
<style lang="scss">
$UP_COLOR: #a49fff;
$DOWN_COLOR: #83bfff;

.link.up {
  stroke: $UP_COLOR;
}

.link.down {
  stroke: $DOWN_COLOR;
}

path.link {
  fill: none;
  stroke-width: 4px;

  .down {
    stroke: $DOWN_COLOR;
  }

  .up {
    stroke: $UP_COLOR;
  }
}

.node {
  circle {
    fill: none;
    stroke-width: 1.5px;
  }

  .down circle {
    stroke: $DOWN_COLOR;
  }

  .up circle {
    stroke: $UP_COLOR;
  }
}
</style>