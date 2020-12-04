const echarts = require('echarts')
export default {
  data() {
    return {
      loading: false,
      noData: false,
      myChart: null,
      complexData: null,
      chartId_c: 'complexChart',
      chartOption_complex: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: true,
          itemWidth: 16,
          top: 10,
          left: 0
        },
        grid: {
          left: '30px',
          right: '30px',
          bottom: '30px',
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
      this.complexData = await this.getChartData()
      this.loading = false
      if (this.noData) return
      const chartOption = await this.setChartOption()
      if (!this.myChart) this.initChart()
      this.myChart.setOption(chartOption, true)
    },
    initChart() {
      this.myChart = echarts.init(document.getElementById(this.chartId_c))
      this.setChartEvent()
    }
  }
}
