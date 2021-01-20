<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" title="数据来源于三省一市的司法数据"></i>
      <div class="com-filter fr">
        <el-select class="select" v-model="areaSelect">
          <el-option v-for="item in areaOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <time-select class="select" v-model="dateTime"></time-select>
      </div>
    </h1>
    <div v-loading="loading" v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import { numberFormat } from '@/libs/utils'
import { barData } from '@/mockData/risk'
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    const vm = this
    return {
      areaSelect: 'CSF_CN_500000',
      areaOptions: [
        { label: '重庆市', value: 'CSF_CN_500000' },
        { label: '四川省', value: 'CSF_CN_510000' },
        { label: '陕西省', value: 'CSF_CN_610000' },
        { label: '贵州省', value: 'CSF_CN_520000' }
      ],
      dateTime: [],
      color: ['#3398DB', '#79D2DE'],
      unit: '起',
      grid: { top: 40, bottom: 20, left: 60, right: 40 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (item) => {
          let result = `${item[0].name}<br/>`
          item.forEach((data) => {
            result += `${data.seriesName}：${numberFormat(data.value, 0)} ${vm.unit}<br/>`
          })
          return result
        }
      }
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  props: {
    industryCode: String,
    title: String,
    legends: Array
  },
  watch: {
    dateTime() {
      this.drawChart()
    },
    areaSelect() {
      this.drawChart()
    },
    industryCode: {
      immediate: true,
      handler() {
        this.drawChart()
      }
    }
  },
  methods: {
    getChartOption() {
      const chartOption = { ...this.chartOption }
      const series = []
      this.legends.forEach((item) => {
        series.push({
          name: item,
          type: 'bar',
          barWidth: '25%',
          data: []
        })
      })
      chartOption.color = this.color
      chartOption.series = series
      chartOption.legend.show = false
      chartOption.xAxis.data = []
      chartOption.series[0].data = []
      barData.forEach((item) => {
        chartOption.xAxis.data.push(item.time)
        chartOption.series[0].data.push(item.value)
      })
      chartOption.yAxis.axisLabel.formatter = `{value} ${this.unit}`
      return chartOption
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.select:first-of-type {
  width: 120px;
}
</style>
