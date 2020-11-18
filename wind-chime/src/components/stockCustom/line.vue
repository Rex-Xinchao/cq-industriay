<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-if="!noData" class="lineChart" :id="`lineChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
export default {
  name: '',
  data() {
    let vm = this
    return {
      noData: false,
      loading: false,
      timeStamp: new Date().getTime(),
      chartOption: {
        color: [vm.color],
        tooltip: {
          trigger: 'axis',
          formatter: function (data) {
            let time = data[0].axisValue + '月'
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `${item.seriesName}：${item.value}%<br/>`
            })
            return result
          }
        },
        legend: {
          show: true,
          itemWidth: 16,
          bottom: 0
        },
        grid: {
          left: '38px',
          right: '20px',
          bottom: '50px',
          top: '20px'
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
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
        },
        yAxis: {
          type: 'value',
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
            formatter: '{value}%',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          },
          max: 100,
          min: 0,
          splitNumber: 3
        },
        series: {
          name: vm.name,
          type: 'line',
          smooth: true,
          data: [],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: vm.color
              },
              {
                offset: 1,
                color: '#ffe'
              }
            ])
          }
        }
      }
    }
  },
  mixins: [resize],
  props: {
    title: String,
    subTitle: String,
    name: String,
    color: String
  },
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        this.chartOption.xAxis.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        this.chartOption.series.data = [50, 10, 21, 9, 30, 12, 6, 5, 8, 3, 2, 1]
        this.myChart = echarts.init(document.getElementById(`lineChart_${this.timeStamp}`))
        this.myChart.setOption(this.chartOption, true)
      }, 1000)
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.lineChart {
  width: 100%;
  flex: 1;
}
</style>
