<template>
  <div class="chart" :id="chartId_bar"></div>
</template>

<script>
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import { chartData } from '@/mockData/prospect'
export default {
  data() {
    const vm = this
    return {
      chartId_bar: `barOnly_${new Date().getTime()}_${Math.random()}`,
      color: ['#3398DB', '#79D2DE', '#FFD37A'],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            let unit = vm.type === 'ratio' ? '%' : '个'
            result += `${item.seriesName}：${item.value}${unit}<br/>`
          })
          return result
        }
      }
    }
  },
  mixins: [resize, bar],
  props: {
    requestPath: String,
    name: String
  },
  methods: {
    setChartOption() {
      this.chartId_bar = this.chartId_bar
      this.chartOption_bar.color = this.color
      this.chartOption_bar.tooltip = Object.assign({}, this.chartOption_bar.tooltip, this.tooltip)
      this.chartOption_bar.grid.left = '40px'
      this.chartOption_bar.yAxis.axisLabel.formatter = '{value}%'
      this.chartOption_bar.series = {
        name: this.name,
        type: 'bar',
        barWidth: '16%',
        data: []
      }
      this.chartOption_bar.xAxis.data = []
      chartData.forEach((item) => {
        this.chartOption_bar.xAxis.data.push(item.year)
        this.chartOption_bar.series.data.push(item.value1)
      })
      this.chartOption_bar.yAxis.axisLabel.formatter = '{value}%'
      this.chartOption_bar.yAxis.max = 100
      this.chartOption_bar.yAxis.minInterval = 1
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
