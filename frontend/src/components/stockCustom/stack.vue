<template>
  <div class="chartMain">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: isScale }" @click="isScale = true">非正常贷款规模</span>
      <span class="bar-item" :class="{ active: !isScale }" @click="isScale = false">非正常贷款企业数量</span>
      <i class="icon-tip" title="这是一个提示"></i>
    </div>
    <div v-loading="loading" v-if="!noData" id="stackChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
export default {
  data() {
    let vm = this
    return {
      isScale: true,
      color: ['#4A84FF', '#79D2DE', '#FFD37A', '#F57E4A'],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let text = vm.isScale ? '非正常贷款规模' : '非正常贷款企业数量'
          let unit = vm.isScale ? '元' : '个'
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${text}：${item.value} ${unit}<br/>`
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
  mixins: [resize, bar],
  watch: {
    isScale() {
      this.drawChart()
    }
  },
  methods: {
    setChartOption() {
      this.chartId_bar = 'stackChart'
      this.chartOption_bar.color = this.color
      this.chartOption_bar.legend = this.legend
      this.chartOption_bar.tooltip = Object.assign({}, this.chartOption_bar.tooltip, this.tooltip)
      this.chartOption_bar.grid = Object.assign({}, this.chartOption_bar.grid, this.grid)
      // this.chartOption.yAxis.minInterval = max < 10 ? 1 : 10
      // this.chartOption.yAxis.max = max ? max : 10
      this.chartOption_bar.xAxis.data = ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
      this.chartOption_bar.series = [
        {
          name: '关注类',
          type: 'bar',
          barWidth: '36%',
          stack: '总量',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: [320, 302, 301, 34]
        },
        {
          name: '次级类',
          type: 'bar',
          barWidth: '36%',
          stack: '总量',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: [20, 132, 101, 134]
        },
        {
          name: '可疑类',
          type: 'bar',
          barWidth: '36%',
          stack: '总量',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: [220, 182, 91, 234]
        },
        {
          name: '损失类',
          type: 'bar',
          barWidth: '36%',
          stack: '总量',
          label: {
            show: false,
            position: 'insideRight'
          },
          data: [150, 12, 201, 154]
        }
      ]
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
#stackChart {
  width: 100%;
  flex: 1;
}
</style>
