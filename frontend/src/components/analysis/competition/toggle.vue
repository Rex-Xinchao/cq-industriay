<template>
  <div class="chartMain">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isBar }" @click="isBar = true">注册资本</span>
      <span class="bar-item" :class="{ active: !isBar }" @click="isBar = false">成立时间</span>
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </div>
    <div v-loading="loading" v-if="!noData" id="chart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import pie from '@/mixins/pie'
export default {
  name: '',
  data() {
    let vm = this
    return {
      chartId_pie: 'chart',
      chartId_bar: 'chart',
      isBar: true,
      color_bar: ['#3398DB'],
      data: [],
      color_pie: ['#147AD6', '#79D2DE', '#EC6666'],
      legend: ['2年以下', '2~5年', '5年以上']
    }
  },
  mixins: [resize, bar, pie],
  watch: {
    isBar() {
      this.drawChart()
    }
  },
  methods: {
    setChartOption() {
      const vm = this
      if (this.isBar) {
        this.chartOption_bar.color = this.color_bar
        this.chartOption_bar.grid.top = '20px'
        this.chartOption_bar.series = {
          type: 'bar',
          barWidth: '36%',
          data: []
        }
        this.chartOption_bar.tooltip.formatter = function (data) {
          let time = data[0].axisValue
          let text = vm.isScale ? '贷款余额规模' : '贷款企业数量'
          let unit = vm.isScale ? '元' : '个'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${text}：${item.value} ${unit}<br/>`
          })
          return result
        }
        this.chartOption_bar.xAxis.data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
        this.chartOption_bar.series.data = [100, 200, 80, 99]
        const max = 200
        this.chartOption_bar.yAxis.minInterval = max < 10 ? 1 : 10
        this.chartOption_bar.yAxis.max = max ? max : 10
        return this.chartOption_bar
      } else {
        this.chartOption_pie.color = this.color_pie
        this.chartOption_pie.legend.data = this.legend
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
        let data = [335, 248, 368]
        this.data = this.legend.map((item, index) => {
          return {
            name: item,
            value: data[index],
            amount: Math.ceil(Math.random() * 100000)
          }
        })
        this.chartOption_pie.series[0].data = this.data
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
@import '~@/assets/styles/chartMain';

#chart {
  width: 100%;
  flex: 1;
}
</style>
