<template>
  <div class="com-main" v-loading="loading">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="tip"></i>
      <el-select class="fr" v-model="barType" placeholder="">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </h1>
    <div v-if="!noData" class="chart-main" :id="`complexChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import complex from '@/mixins/complex'
import { prospectData } from '@/api/analysis'
import { converUnit } from '@/libs/utils'
export default {
  data() {
    let vm = this
    return {
      timeStamp: new Date().getTime(),
      series: [
        {
          type: 'bar',
          barWidth: '25%',
          yAxisIndex: 0,
          color: ['#4A84FF'],
          data: []
        },
        {
          type: 'line',
          color: ['#F6BD16'],
          yAxisIndex: 1,
          data: []
        }
      ],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            let type = vm.types[item.seriesIndex]
            let value = type === 'ratio' ? `${item.value}%` : `${converUnit(item.value)}${vm.unit}`
            result += `${item.seriesName}：${value}<br/>`
          })
          return result
        }
      },
      barType: 0,
      options: [
        {
          label: '行业收入',
          value: 0
        },
        {
          label: '行业资产',
          value: 1
        }
      ]
    }
  },
  mixins: [resize, complex],
  props: {
    requestPath: String,
    title: String,
    tip: String,
    types: {
      type: Array,
      default: () => ['number', 'number']
    },
    unit: {
      type: String,
      default: '元'
    }
  },
  watch: {
    barType() {
      this.drawChart()
    }
  },
  methods: {
    async getChartData() {
      let data = await prospectData()
      let result = data.growth || []
      this.noData = result.length === 0
      return result
    },
    setChartOption() {
      console.log(111)
      this.chartId_c = `complexChart_${this.timeStamp}`
      this.chartOption_complex.tooltip = Object.assign({}, this.chartOption_complex.tooltip, this.tooltip)
      this.chartOption_complex.series = this.series
      this.chartOption_complex.xAxis.data = []
      this.chartOption_complex.series[1].data = []
      this.chartOption_complex.series[1].name = this.options[this.barType].label + '增速'
      this.chartOption_complex.series[0].data = []
      this.chartOption_complex.series[0].name = this.options[this.barType].label

      if (this.barType === 0) {
        this.complexData.forEach((item) => {
          this.chartOption_complex.xAxis.data.push(item.rpt)
          this.chartOption_complex.series[0].data.push(item.value1)
          this.chartOption_complex.series[1].data.push(item.value2)
        })
      } else {
        this.complexData.forEach((item) => {
          this.chartOption_complex.xAxis.data.push(item.rpt)
          this.chartOption_complex.series[0].data.push(item.value3)
          this.chartOption_complex.series[1].data.push(item.value4)
        })
      }
      if (this.types[0] === 'ratio') {
        this.chartOption_complex.yAxis[0].axisLabel.formatter = '{value}%'
      } else {
        this.chartOption_complex.yAxis[0].axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      }
      if (this.types[1] === 'ratio') {
        this.chartOption_complex.yAxis[1].axisLabel.formatter = '{value}%'
      } else {
        this.chartOption_complex.yAxis[1].axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      }
      this.chartOption_complex.grid.left = '60px'
      this.chartOption_complex.grid.right = '80px'
      return this.chartOption_complex
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
