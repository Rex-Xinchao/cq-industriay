const echarts = require('echarts')

export const Echart_Base = {
  data() {
    return {
      loading: false,
      noData: false,
      myChart: null,
      chartDate: null,
      legend: { itemWidth: 16, top: 10, left: 0 },
      reponseKey: 'result'
    }
  },
  computed: {
    chartId() {
      return `chart_${new Date().getTime()}_${Math.ceil(Math.random() * 1000)}`
    }
  },
  methods: {
    // agile functions
    getChartOption() {
      const chartOption = { ...this.chartOption }
      return chartOption
    },
    async getChartData() {
      if (!this.request) return []
      const response = await this.request(this.urlOptions)
        .then((res) => res)
        .catch(() => {})
      const result = response ? (response[this.reponseKey] ? response[this.reponseKey] : []) : []
      this.noData = result.length === 0
      return result
    },
    setChartEvent() {},
    // main functions
    async drawChart() {
      this.loading = true
      this.chartData = await this.getChartData()
      this.loading = false
      if (this.noData) return
      if (!this.myChart) this.initChart()
      const chartOption = await this.getChartOption()
      this.myChart.setOption(chartOption, true)
    },
    async updateChart() {
      this.loading = false
      this.noData = false
      if (!this.myChart) this.initChart()
      const chartOption = await this.getChartOption()
      this.myChart.setOption(chartOption, true)
    },
    initChart() {
      this.myChart = echarts.init(document.getElementById(this.chartId))
      this.setChartEvent()
    },
    reseize() {
      this.myChart && this.myChart.resize()
    }
  },
  mounted() {
    window.addEventListener('resize', this.reseize, true) // 监听（绑定）滚轮滚动事件
  },
  destroyed() {
    window.removeEventListener('resize', this.reseize, true) //  离开页面清除（移除）滚轮滚动事件
  }
}

export const Echart_Axis = {
  data() {
    return {
      grid: { top: 60, bottom: 20, left: 40, right: 40 },
      xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
          formatter: '{value}',
          color: '#999999'
        },
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: '#ddd'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#ddd'
          }
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
        axisLabel: {
          formatter: '{value}',
          color: '#999999'
        },
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: '#ddd'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#ddd'
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#F2F2F2'
          }
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      series: []
    }
  },
  computed: {
    chartOption() {
      return {
        grid: this.grid,
        legend: this.legend,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        tooltip: this.tooltip,
        series: this.series
      }
    }
  }
}

export const Echart_Pie = {
  data() {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        icon: 'circle',
        orient: 'vertical',
        right: '10%',
        top: '70',
        data: []
      },
      series: [
        {
          type: 'pie',
          center: ['22%', '50%'],
          avoidLabelOverlap: false,
          hoverOffset: 3,
          label: {
            color: 'white',
            position: 'inner',
            formatter: (d) => (d.percent ? `${d.percent}%` : '')
          },
          labelLine: {
            show: false
          },
          data: []
        }
      ]
    }
  },
  computed: {
    chartOption_pie() {
      return {
        tooltip: this.tooltip,
        legend: this.legend,
        series: this.series
      }
    }
  }
}
