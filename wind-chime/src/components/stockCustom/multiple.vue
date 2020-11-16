<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <span class="chart-title_sub">{{ subTitle }}</span>
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-if="!noData" class="multipleChart" :id="`multipleChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: '',
  data() {
    let vm = this
    return {
      noData: false,
      loading: false,
      timeStamp: new Date().getTime(),
      chartOption: {
        tooltip: {
          trigger: 'axis',
          formatter: function (data) {
            let time = data[0].axisValue + '月'
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `${item.seriesName}：${item.value}<br/>`
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
          left: '30px',
          right: '30px',
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
            }
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
            },
            min: 0
          }
        ],
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
    }
  },
  props: {
    title: String,
    subTitle: String
  },
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        let max = 12
        this.chartOption.yAxis[0].max = max ? max : 10
        this.chartOption.xAxis.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        this.chartOption.series[0].data = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        this.chartOption.series[1].data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        this.myChart = echarts.init(document.getElementById(`multipleChart_${this.timeStamp}`))
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
.multipleChart {
  width: 100%;
  flex: 1;
}
</style>
