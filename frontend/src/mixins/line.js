const echarts = require('echarts')
export default {
  data() {
    return {
      loading: false,
      noData: false,
      myChart: null,
      lineData: null,
      chartId_line: 'lineChart',
      chartOption_line: {
        tooltip: {
          trigger: 'axis'
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
        series: []
      }
    }
  },
  methods: {
    // 外部定义的方法
    setChartOption() {},
    setChartEvent() {},
    async getChartData() {
      if (this.request) {
        let result = []
        this.response = await this.request(this.urlOptions)
          .then((res) => res)
          .catch((e) => {})
        result = (this.response && this.response.result) || []
        this.noData = result.length === 0
        return result
      } else {
        return []
      }
    },
    async drawChart() {
      this.loading = true
      this.lineData = await this.getChartData()
      this.loading = false
      if (this.noData) return
      const chartOption = await this.setChartOption()
      if (!this.myChart) this.initChart()
      this.myChart.setOption(chartOption, true)
    },
    initChart() {
      this.myChart = echarts.init(document.getElementById(this.chartId_line))
      this.setChartEvent()
    }
  }
}
