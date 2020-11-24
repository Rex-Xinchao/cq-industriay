<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-loading="loading" v-if="!noData" id="lineChart"></div>
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
        color: ['#3398DB', '#79D2DE'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show: true,
          itemWidth: 16,
          top: 10,
          right: 0
        },
        grid: {
          left: '30px',
          right: '20px',
          bottom: '20px',
          top: '60px'
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
        series: [
          {
            name: vm.titleOne,
            type: 'line',
            data: []
          },
          {
            name: vm.titleTwo,
            type: 'line',
            data: []
          }
        ]
      }
    }
  },
  mixins: [resize],
  props: {
    title: String,
    titleOne: String,
    titleTwo: String
  },
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
        this.chartOption.series[0].data = ['100', '200', '80', '99']
        this.chartOption.series[1].data = ['50', '100', '10', '80']
        this.myChart = echarts.init(document.getElementById('lineChart'))
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
#lineChart {
  width: 100%;
  flex: 1;
}
</style>
