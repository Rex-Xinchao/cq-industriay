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
import { prospectData } from '@/api/analysis'
import { converUnit } from '@/libs/utils'
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
            let value = vm.type === 'ratio' ? `${item.value}%` : `${converUnit(item.value, 'zh', 0)}${vm.unit}`
            result += `${item.seriesName}：${value}<br/>`
          })
          return result
        }
      },
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
    unit: {
      type: String,
      default: '家'
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
      if (data === 0) {
        this.legend = this.legends
      } else {
        this.legend = ['工商企业']
      }
      this.drawChart()
    }
  },
  methods: {
    async getChartData() {
      let data = await prospectData()
      let result = data.prospect || []
      this.noData = result.length === 0
      return result
    },
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
      this.chartOption_bar.series = series
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series[0].data = []
      this.chartOption_bar.series[1] && (this.chartOption_bar.series[1].data = [])
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

      this.chartOption_bar.grid.left = '60px'
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
