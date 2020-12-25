<template>
  <div class="com-main">
    <h1 class="com-title_min">
      {{ title }}
      <i class="icon-tip" title="数据基于重庆银行内数据进行的测算"></i>
    </h1>
    <div v-loading="loading" v-if="!noData" class="chart-main" :id="chartId_line"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
import line from '@/mixins/line'
export default {
  data() {
    return {
      chartId_line: `lineChart_${new Date().getTime()}_${Math.random()}`,
      grid: {
        left: '40px',
        right: '30px',
        bottom: '20px',
        top: '20px'
      }
    }
  },
  mixins: [resize, line],
  props: {
    title: String,
    legend: String,
    color: String
  },
  methods: {
    setChartOption() {
      const vm = this
      this.chartOption_line.color = this.color
      this.chartOption_line.legend.show = false
      this.chartOption_line.tooltip.formatter = '{a}<br/>{b}：{c}%'
      this.chartOption_line.grid = this.grid
      this.chartOption_line.series = {
        name: this.legend,
        type: 'line',
        data: [],
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: vm.color
            },
            {
              offset: 1,
              color: '#ffe'
            }
          ])
        }
      }
      console.log(this.chartOption_line)
      let max = 0
      this.chartOption_line.xAxis.data = []
      let lineData = [
        {
          time: '2020.8',
          value: (Math.random() * 100).toFixed(2)
        },
        {
          time: '2020.9',
          value: (Math.random() * 100).toFixed(2)
        }
      ]
      lineData.forEach((item) => {
        max = Math.max(max, item.value, item.value1)
        this.chartOption_line.xAxis.data.push(item.time)
        this.chartOption_line.series.data.push(item.value)
      })
      this.chartOption_line.yAxis.minInterval = max < 10 ? 1 : 10
      this.chartOption_line.yAxis.max = max ? max : 10
      this.chartOption_line.yAxis.axisLabel.formatter = '{value}%'
      this.chartOption_line.yAxis.max = 100
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
