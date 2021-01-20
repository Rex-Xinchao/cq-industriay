<template>
  <div class="com-main">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isScale }" @click="isScale = true">贷款余额规模</span>
      <span class="bar-item" :class="{ active: !isScale }" @click="isScale = false">贷款企业数量</span>
      <i class="icon-tip" :title="`来源于重庆银行${industry}授信客户`"></i>
    </div>
    <div v-loading="loading" v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { converUnit, numberFormat } from '@/libs/utils'
import { Echart_Base, Echart_Axis } from '@/mixins/echarts'
export default {
  data() {
    const vm = this
    return {
      isScale: true,
      color: ['#3398DB'],
      grid: { left: 60, right: 20, bottom: 20, top: 20 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (data) {
          let time = data[0].axisValue
          let text = vm.isScale ? '贷款余额规模' : '贷款企业数量'
          let unit = vm.isScale ? '元' : '个'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${text}：${converUnit(item.value, 'zh', 0)}${unit}<br/>`
          })
          return result
        }
      }
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
      require: false,
      default: () => null
    }
  },
  mixins: [Echart_Base, Echart_Axis],
  watch: {
    isScale() {
      this.updateChart()
    },
    industryCode: {
      immediate: true,
      handler(data) {
        if (!data && typeof data != 'undefined' && data != 0) {
          this.drawChart()
        } else if (data && data.length) {
          this.drawChart()
        } else {
          this.noData = true
        }
      }
    }
  },
  methods: {
    getChartOption() {
      const data = this.chartData
      const chartOption = { ...this.chartOption }
      chartOption.color = this.color
      chartOption.series = {
        type: 'bar',
        barWidth: '36%',
        data: []
      }
      chartOption.xAxis.data = []
      chartOption.series.data = []
      data.forEach((item) => {
        let value = this.isScale ? item.loanBalance.amount : item.comNum
        chartOption.series.data.push(value)
        chartOption.xAxis.data.push(item.rpt)
      })
      chartOption.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      return chartOption
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
