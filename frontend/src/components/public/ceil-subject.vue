<template>
  <el-popover placement="bottom-start" popper-class="event-subject-popover" width="336" trigger="hover">
    <slot slot="reference"></slot>
    <p>{{ name }}</p>
    <div v-loading="loading" class="chart-main" :id="chartId"></div>
  </el-popover>
</template>
<script>
import { numberFormat } from '@/libs/utils'
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    const vm = this
    return {
      color: ['#3398DB'],
      loading: false,
      grid: { left: 60, right: 20, bottom: 20, top: 20 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (data) => {
          let time = data[0].axisValue
          let result = ''
          data.forEach((item) => {
            result += `${time}：${numberFormat(item.value)} ${vm.unit}<br/>`
          })
          return result
        }
      }
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  props: {
    dataMap: Object,
    unit: String,
    name: String
  },
  methods: {
    getChartOption() {
      const chartOption = { ...this.chartOption }
      const data = this.dataMap
      chartOption.color = this.color
      chartOption.series = {
        type: 'bar',
        barWidth: '36%',
        data: []
      }
      chartOption.xAxis.data = []
      chartOption.series.data = []
      let max = 0
      for (let key in data) {
        if (key !== 'name' && key !== 'unit') {
          let value = data[key]
          max = Math.max(max, Number(value))
          chartOption.series.data.push(value)
          chartOption.xAxis.data.push(key)
        }
      }
      return chartOption
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