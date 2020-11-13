<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">总投放规模</h1>
    <div v-if="!noData" id="circleChart"></div>
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
      isScale: true,
      noData: false,
      loading: false,
      data: [],
      legend: ['500万以下', '500~3000万', '3000万以上'],
      chartOption: {
        color: ['#147AD6', '#79D2DE', '#EC6666'],
        legend: {
          show: true,
          icon: 'circle',
          orient: 'vertical',
          right: 0,
          top: '50',
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
                padding: [0, 20, 4, 0]
              },
              b: {
                fontSize: 14,
                padding: [0, 0, 0, 0],
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
        let data = [335, 248, 368]
        this.data = this.legend.map((item, index) => {
          return {
            name: item,
            value: data[index]
          }
        })
        this.chartOption.series[0].data = this.data
        this.myChart = echarts.init(document.getElementById('circleChart'))
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
#circleChart {
  width: 100%;
  flex: 1;
}
</style>
