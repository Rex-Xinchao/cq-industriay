<template>
  <div class="com-main">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isScale }" @click="isScale = true">不良贷款余额规模</span>
      <span class="bar-item" :class="{ active: !isScale }" @click="isScale = false">不良贷款企业数量</span>
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
    let vm = this
    return {
      isScale: true,
      color: ['#4A84FF', '#79D2DE', '#FFD37A', '#F57E4A'],
      grid: { left: 60, right: 20, bottom: 50, top: 20 },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (data) {
          let time = data[0].axisValue
          let unit = vm.isScale ? '元' : '个'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${item.seriesName}：${converUnit(item.value, 'zh', 0)}${unit}<br/>`
          })
          return result
        }
      },
      legend: {
        show: true,
        icon: 'square',
        itemWidth: 16,
        bottom: 0,
        data: ['次级类', '可疑类', '损失类']
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
  computed: {
    ...mapGetters(['industry']),
    urlOptions() {
      return {
        industryCode: this.industryCode.join(','),
        buCode: null,
        limit: null
      }
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
      chartOption.legend = this.legend
      chartOption.xAxis.data = []
      chartOption.series = []
      let badMap = {}
      data.forEach((item) => {
        let key = this.isScale ? 'badloan' : 'comNum'
        let sum = 0
        item.badList.forEach((bad) => {
          badMap[bad.badloanType] = badMap[bad.badloanType] || []
          let value = this.isScale ? bad[key].amount : bad[key]
          badMap[bad.badloanType].push(value)
          sum += Number(value)
        })
        chartOption.xAxis.data.push(item.rpt)
      })
      for (let key in badMap) {
        chartOption.series.push({
          name: key,
          type: 'bar',
          barWidth: '36%',
          stack: '总量',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: badMap[key]
        })
      }
      chartOption.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      return chartOption
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
</style>
