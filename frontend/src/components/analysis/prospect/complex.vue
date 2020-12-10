<template>
  <div class="com-main" v-loading="loading">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="tip"></i>
    </h1>
    <div v-if="!noData" class="chart-main" :id="`complexChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
import complex from '@/mixins/complex'
import { chartData2 } from '@/mockData/prospect'
export default {
  data() {
    let vm = this
    return {
      timeStamp: new Date().getTime(),
      series: [
        {
          name: this.lineTitle,
          type: 'line',
          smooth: true,
          color: ['#F6BD16'],
          data: []
        },
        {
          name: this.barTitle,
          type: 'bar',
          barWidth: '25%',
          yAxisIndex: 1,
          color: ['#4A84FF'],
          data: []
        }
      ],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          let unit = vm.seriesIndex
          data.forEach((item) => {
            let unit = vm.types[item.seriesIndex] === 'ratio' ? '%' : '万元'
            result += `${item.seriesName}：${item.value}${unit}<br/>`
          })
          return result
        }
      }
    }
  },
  mixins: [resize, complex],
  props: {
    requestPath: String,
    title: String,
    lineTitle: String,
    barTitle: String,
    tip: String,
    types: {
      type: Array,
      default: () => ['number', 'number']
    }
  },
  methods: {
    setChartOption() {
      this.chartId_c = `complexChart_${this.timeStamp}`
      this.chartOption_complex.tooltip = Object.assign({}, this.chartOption_complex.tooltip, this.tooltip)
      this.chartOption_complex.series = this.series
      this.chartOption_complex.yAxis[1].data = []
      this.chartOption_complex.series[0].data = []
      this.chartOption_complex.series[1].data = []
      let max1 = 0
      let max2 = 0
      chartData2.forEach((item) => {
        max1 = Math.max(item.value2, max1)
        max2 = Math.max(item.value1, max2)
        this.chartOption_complex.xAxis.data.push(item.year)
        this.chartOption_complex.series[0].data.push(item.value2)
        this.chartOption_complex.series[1].data.push(item.value1)
      })

      this.chartOption_complex.yAxis[0].max = max1 ? max1 : 10
      this.chartOption_complex.yAxis[1].max = max2 ? max2 : 10
      if (this.types[0] === 'ratio') {
        this.chartOption_complex.yAxis[0].axisLabel.formatter = '{value}%'
        this.chartOption_complex.yAxis[0].max = 100
        this.chartOption_complex.grid.left = '40px'
      }
      if (this.types[1] === 'ratio') {
        this.chartOption_complex.yAxis[1].axisLabel.formatter = '{value}%'
        this.chartOption_complex.yAxis[1].max = 100
        this.chartOption_complex.grid.right = '40px'
      }
      return this.chartOption_complex
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
