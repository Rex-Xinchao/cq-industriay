<template>
  <div class="chartMain">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isScale }" @click="isScale = true">贷款余额规模</span>
      <span class="bar-item" :class="{ active: !isScale }" @click="isScale = false">贷款企业数量</span>
      <i class="icon-tip" :title="`样本来源于重庆银行${industry}授信客户`"></i>
    </div>
    <div v-loading="loading" v-if="!noData" id="barChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
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
    ...mapGetters(['industry'])
  },
  mixins: [resize, bar],
  watch: {
    isScale() {
      this.drawChart()
    }
  },
  methods: {
    setChartOption() {
      const vm = this
      this.chartOption_bar.color = this.color
      this.chartOption_bar.grid.top = '20px'
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
          result += `${text}：${item.value} ${unit}<br/>`
        })
        return result
      }
      this.chartOption_bar.xAxis.data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
      this.chartOption_bar.series.data = [100, 200, 80, 99]
      const max = 200
      this.chartOption_bar.yAxis.minInterval = max < 10 ? 1 : 10
      this.chartOption_bar.yAxis.max = max ? max : 10
      return this.chartOption_bar
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
#barChart {
  width: 100%;
  flex: 1;
}
</style>
