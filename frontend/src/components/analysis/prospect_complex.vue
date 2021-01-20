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
      <div v-if="!noData" class="chart-main" :id="chartId"></div>
      <no-data-show class="chart-nodata" :show="noData"></no-data-show>
    </div>
  </div>
</template>
<script>
import { converUnit } from '@/libs/utils'
import { prospectData } from '@/api/analysis'
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    const vm = this
    return {
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
      ],
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
      legend: {
        show: true,
        itemWidth: 16,
        top: 10,
        left: 0
      },
      grid: { left: 60, right: 80, bottom: 30, top: 60 },
      tooltip: {
        trigger: 'axis',
        formatter: (data) => {
          let result = `${data[0].axisValue}<br/>`
          data.forEach((item) => {
            let type = vm.types[item.seriesIndex]
            let value = type === 'ratio' ? `${item.value}%` : `${converUnit(item.value)}${vm.unit}`
            result += `${item.seriesName}：${value}<br/>`
          })
          return result
        }
      },
      request: prospectData,
      urlOptions: {},
      reponseKey: 'growth'
    }
  },
  props: {
    industryCode: String,
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
    industryCode: {
      immediate: true,
      handler() {
        this.drawChart()
      }
    },
    barType() {
      this.drawChart()
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  methods: {
    getChartOption() {
      const chartOption = { ...this.chartOption }
      chartOption.xAxis.data = []
      chartOption.series = [
        {
          type: 'bar',
          barWidth: '25%',
          yAxisIndex: 0,
          color: ['#4A84FF'],
          name: this.options[this.barType].label,
          data: []
        },
        {
          type: 'line',
          color: ['#F6BD16'],
          yAxisIndex: 1,
          name: this.options[this.barType].label + '增速',
          data: []
        }
      ]
      if (this.barType === 0) {
        this.chartData.forEach((item) => {
          chartOption.xAxis.data.push(item.rpt)
          chartOption.series[0].data.push(item.value1)
          chartOption.series[1].data.push(item.value2)
        })
      } else {
        this.chartData.forEach((item) => {
          chartOption.xAxis.data.push(item.rpt)
          chartOption.series[0].data.push(item.value3)
          chartOption.series[1].data.push(item.value4)
        })
      }
      if (this.types[0] === 'ratio') {
        chartOption.yAxis[0].axisLabel.formatter = '{value}%'
      } else {
        chartOption.yAxis[0].axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      }
      if (this.types[1] === 'ratio') {
        chartOption.yAxis[1].axisLabel.formatter = '{value}%'
      } else {
        chartOption.yAxis[1].axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      }
      return chartOption
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
