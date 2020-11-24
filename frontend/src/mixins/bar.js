const echarts = require('echarts')
export default {
  data() {
    return {
      loading: false,
      noData: false,
      myBarChart: null,
      chartId_bar: 'barChart',
      chartOption_bar: {
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
          left: 0
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
        series: []
      }
    }
  },
  methods: {
    // 外部定义的方法
    setChartOption() {},
    setChartEvent() {},
    async getChartData() {
      const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))
      await sleep(1000)
    },
    async drawChart() {
      this.loading = true
      await this.getChartData()
      this.loading = false
      this.noData = false
      const chartOption = await this.setChartOption()
      if (!this.myBarChart) this.initChart()
      this.myBarChart.setOption(chartOption, true)
    },
    initChart() {
      this.myBarChart = echarts.init(document.getElementById(this.chartId_bar))
      this.setChartEvent()
    }
  },
  mounted() {
    window.addEventListener('resize', this.reseize, true) // 监听（绑定）滚轮滚动事件
  },
  destroyed() {
    window.removeEventListener('resize', this.reseize, true) //  离开页面清除（移除）滚轮滚动事件
  }
}
