const echarts = require('echarts')
export default {
  data() {
    return {
      loading: false,
      noData: false,
      myChart: null,
      barData: null,
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
          left: '40px',
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
      if (this.request) {
        let result = []
        this.response = await this.request(this.urlOptions)
          .then((res) => res)
          .catch((e) => {})
        result = (this.response && this.response.result) || []
        this.noData = result.length === 0
      } else {
        await sleep(1000)
        return []
      }
    },
    async drawChart() {
      this.loading = true
      this.barData = await this.getChartData()
      this.loading = false
      if (this.noData) return
      const chartOption = await this.setChartOption()
      if (!this.myChart) this.initChart()
      this.myChart.setOption(chartOption, true)
    },
    initChart() {
      if (this.noData) return
      this.myChart = echarts.init(document.getElementById(this.chartId_bar))
      this.setChartEvent()
    },
    async updateChart() {
      if (this.noData) return
      this.loading = false
      this.noData = false
      const chartOption = await this.setChartOption()
      if (!this.myChart) this.initChart()
      this.myChart.setOption(chartOption, true)
    }
  }
}
