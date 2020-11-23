export default {
  data() {},
  methods: {
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
