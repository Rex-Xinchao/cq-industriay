<template>
  <div class="com-main" v-loading="loading">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="tip"></i>
    </h1>
    <div v-if="!noData" class="chart-main" :id="`lineChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
import line from '@/mixins/line'
export default {
  data() {
    const vm = this
    return {
      title: '',
      tip: '',
      subTitle: '近12月',
      timeStamp: new Date().getTime(),
      tooltip: {
        trigger: 'axis',
        formatter: function (data) {
          let time = data[0].axisValue + '月'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${vm.name}：${item.value}%<br/>`
          })
          return result
        }
      },
      legend: {
        show: true,
        itemWidth: 16,
        bottom: 0
      },
      grid: {
        bottom: '50px',
        top: '20px'
      },
      series: {
        name: null,
        type: 'line',
        smooth: true,
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#344CE9'
            },
            {
              offset: 1,
              color: '#ffe'
            }
          ])
        }
      }
    }
  },
  mixins: [resize, line],
  props: {
    chartData: Object
  },
  watch: {
    chartData: {
      immediate: true,
      handler() {
        this.drawChart()
      }
    }
  },
  methods: {
    async getChartData() {
      this.chartData = this.chartData || {}
      this.chartData.indexes = this.chartData.indexes || []
      this.noData = this.chartData.indexes.length === 0
      this.title = this.chartData.indexName
      this.tip = this.chartData.indexName
      this.name = this.chartData.name
      return this.chartData
    },
    setChartOption() {
      this.chartId_line = `lineChart_${this.timeStamp}`
      this.chartOption_line.color = this.color
      this.chartOption_line.tooltip = Object.assign({}, this.chartOption_line.tooltip, this.tooltip)
      this.chartOption_line.grid = Object.assign({}, this.chartOption_line.grid, this.grid)
      this.chartOption_line.legend = this.legend
      this.series.name = this.name
      this.chartOption_line.series = this.series
      this.chartOption_line.xAxis.data = []
      this.chartOption_line.series.data = []
      this.lineData.indexes.forEach((item) => {
        this.chartOption_line.xAxis.data.push(item.rpt)
        this.chartOption_line.series.data.push(item.indexRatio)
      })
      return this.chartOption_line
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
