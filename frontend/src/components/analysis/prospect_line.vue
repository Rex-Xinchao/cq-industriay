<template>
  <div class="com-chart" v-loading="loading">
    <div v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { converUnit } from '@/libs/utils'
import { prospectData } from '@/api/analysis'
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    return {
      tooltip: {
        trigger: 'axis',
        formatter: (data) => {
          let result = `${data[0].axisValue}<br/>`
          data.forEach((item) => {
            let value = this.type === 'ratio' ? `${item.value}%` : `${converUnit(item.value)}${this.unit}`
            result += `${item.seriesName}：${value}<br/>`
          })
          return result
        }
      },
      grid: { left: 60, right: 20, bottom: 30, top: 60 },
      request: prospectData,
      urlOptions: {},
      reponseKey: 'profit'
    }
  },
  props: {
    industryCode: String,
    requestPath: String,
    name: String,
    type: String,
    unit: {
      type: String,
      default: '元'
    },
    color: {
      type: Array,
      default: () => ['#3398DB']
    }
  },
  watch: {
    industryCode: {
      immediate: true,
      handler() {
        this.drawChart()
      }
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  methods: {
    getChartOption() {
      const chartOptions = { ...this.chartOption }
      chartOptions.color = this.color
      chartOptions.legend.left = 0
      chartOptions.xAxis.data = []
      chartOptions.series = {
        name: this.name,
        type: 'line',
        barWidth: '16%',
        data: []
      }
      this.chartData.forEach((item) => {
        chartOptions.xAxis.data.push(item.rpt)
        if (this.name === '行业毛利率') {
          chartOptions.series.data.push(item.value1)
        } else {
          chartOptions.series.data.push(item.value2)
        }
      })
      if (this.type === 'ratio') {
        chartOptions.yAxis.axisLabel.formatter = '{value}%'
      } else {
        chartOptions.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      }
      return chartOptions
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
