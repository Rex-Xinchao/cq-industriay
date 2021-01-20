<template>
  <div class="com-main">
    <h1 class="com-title">
      <div class="line-half">
        {{ title }}
        <i class="icon-tip" title="样本数据来源于工商企业"></i>
      </div>
      <div class="operation-bar line-half fr">
        <span class="bar-item" :class="{ active: isBar }" @click="isBar = true">注册资本</span>
        <span class="bar-item" :class="{ active: !isBar }" @click="isBar = false">成立时间</span>
      </div>
    </h1>
    <div v-loading="loading" v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show
      v-loading="loading"
      class="chart-nodata"
      style="height: calc(100% - 100px); top: 80px"
      :show="noData"
    ></no-data-show>
  </div>
</template>

<script>
import { converUnit } from '@/libs/utils'
import { competitionPieData, competitionBarData } from '@/api/analysis'
import { Echart_Base, Echart_Axis, Echart_Pie } from '@/mixins/echarts'
export default {
  data() {
    return {
      isBar: true,
      color_bar: ['#3398DB'],
      data: [],
      grid: { left: 4, right: 20, bottom: 55, top: 20 },
      color_pie: ['#147AD6', '#79D2DE', '#EC6666', '#F6BD16'],
      dataZoom: [{ show: true }, { type: 'inside' }]
    }
  },
  props: {
    industryCode: String,
    title: String
  },
  watch: {
    isBar() {
      this.drawChart()
    },
    industryCode: {
      immediate: true,
      handler() {
        this.drawChart()
      }
    }
  },
  mixins: [Echart_Base, Echart_Axis, Echart_Pie],
  methods: {
    async getChartData() {
      let result = []
      if (this.isBar) {
        this.response = await competitionBarData(this.urlOptions)
          .then((res) => res)
          .catch((e) => {})
        result = (this.response && this.response.result) || []
        result = result.reverse()
      } else {
        this.response = await competitionPieData(this.urlOptions)
          .then((res) => res)
          .catch((e) => {})
        result = (this.response && this.response.result) || []
      }
      this.noData = result.length === 0
      return result
    },
    getChartOption() {
      const vm = this
      if (this.isBar) {
        const chartOption = { ...this.chartOption }
        chartOption.color = this.color_bar
        chartOption.dataZoom = this.dataZoom
        chartOption.series = {
          type: 'bar',
          data: []
        }
        chartOption.tooltip = {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (data) {
            let time = data[0].axisValue
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `企业数量：${item.value} 个<br/>`
            })
            return result
          }
        }
        chartOption.xAxis.data = this.chartData.map((item) => converUnit(item.key, 'zh', 0))
        chartOption.series.data = this.chartData.map((item) => item.value)
        console.log(chartOption)
        return chartOption
      } else {
        const chartOption = { ...this.chartOption_pie }
        chartOption.color = this.color_pie
        chartOption.legend.left = null
        chartOption.legend.data = this.chartData.map((item) => item.name)
        chartOption.legend.formatter = function (name) {
          let number = vm.data.find((item) => item.name === name).value
          return '{a|' + name + '}' + '{b|' + number + ' 家}'
        }
        chartOption.legend.textStyle = {
          rich: {
            a: {
              fontSize: 12,
              color: '#9EA2AE',
              padding: [0, 16, 4, 0]
            },
            b: {
              fontSize: 14,
              padding: [0, 16, 0, 0],
              fontWeight: 500
            }
          }
        }
        this.data = this.chartData.map((item, index) => {
          return {
            name: item.name,
            value: item.value
          }
        })
        console.log(chartOption)
        chartOption.series[0].data = this.data
        if (window && window.innerWidth && window.innerWidth <= 1440) {
          chartOption.legend.right = 0
        }
        return chartOption
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>