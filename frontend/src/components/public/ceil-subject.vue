<template>
  <el-popover placement="bottom-start" popper-class="event-subject-popover" width="336" trigger="hover">
    <slot slot="reference"></slot>
    <p>{{ name }}</p>
    <div v-loading="loading" class="chart-main" :id="chartId_bar"></div>
  </el-popover>
</template>
<script>
import { numberFormat } from '@/libs/utils'
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
    dataMap: Object,
    unit: String,
    name: String
  },
  methods: {
    setChartOption() {
      const data = this.dataMap
      const vm = this
      this.chartOption_bar.color = this.color
      this.chartOption_bar.grid.top = '20px'
      this.chartOption_bar.grid.left = '60px'
      this.chartOption_bar.series = {
        type: 'bar',
        barWidth: '36%',
        data: []
      }
      this.chartOption_bar.tooltip.formatter = (data) => {
        let time = data[0].axisValue
        let result = ''
        let unit = this.unit
        data.forEach((item) => {
          result += `${time}：${numberFormat(item.value)} ${unit}<br/>`
        })
        return result
      }
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series.data = []
      let max = 0
      for (let key in data) {
        if (key !== 'name' && key !== 'unit') {
          let value = data[key]
          max = Math.max(max, Number(value))
          this.chartOption_bar.series.data.push(value)
          this.chartOption_bar.xAxis.data.push(key)
        }
      }
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