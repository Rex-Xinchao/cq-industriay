<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="tip"></i>
      <el-select class="fr" v-model="barType" placeholder="">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </h1>
    <div class="com-chart" v-loading="loading">
      <div v-if="!noData" class="chart-main" :id="chartId"></div>
      <no-data-show class="chart-nodata" :show="noData"></no-data-show>
    </div>
  </div>
</template>

<script>
import { converUnit } from '@/libs/utils'
import { prospectData } from '@/api/analysis'
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    const vm = this
    return {
      barType: 0,
      options: [
        {
          label: '龙头企业',
          value: 0
        },
        {
          label: '工商企业',
          value: 1
        }
      ],
      legends: ['上市', '三板', '发债'],
      chartId_bar: `barChart${new Date().getTime()}`,
      color: ['#3398DB', '#79D2DE', '#FFD37A'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (data) => {
          let result = `${data[0].axisValue}<br/>`
          data.forEach((item) => {
            let value = vm.type === 'ratio' ? `${item.value}%` : `${converUnit(item.value, 'zh', 0)}${vm.unit}`
            result += `${item.seriesName}：${value}<br/>`
          })
          return result
        }
      },
      request: prospectData,
      urlOptions: {},
      reponseKey: 'prospect'
    }
  },
  props: {
    industryCode: String,
    requestPath: String,
    title: String,
    tip: String,
    type: {
      type: String,
      default: 'number'
    },
    unit: {
      type: String,
      default: '家'
    }
  },
  watch: {
    industryCode: {
      immediate: true,
      handler() {
        this.drawChart()
      }
    },
    barType(data) {
      if (data === 0) {
        this.legends = ['上市', '三板', '发债']
      } else {
        this.legends = ['工商企业']
      }
      this.drawChart()
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  methods: {
    getChartOption() {
      const chartOption = { ...this.chartOption }
      const series = []
      this.legends.forEach((item) => {
        series.push({
          name: item,
          type: 'bar',
          barWidth: '16%',
          data: []
        })
      })
      chartOption.color = this.color
      chartOption.grid.left = 60
      chartOption.series = series
      chartOption.xAxis.data = []
      chartOption.series[0].data = []
      chartOption.series[1] && (chartOption.series[1].data = [])
      chartOption.series[2] && (chartOption.series[2].data = [])
      if (this.barType === 0) {
        this.chartData.forEach((item) => {
          chartOption.xAxis.data.push(item.rpt)
          chartOption.series[0].data.push(item.value1)
          chartOption.series[1].data.push(item.value2)
          chartOption.series[2].data.push(item.value3)
        })
      } else {
        this.chartData.forEach((item) => {
          chartOption.xAxis.data.push(item.rpt)
          chartOption.series[0].data.push(item.value4)
        })
      }
      if (this.type === 'ratio') {
        chartOption.yAxis.axisLabel.formatter = '{value}%'
      } else {
        chartOption.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0) + this.unit
      }
      return chartOption
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
