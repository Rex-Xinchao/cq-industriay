<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <i class="icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-loading="loading" v-if="!noData" id="barChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import { chartData } from '@/mockData/prospect'
export default {
  data() {
    return {
      color: ['#3398DB', '#79D2DE'],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${item.seriesName}：${item.value}%<br/>`
          })
          return result
        }
      }
    }
  },
  mixins: [resize, bar],
  props: {
    requestPath: String,
    title: String,
    legends: Array
  },
  methods: {
    setChartOption() {
      const series = []
      this.legends.forEach((item) => {
        series.push({
          name: item,
          type: 'bar',
          barWidth: '25%',
          data: []
        })
      })
      this.chartOption_bar.color = this.color
      this.chartOption_bar.tooltip = Object.assign({}, this.chartOption_bar.tooltip, this.tooltip)
      this.chartOption_bar.grid.left = '40px'
      this.chartOption_bar.yAxis.axisLabel.formatter = '{value}%'
      this.chartOption_bar.series = series
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series[0].data = []
      this.chartOption_bar.series[1].data = []
      chartData.forEach((item) => {
        this.chartOption_bar.xAxis.data.push(item.year)
        this.chartOption_bar.series[0].data.push(item.value1)
        this.chartOption_bar.series[1].data.push(item.value2)
      })
      this.chartOption_bar.yAxis.minInterval = 1
      this.chartOption_bar.yAxis.max = 100
      return this.chartOption_bar
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
#barChart {
  width: 100%;
  flex: 1;
}
</style>
