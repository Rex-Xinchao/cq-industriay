<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div v-if="!noData" class="circleChart" :id="`circleChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { numberFormat } from '@/libs/utils'
import resize from '@/mixins/resize'
import pie from '@/mixins/pie'
export default {
  data() {
    let vm = this
    return {
      cfgs: [],
      timeStamp: new Date().getTime(),
      data: [],
      color: ['#147AD6', '#79D2DE', '#EC6666'],
      legend: {
        top: '40',
        data: ['500万以下', '500~3000万', '3000万以上'],
        formatter: function (name) {
          let { value, amount } = { ...vm.data.find((item) => item.name === name) }
          amount = numberFormat(amount, 0)
          return '{a|' + name + '}' + '{b|' + value + ' 家} ' + '{b|' + amount + ' 万元} '
        },
        textStyle: {
          rich: {
            a: {
              fontSize: 12,
              color: '#9EA2AE',
              padding: [0, 16, 4, 0]
            },
            b: {
              fontSize: 14,
              padding: [0, 16, 0, 0],
              fontWeight: 500
            }
          }
        }
      }
    }
  },
  mixins: [resize, pie],
  props: {
    title: String
  },
  methods: {
    setChartOption() {
      this.chartId_pie = `circleChart_${this.timeStamp}`
      this.chartOption_pie.color = this.color
      this.chartOption_pie.legend = Object.assign({}, this.chartOption_pie.legend, this.legend)
      let data = [335, 248, 368]
      this.data = this.legend.data.map((item, index) => {
        return {
          name: item,
          value: data[index],
          amount: Math.ceil(Math.random() * 100000)
        }
      })
      this.chartOption_pie.series[0].data = this.data
      if (window && window.innerWidth && window.innerWidth <= 1440) {
        this.chartOption_pie.legend.right = 0
      }
      return this.chartOption_pie
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.circleChart {
  width: 100%;
  flex: 1;
}

.add-btn {
  margin-top: 12px;
  width: 100%;
}

.save-btn {
  margin-top: 12px;
}
</style>