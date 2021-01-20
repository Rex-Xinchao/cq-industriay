<template>
  <div class="com-main" v-loading="loading">
    <h1 class="com-title_min">
      {{ title }}
      <span class="com-title_sub">{{ subTitle }}</span>
      <i class="icon-tip" :title="tip"></i>
    </h1>
    <div v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { prospectData } from '@/api/analysis'
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  name: '',
  data() {
    let vm = this
    return {
      title: '',
      tip: '',
      subTitle: '近12月',
      grid: { left: 30, right: 30, bottom: 50, top: 20 },
      legend: {
        show: true,
        itemWidth: 16,
        bottom: 0,
        left: 0
      },
      yAxis: [
        {
          type: 'value',
          gridIndex: 0,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          },
          min: 0
        },
        {
          type: 'value',
          gridIndex: 0,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          }
        }
      ],
      tooltip: {
        trigger: 'axis',
        formatter: function (data) {
          let time = data[0].axisValue + '月'
          let result = `${time}<br/>`
          data.forEach((item) => {
            let unit = item.seriesName === '产量' ? '个' : '%'
            result += `${item.seriesName}：${item.value}${unit}<br/>`
          })
          return result
        }
      },
      series: [
        {
          name: '产量',
          type: 'bar',
          color: ['#4A84FF'],
          data: []
        },
        {
          name: '同比变化',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          color: ['red'],
          data: []
        }
      ]
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  props: {
    chartData: Object
  },
  methods: {
    async getChartData() {
      this.chartData = this.chartData || {}
      this.chartData.indexes = this.chartData.indexes || []
      this.noData = this.chartData.indexes.length === 0
      this.title = this.chartData.indexName
      this.tip = this.chartData.indexName
      return this.chartData
    },
    getChartOption() {
      const chartOption = { ...this.chartOption }
      chartOption.xAxis.data = []
      chartOption.series[0].data = []
      chartOption.series[1].data = []
      this.chartData.indexes.forEach((item) => {
        chartOption.xAxis.data.push(item.rpt)
        chartOption.series[0].data.push(item.latestIndex)
        chartOption.series[1].data.push(item.indexRatio)
      })
      return chartOption
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
