<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <i class="icon-tip" title="数据来源于裁判文书"></i>
      <div class="filter fr">
        <el-select class="select" v-model="typeSelect">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <time-select class="select" v-model="dateTime"></time-select>
      </div>
    </h1>
    <div v-loading="loading" v-if="!noData" id="barChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import { barData } from '@/mockData/risk'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
export default {
  data() {
    return {
      typeSelect: 1,
      typeOptions: [{ label: '全国', value: 1 }],
      dateTime: [],
      color: ['#3398DB', '#79D2DE']
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
    typeSelect() {
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
      this.chartOption_bar.legend.show = false
      this.chartOption_bar.grid.left = '40px'
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
      this.chartOption_bar.yAxis.minInterval = max < 10 ? 1 : 10
      this.chartOption_bar.yAxis.max = max ? max : 10
      return this.chartOption_bar
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.select:first-of-type {
  width: 120px;
}
#barChart {
  width: 100%;
  flex: 1;
}
</style>
