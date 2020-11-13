<template>
  <div class="chartMain" v-loading="loading">
    <div class="operation-bar">
      <span :class="{ active: isScale }" @click="isScale = true">非正常贷款规模</span>
      <span :class="{ active: !isScale }" @click="isScale = false">非正常贷款企业数量</span>
    </div>
    <div v-if="!noData" id="stackChart"></div>
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
      chartOption: {
        color: ['#4A84FF', '#79D2DE', '#FFD37A', '#F57E4A'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (data) {
            let time = data[0].axisValue
            let text = vm.isScale ? '非正常贷款规模' : '非正常贷款企业数量'
            let unit = vm.isScale ? '元' : '个'
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `${text}：${item.value} ${unit}<br/>`
            })
            return result
          }
        },
        legend: {
          show: true,
          icon: 'circle',
          bottom: 0,
          data: ['关注类', '次级类', '可疑类', '损失类']
        },
        grid: {
          left: '30px',
          right: '20px',
          bottom: '44px',
          top: '20px'
        },
        xAxis: [
          {
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
            minInterval: 10,
            splitNumber: 4,
            min: 0
          }
        ],
        series: []
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
        // this.chartOption.yAxis[0].minInterval = max < 10 ? 1 : 10
        // this.chartOption.yAxis[0].max = max ? max : 10
        this.chartOption.xAxis[0].data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
        this.chartOption.series = [
          {
            name: '关注类',
            type: 'bar',
            barWidth: '36%',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight'
            },
            data: [320, 302, 301, 34]
          },
          {
            name: '次级类',
            type: 'bar',
            barWidth: '36%',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight'
            },
            data: [20, 132, 101, 134]
          },
          {
            name: '可疑类',
            type: 'bar',
            barWidth: '36%',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight'
            },
            data: [220, 182, 91, 234]
          },
          {
            name: '损失类',
            type: 'bar',
            barWidth: '36%',
            stack: '总量',
            label: {
              show: false,
              position: 'insideRight'
            },
            data: [150, 12, 201, 154]
          }
        ]
        this.myChart = echarts.init(document.getElementById('stackChart'))
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
#stackChart {
  width: 100%;
  flex: 1;
}
</style>
