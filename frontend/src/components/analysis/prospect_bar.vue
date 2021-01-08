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
      <div v-if="!noData" class="chart-main" :id="chartId_bar"></div>
      <no-data-show class="chart-nodata" :show="noData"></no-data-show>
    </div>
  </div>
</template>

<script>
import { converUnit } from '@/libs/utils'
import { prospectData } from '@/api/analysis'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
export default {
  data() {
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
      formatter: (data) => {
        let result = `${data[0].axisValue}<br/>`
        data.forEach((item) => {
          let value = this.type === 'ratio' ? `${item.value}%` : `${converUnit(item.value, 'zh', 0)}${this.unit}`
          result += `${item.seriesName}：${value}<br/>`
        })
        return result
      }
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
  mixins: [resize, bar],
  methods: {
    async getChartData() {
      let data = await prospectData()
      let result = data.prospect || []
      this.noData = result.length === 0
      return result
    },
    setChartOption() {
      const series = []
      this.legends.forEach((item) => {
        series.push({
          name: item,
          type: 'bar',
          barWidth: '16%',
          data: []
        })
      })
      this.chartOption_bar.color = this.color
      this.chartOption_bar.grid.left = '60px'
      this.chartOption_bar.tooltip.formatter = this.formatter
      this.chartOption_bar.series = series
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series[0].data = []
      this.chartOption_bar.series[1] && (this.chartOption_bar.series[1].data = [])
      this.chartOption_bar.series[2] && (this.chartOption_bar.series[2].data = [])
      if (this.barType === 0) {
        this.barData.forEach((item) => {
          this.chartOption_bar.xAxis.data.push(item.rpt)
          this.chartOption_bar.series[0].data.push(item.value1)
          this.chartOption_bar.series[1].data.push(item.value2)
          this.chartOption_bar.series[2].data.push(item.value3)
        })
      } else {
        this.barData.forEach((item) => {
          this.chartOption_bar.xAxis.data.push(item.rpt)
          this.chartOption_bar.series[0].data.push(item.value4)
        })
      }
      if (this.type === 'ratio') {
        this.chartOption_bar.yAxis.axisLabel.formatter = '{value}%'
      } else {
        this.chartOption_bar.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0) + this.unit
      }
      return this.chartOption_bar
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
