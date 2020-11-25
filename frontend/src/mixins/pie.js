const echarts = require('echarts')
export default {
  data() {
    return {
      loading: false,
      noData: false,
      myChart: null,
      chartId_pie: 'pieChart',
      chartOption_pie: {
        legend: {
          show: true,
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
              position: 'inner',
              formatter: '{d}%'
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
      if (!this.myChart) this.initChart()
      this.myChart.setOption(chartOption, true)
    },
    initChart() {
      this.myChart = echarts.init(document.getElementById(this.chartId_pie))
      this.setChartEvent()
    }
  }
}
