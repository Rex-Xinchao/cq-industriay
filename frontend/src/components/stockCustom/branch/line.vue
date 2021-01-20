<template>
  <div class="com-main" v-loading="loading">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="tip"></i>
    </h1>
    <div v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    const vm = this
    return {
      title: '',
      tip: '',
      subTitle: '近12月',
      timeStamp: new Date().getTime(),
      tooltip: {
        trigger: 'axis',
        formatter: function (data) {
          let time = data[0].axisValue + '月'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${vm.name}：${item.value}%<br/>`
          })
          return result
        }
      },
      legend: {
        show: true,
        itemWidth: 16,
        bottom: 0
      },
      grid: { bottom: 50, top: 20, left: 40, right: 40 },
      series: {
        name: null,
        type: 'line',
        smooth: true,
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#344CE9'
            },
            {
              offset: 1,
              color: '#ffe'
            }
          ])
        }
      }
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  props: {
    chartData: Object
  },
  watch: {
    chartData: {
      immediate: true,
      handler() {
        this.drawChart()
      }
    }
  },
  methods: {
    async getChartData() {
      this.chartData = this.chartData || {}
      this.chartData.indexes = this.chartData.indexes || []
      this.noData = this.chartData.indexes.length === 0
      this.title = this.chartData.indexName
      this.tip = this.chartData.indexName
      this.name = this.chartData.name
      return this.chartData
    },
    getChartOption() {
      const chartOption = { ...this.chartOption }
      chartOption.color = this.color
      this.series.name = this.name
      chartOption.series = this.series
      chartOption.xAxis.data = []
      chartOption.series.data = []
      chartData.indexes.forEach((item) => {
        chartOption.xAxis.data.push(item.rpt)
        chartOption.series.data.push(item.indexRatio)
      })
      return chartOption
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
