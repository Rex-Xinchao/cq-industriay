<template>
  <div class="chartMain">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isScale }" @click="isScale = true">贷款余额规模</span>
      <span class="bar-item" :class="{ active: !isScale }" @click="isScale = false">贷款企业数量</span>
    </div>
    <div v-loading="loading" v-if="!noData" id="barChart"></div>
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
      isScale: true,
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
      }
    }
  },
  mixins: [resize],
  props: {},
  watch: {
    isScale() {
      this.init()
    }
  },
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        // this.chartOption.yAxis[0].minInterval = max < 10 ? 1 : 10
        // this.chartOption.yAxis[0].max = max ? max : 10
        this.chartOption.xAxis.data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
        this.chartOption.series.data = ['100', '200', '80', '99']
        this.myChart = echarts.init(document.getElementById('barChart'))
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
#barChart {
  width: 100%;
  flex: 1;
}
</style>
