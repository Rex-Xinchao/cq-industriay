<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-if="!noData" class="complexChart" :id="`complexChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
import complex from '@/mixins/complex'
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
          yAxisIndex: 1,
          color: ['#F6BD16'],
          data: []
        },
        {
          name: this.barTitle,
          type: 'bar',
          barWidth: '25%',
          color: ['#4A84FF'],
          data: []
        }
      ],
      formatter: function (data) {
        let time = data[0].axisValue + '月'
        let result = `${time}<br/>`
        data.forEach((item) => {
          result += `${item.seriesName}：${item.value}<br/>`
        })
        return result
      }
    }
  },
  mixins: [resize, complex],
  props: {
    title: String,
    lineTitle: String,
    barTitle: String
  },
  methods: {
    setChartOption() {
      this.chartId_c = `complexChart_${this.timeStamp}`
      this.chartOption_complex.tooltip.formatter = this.formatter
      this.chartOption_complex.series = this.series
      const max = 12
      this.chartOption_complex.yAxis[0].max = max ? max : 10
      this.chartOption_complex.xAxis.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      this.chartOption_complex.series[0].data = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      this.chartOption_complex.series[1].data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      return this.chartOption_complex
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.complexChart {
  width: 100%;
  flex: 1;
}
</style>
