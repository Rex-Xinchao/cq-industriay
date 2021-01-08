<template>
  <div class="com-chart" v-loading="loading">
    <div v-if="!noData" class="chart-main" :id="chartId_line"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { converUnit } from '@/libs/utils'
import { prospectData } from '@/api/analysis'
import resize from '@/mixins/resize'
import line from '@/mixins/line'
export default {
  data() {
    return {
      chartId_line: `line_${new Date().getTime()}_${Math.random()}`,
      formatter: (data) => {
        let result = `${data[0].axisValue}<br/>`
        data.forEach((item) => {
          let value = this.type === 'ratio' ? `${item.value}%` : `${converUnit(item.value)}${this.unit}`
          result += `${item.seriesName}：${value}<br/>`
        })
        return result
      }
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
  mixins: [resize, line],
  methods: {
    async getChartData() {
      let data = await prospectData()
      let result = data.profit || []
      this.noData = result.length === 0
      return result
    },
    setChartOption() {
      this.chartId_line = this.chartId_line
      this.chartOption_line.color = this.color
      this.chartOption_line.legend.left = 0
      this.chartOption_line.tooltip.formatter = this.formatter
      this.chartOption_line.grid.left = '60px'
      this.chartOption_line.xAxis.data = []
      this.chartOption_line.yAxis.min = null
      this.chartOption_line.series = {
        name: this.name,
        type: 'line',
        barWidth: '16%',
        data: []
      }
      this.lineData.forEach((item) => {
        this.chartOption_line.xAxis.data.push(item.rpt)
        if (this.name === '行业毛利率') {
          this.chartOption_line.series.data.push(item.value1)
        } else {
          this.chartOption_line.series.data.push(item.value2)
        }
      })
      if (this.type === 'ratio') {
        this.chartOption_line.yAxis.axisLabel.formatter = '{value}%'
      } else {
        this.chartOption_line.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      }
      return this.chartOption_line
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
