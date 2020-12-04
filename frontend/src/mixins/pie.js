const echarts = require('echarts')
export default {
  data() {
    return {
      loading: false,
      noData: false,
      myChart: null,
      pieData: null,
      chartId_pie: 'pieChart',
      chartOption_pie: {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
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
      this.pieData = await this.getChartData()
      this.loading = false
      if (this.noData) return
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
