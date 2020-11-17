<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-if="!noData" class="circleChart" :id="`circleChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
const echarts = require('echarts')
import { numberFormat } from '@/libs/utils'
export default {
  name: '',
  data() {
    let vm = this
    return {
      cfgs: [],
      noData: false,
      loading: false,
      timeStamp: new Date().getTime(),
      data: [],
      legend: ['500万以下', '500~3000万', '3000万以上'],
      chartOption: {
        color: ['#147AD6', '#79D2DE', '#EC6666'],
        legend: {
          show: true,
          icon: 'circle',
          orient: 'vertical',
          right: '10%',
          top: '40',
          data: vm.legend,
          formatter: function (name) {
            let number = vm.data.find((item) => item.name === name).value
            let amount = vm.data.find((item) => item.name === name).amount
            amount = numberFormat(amount, 0)
            return '{a|' + name + '}' + '{b|' + number + ' 家} ' + '{b|' + amount + ' 万元} '
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
  props: {
    title: String
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
            value: data[index],
            amount: Math.ceil(Math.random() * 100000)
          }
        })
        this.chartOption.series[0].data = this.data
        this.myChart = echarts.init(document.getElementById(`circleChart_${this.timeStamp}`))
        this.myChart.setOption(this.chartOption, true)
      }, 1000)
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', () => {
      this.myChart && this.myChart.resize()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize')
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.circleChart {
  width: 100%;
  flex: 1;
}

.add-btn {
  margin-top: 12px;
  width: 100%;
}

.save-btn {
  margin-top: 12px;
}
</style>
