<template>
  <div class="com-main">
    <h1 class="com-title_min">
      {{ title }}
      <i class="icon-tip" title="数据基于重庆银行内数据进行的测算"></i>
    </h1>
    <div v-loading="loading" v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    return {
      grid: { left: 40, right: 30, bottom: 20, top: 20 }
    }
  },
  props: {
    title: String,
    legendName: String,
    color: String,
    rejectData: Array,
    keyName: String
  },
  mixins: [Echart_Base, Echart_Axis],
  methods: {
    getChartOption() {
      const chartOption = { ...this.chartOption }
      const color = this.color
      chartOption.color = this.color
      chartOption.legend.show = false
      chartOption.tooltip.formatter = '{a}<br/>{b}：{c}%'
      chartOption.series = {
        name: this.legendName,
        type: 'line',
        data: [],
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: color
            },
            {
              offset: 1,
              color: '#ffe'
            }
          ])
        }
      }
      chartOption.xAxis.data = []
      this.rejectData.forEach((item) => {
        chartOption.xAxis.data.push(item.rpt)
        chartOption.series.data.push(item[this.keyName])
      })
      chartOption.yAxis.axisLabel.formatter = '{value}%'
      return chartOption
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
