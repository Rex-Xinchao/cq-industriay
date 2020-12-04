<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <span class="chart-title_sub">{{ subTitle }}</span>
      <i class="icon-tip" :title="tip"></i>
    </h1>
    <div v-if="!noData" class="complexChart" :id="`complexChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import complex from '@/mixins/complex'
export default {
  name: '',
  data() {
    let vm = this
    return {
      title: '',
      tip: '',
      subTitle: '近12月',
      timeStamp: new Date().getTime(),
      legend: {
        show: true,
        itemWidth: 16,
        bottom: 0
      },
      grid: {
        left: '30px',
        right: '30px',
        bottom: '50px',
        top: '20px'
      },
      series: [
        {
          name: '产量',
          type: 'bar',
          color: ['#4A84FF'],
          data: []
        },
        {
          name: '同比变化',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          color: ['red'],
          data: []
        }
      ],
      formatter: function (data) {
        let time = data[0].axisValue + '月'
        let result = `${time}<br/>`
        data.forEach((item) => {
          let unit = item.seriesName === '产量' ? '个' : '%'
          result += `${item.seriesName}：${item.value}${unit}<br/>`
        })
        return result
      }
    }
  },
  mixins: [resize, complex],
  props: {
    chartData: Object
  },
  methods: {
    async getChartData() {
      this.chartData = this.chartData || {}
      this.chartData.indexes = this.chartData.indexes || []
      this.noData = this.chartData.indexes.length === 0
      this.title = this.chartData.indexName
      this.tip = this.chartData.indexName
      return this.chartData
    },
    setChartOption() {
      this.chartId_c = `complexChart_${this.timeStamp}`
      this.chartOption_complex.tooltip.formatter = this.formatter
      this.chartOption_complex.legend = this.legend
      this.chartOption_complex.grid = this.grid
      this.chartOption_complex.series = this.series
      this.chartOption_complex.xAxis.data = []
      this.chartOption_complex.series[0].data = []
      this.chartOption_complex.series[1].data = []
      this.complexData.indexes.forEach((item) => {
        this.chartOption_complex.xAxis.data.push(item.rpt)
        this.chartOption_complex.series[0].data.push(item.latestIndex)
        this.chartOption_complex.series[1].data.push(item.indexRatio)
      })
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
