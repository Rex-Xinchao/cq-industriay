<template>
  <div class="com-main">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isScale }" @click="isScale = true">非正常贷款规模</span>
      <span class="bar-item" :class="{ active: !isScale }" @click="isScale = false">非正常贷款企业数量</span>
      <i class="icon-tip" :title="`样本来源于重庆银行${industry}授信客户`"></i>
    </div>
    <div v-loading="loading" v-if="!noData" class="chart-main" id="stackChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { converUnit_w, numberFormat } from '@/libs/utils'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import { mapGetters } from 'vuex'
export default {
  data() {
    let vm = this
    return {
      isScale: true,
      color: ['#4A84FF', '#79D2DE', '#FFD37A', '#F57E4A'],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let unit = vm.isScale ? '万元' : '个'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${item.seriesName}：${numberFormat(item.value)} ${unit}<br/>`
          })
          return result
        }
      },
      legend: {
        show: true,
        icon: 'square',
        itemWidth: 16,
        bottom: 0,
        data: ['关注类', '次级类', '可疑类', '损失类']
      },
      grid: {
        bottom: '50px',
        top: '20px'
      }
    }
  },
  props: {
    request: {
      require: true,
      type: Function
    }
  },
  computed: {
    ...mapGetters(['industry'])
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
      this.chartId_bar = 'stackChart'
      this.chartOption_bar.color = this.color
      this.chartOption_bar.legend = this.legend
      this.chartOption_bar.tooltip = Object.assign({}, this.chartOption_bar.tooltip, this.tooltip)
      this.chartOption_bar.grid = Object.assign({}, this.chartOption_bar.grid, this.grid)
      this.chartOption_bar.xAxis.data = []
      this.chartOption_bar.series = []
      let max = 0
      let badMap = {}
      data.forEach((item) => {
        let key = this.isScale ? 'badloan' : 'comNum'
        let sum = 0
        item.badList.forEach((bad) => {
          badMap[bad.badloanType] = badMap[bad.badloanType] || []
          let value = this.isScale ? converUnit_w(bad[key].amount) : bad[key]
          badMap[bad.badloanType].push(value)
          sum += Number(value)
        })
        max = Math.max(max, sum)
        this.chartOption_bar.xAxis.data.push(item.rpt)
      })
      for (let key in badMap) {
        this.chartOption_bar.series.push({
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
