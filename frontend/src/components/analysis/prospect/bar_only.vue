<template>
  <div class="chart" :id="chartId_bar"></div>
</template>

<script>
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import { prospectData } from '@/api/analysis'
import { converUnit } from '@/libs/utils'
export default {
  data() {
    const vm = this
    return {
      chartId_bar: `barOnly_${new Date().getTime()}_${Math.random()}`,
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            let value = vm.type === 'ratio' ? `${item.value}%` : `${converUnit(item.value)}${vm.unit}`
            result += `${item.seriesName}：${value}<br/>`
          })
          return result
        }
      }
    }
  },
  mixins: [resize, bar],
  props: {
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
  methods: {
    async getChartData() {
      let data = await prospectData()
      let result = data.profit || []
      this.noData = result.length === 0
      return result
    },
    setChartOption() {
      this.chartId_bar = this.chartId_bar
      this.chartOption_bar.color = this.color
      this.chartOption_bar.tooltip = Object.assign({}, this.chartOption_bar.tooltip, this.tooltip)
      this.chartOption_bar.series = {
        name: this.name,
        type: 'bar',
        barWidth: '16%',
        data: []
      }
      this.chartOption_bar.xAxis.data = []
      this.barData.forEach((item) => {
        this.chartOption_bar.xAxis.data.push(item.rpt)
        this.chartOption_bar.series.data.push(item.value1)
      })
      if (this.type === 'ratio') {
        this.chartOption_bar.yAxis.axisLabel.formatter = '{value}%'
      } else {
        this.chartOption_bar.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      }
      this.chartOption_bar.grid.left = '60px'
      return this.chartOption_bar
    }
  },
  mounted() {
    this.legend = this.legends
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
