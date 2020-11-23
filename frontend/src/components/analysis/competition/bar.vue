<template>
  <div class="chartMain">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isBar }" @click="isBar = true">注册资本</span>
      <span class="bar-item" :class="{ active: !isBar }" @click="isBar = false">成立时间</span>
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </div>
    <div v-loading="loading" v-if="!noData && isBar" id="barChart"></div>
    <div v-loading="loading" v-if="!noData && !isBar" id="circleChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
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
      myChart: null,
      isBar: true,
      noData: false,
      loading: false,
      chartOption: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (data) {
            let time = data[0].axisValue
            let text = vm.isScale ? '贷款余额规模' : '贷款企业数量'
            let unit = vm.isScale ? '元' : '个'
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `${text}：${item.value} ${unit}<br/>`
            })
            return result
          }
        },
        grid: {
          left: '30px',
          right: '20px',
          bottom: '20px',
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
          minInterval: 10,
          min: 0
        },
        series: {
          type: 'bar',
          barWidth: '36%',
          data: []
        }
      },
      data: [],
      legend: ['2年以下', '2~5年', '5年以上'],
      chartOption_c: {
        color: ['#147AD6', '#79D2DE', '#EC6666'],
        legend: {
          show: true,
          icon: 'circle',
          orient: 'vertical',
          right: '10%',
          top: '70',
          data: vm.legend,
          formatter: function (name) {
            let number = vm.data.find((item) => item.name === name).value
            return '{a|' + name + '}' + '{b|' + number + ' 家}'
          },
          textStyle: {
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
        },
        series: [
          {
            type: 'pie',
            center: ['22%', '50%'],
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            hoverOffset: 3,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: []
          }
        ]
      }
    }
  },
  mixins: [resize],
  props: {},
  watch: {
    isBar() {
      this.init()
    }
  },
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        if (this.isBar) {
          // this.chartOption.yAxis[0].minInterval = max < 10 ? 1 : 10
          // this.chartOption.yAxis[0].max = max ? max : 10
          this.chartOption.xAxis.data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
          this.chartOption.series.data = ['100', '200', '80', '99']
          this.myChart = echarts.init(document.getElementById('barChart'))
          this.myChart.setOption(this.chartOption, true)
        } else {
          let data = [335, 248, 368]
          this.data = this.legend.map((item, index) => {
            return {
              name: item,
              value: data[index],
              amount: Math.ceil(Math.random() * 100000)
            }
          })
          this.chartOption_c.series[0].data = this.data
          this.myChart = echarts.init(document.getElementById('circleChart'))
          this.myChart.setOption(this.chartOption_c, true)
        }
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
#barChart,
#circleChart {
  width: 100%;
  flex: 1;
}
</style>
