<template>
  <el-popover placement="bottom-start" popper-class="event-subject-popover" width="336" trigger="hover">
    <slot slot="reference"></slot>
    <p>重庆市GDP（亿元）</p>
    <div v-loading="loading" class="chart-main" :id="chartId_bar"></div>
  </el-popover>
</template>
<script>
import { converUnit_w, numberFormat } from '@/libs/utils'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
export default {
  data() {
    return {
      color: ['#3398DB'],
      loading: false,
      chartId_bar: `barChart${new Date().getTime()}${Math.random()}`
    }
  },
  mixins: [resize, bar],
  props: {
    data: Object
  },
  methods: {
    setChartOption() {
      const data = [
        {
          loanBalance: {
            amount: 100000
          },
          rpt: '2020'
        }
      ]
      const vm = this
      this.chartOption_bar.color = this.color
      this.chartOption_bar.grid.top = '20px'
      this.chartOption_bar.series = {
        type: 'bar',
        barWidth: '36%',
        data: []
      }
      this.chartOption_bar.tooltip.formatter = function (data) {
        let time = data[0].axisValue
        let result = ''
        let unit = '万元'
        data.forEach((item) => {
          result += `${time}：${numberFormat(item.value)} ${unit}<br/>`
        })
        return result
      }
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series.data = []
      let max = 0
      data.forEach((item) => {
        let value = converUnit_w(item.loanBalance.amount)
        max = Math.max(max, Number(value))
        this.chartOption_bar.series.data.push(value)
        this.chartOption_bar.xAxis.data.push(item.rpt)
      })
      return this.chartOption_bar
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
.chart-main {
  width: 336px;
  height: 228px;
}
</style>