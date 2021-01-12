<template>
  <div class="com-main">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isScale }" @click="isScale = true">贷款余额规模</span>
      <span class="bar-item" :class="{ active: !isScale }" @click="isScale = false">贷款企业数量</span>
      <i class="icon-tip" :title="`来源于重庆银行${industry}授信客户`"></i>
    </div>
    <div v-loading="loading" v-if="!noData" class="chart-main" id="barChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { converUnit, numberFormat } from '@/libs/utils'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isScale: true,
      color: ['#3398DB']
    }
  },
  computed: {
    ...mapGetters(['industry']),
    urlOptions() {
      return {
        industryCode: this.industryCode,
        buCode: null,
        limit: null
      }
    }
  },
  props: {
    request: {
      require: true,
      type: Function
    },
    industryCode: {
      require: true,
      type: Array
    }
  },
  mixins: [resize, bar],
  watch: {
    isScale() {
      this.updateChart()
    }
  },
  methods: {
    setChartOption() {
      const data = this.barData
      const vm = this
      this.chartOption_bar.color = this.color
      this.chartOption_bar.grid.top = '20px'
      this.chartOption_bar.grid.left = '60px'
      this.chartOption_bar.series = {
        type: 'bar',
        barWidth: '36%',
        data: []
      }
      this.chartOption_bar.tooltip.formatter = function (data) {
        let time = data[0].axisValue
        let text = vm.isScale ? '贷款余额规模' : '贷款企业数量'
        let unit = vm.isScale ? '元' : '个'
        let result = `${time}<br/>`
        data.forEach((item) => {
          result += `${text}：${converUnit(item.value, 'zh', 0)}${unit}<br/>`
        })
        return result
      }
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series.data = []
      let max = 0
      data.forEach((item) => {
        let value = this.isScale ? item.loanBalance.amount : item.comNum
        max = Math.max(max, Number(value))
        this.chartOption_bar.series.data.push(value)
        this.chartOption_bar.xAxis.data.push(item.rpt)
      })
      this.chartOption_bar.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      return this.chartOption_bar
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
