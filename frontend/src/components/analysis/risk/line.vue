<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" title="数据基于重庆银行内数据进行的测算"></i>
    </h1>
    <div v-loading="loading" v-if="!noData" class="chart-main" id="lineChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { lineData } from '@/mockData/risk'
import resize from '@/mixins/resize'
import line from '@/mixins/line'
export default {
  data() {
    return {
      color: ['#3398DB', '#79D2DE']
    }
  },
  mixins: [resize, line],
  props: {
    title: String,
    legends: Array
  },
  methods: {
    setChartOption() {
      const series = []
      this.chartOption_line.color = this.color
      this.legends.forEach((item) => {
        series.push({
          name: item,
          type: 'line',
          data: []
        })
      })
      this.chartOption_line.series = series

      let max = 0
      this.chartOption_line.xAxis.data = []
      this.chartOption_line.series[0].data = []
      lineData.forEach((item) => {
        max = Math.max(max, item.value, item.value1)
        this.chartOption_line.xAxis.data.push(item.time)
        this.chartOption_line.series[0].data.push(item.value)
        this.chartOption_line.series[1].data.push(item.value1)
      })
      this.chartOption_line.yAxis.minInterval = max < 10 ? 1 : 10
      this.chartOption_line.yAxis.max = max ? max : 10
      return this.chartOption_line
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
