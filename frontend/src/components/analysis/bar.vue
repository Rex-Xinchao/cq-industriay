<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-loading="loading" v-if="!noData" id="barChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
export default {
  data() {
    return {
      color: ['#3398DB', '#79D2DE']
    }
  },
  mixins: [resize, bar],
  props: {
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
      this.chartOption_bar.series = series
      this.chartOption_bar.xAxis.data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
      this.chartOption_bar.series[0].data = [100, 200, 80, 99]
      this.chartOption_bar.series[1].data = [100, 200, 80, 99]
      const max = 200
      this.chartOption_bar.yAxis.minInterval = max < 10 ? 1 : 10
      this.chartOption_bar.yAxis.max = max ? max : 10
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
