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
    <div v-loading="loading" v-if="!noData" class="chart-main" id="barChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import { numberFormat } from '@/libs/utils'
import { barData } from '@/mockData/risk'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
export default {
  data() {
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
      tooltip: {
        formatter: (data) => {
          let result = `${data.name}<br/>`
          result += `${data.seriesName}：${numberFormat(data.value, 0)} ${this.unit}<br/>`
          return result
        }
      }
    }
  },
  mixins: [resize, bar],
  props: {
    title: String,
    legends: Array
  },
  watch: {
    dateTime() {
      this.drawChart()
    },
    areaSelect() {
      this.drawChart()
    }
  },
  methods: {
    setChartOption() {
      const series = []
      this.legends.forEach((item) => {
        series.push({
          name: item,
          type: 'bar',
          barWidth: '25%',
          data: []
        })
      })
      this.chartOption_bar.color = this.color
      this.chartOption_bar.series = series
      this.chartOption_bar.tooltip = this.tooltip
      this.chartOption_bar.legend.show = false
      this.chartOption_bar.grid.left = '60px'
      this.chartOption_bar.grid.top = '40px'
      this.chartOption_bar.color = this.color
      let max = 0
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series[0].data = []
      barData.forEach((item) => {
        max = Math.max(max, item.value)
        this.chartOption_bar.xAxis.data.push(item.time)
        this.chartOption_bar.series[0].data.push(item.value)
      })
      this.chartOption_bar.yAxis.axisLabel.formatter = `{value} ${this.unit}`
      return this.chartOption_bar
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.select:first-of-type {
  width: 120px;
}
</style>
