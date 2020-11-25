<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <i class="icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-if="!noData" class="lineChart" :id="`lineChart_${timeStamp}`"></div>
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
      timeStamp: new Date().getTime(),
      tooltip: {
        trigger: 'axis',
        formatter: function (data) {
          let time = data[0].axisValue + '月'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${item.seriesName}：${item.value}%<br/>`
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
        name: vm.name,
        type: 'line',
        smooth: true,
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: vm.color
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
    title: String,
    subTitle: String,
    name: String,
    color: String
  },
  methods: {
    setChartOption() {
      this.chartId_line = `lineChart_${this.timeStamp}`
      this.chartOption_line.color = this.color
      this.chartOption_line.tooltip = Object.assign({}, this.chartOption_line.tooltip, this.tooltip)
      this.chartOption_line.grid = Object.assign({}, this.chartOption_line.grid, this.grid)
      this.chartOption_line.legend = this.legend
      this.chartOption_line.series = this.series
      this.chartOption_line.xAxis.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      this.chartOption_line.series.data = [50, 10, 21, 9, 30, 12, 6, 5, 8, 3, 2, 1]
      return this.chartOption_line
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.lineChart {
  width: 100%;
  flex: 1;
}
</style>
