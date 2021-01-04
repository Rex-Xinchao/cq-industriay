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
    <div v-loading="loading" v-if="!noData" class="chart-main" id="chart"></div>
    <no-data-show
      v-loading="loading"
      class="chart-nodata"
      style="height: calc(100% - 100px); top: 80px"
      :show="noData"
    ></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
import { competitionPieData, competitionBarData } from '@/api/analysis'
import { converUnit } from '@/libs/utils'
import bar from '@/mixins/bar'
import pie from '@/mixins/pie'
export default {
  data() {
    let vm = this
    return {
      chartId_pie: 'chart',
      chartId_bar: 'chart',
      isBar: true,
      color_bar: ['#3398DB'],
      data: [],
      color_pie: ['#147AD6', '#79D2DE', '#EC6666', '#F6BD16'],
      legend: ['2年以下', '2~5年', '5年以上'],
      dataZoom: [{ show: true }, { type: 'inside' }]
    }
  },
  props: {
    title: String
  },
  mixins: [resize, bar, pie],
  watch: {
    isBar() {
      this.drawChart()
    }
  },
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
        let result = []
        this.response = await competitionPieData(this.urlOptions)
          .then((res) => res)
          .catch((e) => {})
        result = (this.response && this.response.result) || []
      }
      this.noData = result.length === 0
      return result
    },
    setChartOption() {
      const vm = this
      if (this.isBar) {
        this.chartOption_bar.color = this.color_bar
        this.chartOption_bar.grid.top = '20px'
        this.chartOption_bar.grid.bottom = '55px'
        this.chartOption_bar.dataZoom = this.dataZoom
        this.chartOption_bar.series = {
          type: 'bar',
          data: []
        }
        this.chartOption_bar.tooltip.formatter = function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `企业数量：${item.value} 个<br/>`
          })
          return result
        }
        this.chartOption_bar.xAxis.data = this.pieData.map((item) => converUnit(item.key, 'zh', 0))
        this.chartOption_bar.series.data = this.pieData.map((item) => item.value)

        return this.chartOption_bar
      } else {
        this.chartOption_pie.color = this.color_pie
        this.chartOption_pie.legend.data = this.pieData.map((item) => item.name)
        this.chartOption_pie.legend.top = 'center'
        this.chartOption_pie.legend.formatter = function (name) {
          let number = vm.data.find((item) => item.name === name).value
          return '{a|' + name + '}' + '{b|' + number + ' 家}'
        }
        this.chartOption_pie.legend.textStyle = {
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
        this.data = this.pieData.map((item, index) => {
          return {
            name: item.name,
            value: item.value
          }
        })
        this.chartOption_pie.series[0].data = this.data
        if (window && window.innerWidth && window.innerWidth <= 1440) {
          this.chartOption_pie.legend.right = 0
        }
        return this.chartOption_pie
      }
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