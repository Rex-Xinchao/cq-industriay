<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <i class="icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-loading="loading" v-if="!noData" id="lineChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
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
      this.chartOption_line.xAxis.data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
      this.chartOption_line.series[0].data = ['100', '200', '80', '99']
      this.chartOption_line.series[1].data = ['50', '100', '10', '80']
      // this.chartOption.yAxis[0].minInterval = max < 10 ? 1 : 10
      // this.chartOption.yAxis[0].max = max ? max : 10
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
#lineChart {
  width: 100%;
  flex: 1;
}
</style>
