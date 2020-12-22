<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="tip"></i>
      <el-select v-if="showSelect" class="fr" v-model="barType" placeholder="">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </h1>
    <div v-loading="loading" v-if="!noData" class="chart-main" :id="chartId_bar"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import { chartData } from '@/mockData/prospect'
export default {
  data() {
    const vm = this
    return {
      chartId_bar: `barChart${new Date().getTime()}`,
      color: ['#3398DB', '#79D2DE', '#FFD37A'],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            let unit = vm.type === 'ratio' ? '%' : '个'
            result += `${item.seriesName}：${item.value}${unit}<br/>`
          })
          return result
        }
      },
      barType: 1,
      options: [
        {
          label: '龙头企业',
          value: 1
        },
        {
          label: '工商企业',
          value: 2
        }
      ],
      legend: []
    }
  },
  mixins: [resize, bar],
  props: {
    requestPath: String,
    title: String,
    legends: Array,
    tip: String,
    type: {
      type: String,
      default: 'number'
    },
    showSelect: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  watch: {
    barType(data) {
      if (data === 1) {
        this.legend = this.legends
      } else {
        this.legend = ['工商企业']
      }
      this.drawChart()
    }
  },
  methods: {
    setChartOption() {
      const series = []
      this.legend.forEach((item) => {
        series.push({
          name: item,
          type: 'bar',
          barWidth: '16%',
          data: []
        })
      })
      this.chartOption_bar.color = this.color
      this.chartOption_bar.tooltip = Object.assign({}, this.chartOption_bar.tooltip, this.tooltip)
      this.chartOption_bar.grid.left = '40px'
      this.chartOption_bar.yAxis.axisLabel.formatter = '{value}%'
      this.chartOption_bar.series = series
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series[0].data = []
      this.chartOption_bar.series[1] && (this.chartOption_bar.series[1].data = [])
      chartData.forEach((item) => {
        this.chartOption_bar.xAxis.data.push(item.year)
        this.chartOption_bar.series[0].data.push(item.value1)
        this.chartOption_bar.series[1] && this.chartOption_bar.series[1].data.push(item.value2)
        this.chartOption_bar.series[2] && this.chartOption_bar.series[2].data.push(item.value2)
      })
      if (this.type === 'ratio') {
        this.chartOption_bar.yAxis.axisLabel.formatter = '{value}%'
        this.chartOption_bar.yAxis.max = 100
      } else {
        this.chartOption_bar.yAxis.axisLabel.formatter = '{value}'
      }
      this.chartOption_bar.yAxis.minInterval = 1
      return this.chartOption_bar
    }
  },
  mounted() {
    this.legend = this.legends
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
