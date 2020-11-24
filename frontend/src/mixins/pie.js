const echarts = require('echarts')
export default {
  data() {
    return {
      loading: false,
      noData: false,
      myPieChart: null,
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
      if (!this.myPieChart) this.initChart()
      this.myPieChart.setOption(chartOption, true)
    },
    initChart() {
      this.myPieChart = echarts.init(document.getElementById(this.chartId_pie))
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
