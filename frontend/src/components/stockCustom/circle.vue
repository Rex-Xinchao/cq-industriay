<template>
  <div class="chartMain" v-loading="loading">
    <h1 class="chart-title">
      {{ title }}
      <i class="icon-tip" :title="`样本来源于重庆银行${industry}授信客户`"></i>
    </h1>
    <div v-if="!noData" class="circleChart" :id="`circleChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { numberFormat } from '@/libs/utils'
import resize from '@/mixins/resize'
import pie from '@/mixins/pie'
import { mapGetters } from 'vuex'
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
      },
      map: {
        big: '3000万以上',
        middle: '500~3000万',
        small: '500万以下'
      }
    }
  },
  computed: {
    ...mapGetters(['industry'])
  },
  mixins: [resize, pie],
  props: {
    title: String,
    request: {
      require: true,
      type: Function
    }
  },
  methods: {
    setChartOption() {
      const data = this.response.result || []
      this.chartId_pie = `circleChart_${this.timeStamp}`
      this.chartOption_pie.color = this.color
      this.chartOption_pie.legend = Object.assign({}, this.chartOption_pie.legend, this.legend)
      this.data = []
      for (let key in data) {
        this.data.push({
          name: this.map[key],
          value: data[key].comNum,
          amount: data[key].amount
        })
      }
      this.chartOption_pie.series[0].data = this.data
      if (window && window.innerWidth && window.innerWidth <= 1440) {
        this.chartOption_pie.legend.right = 0
      }
      return this.chartOption_pie
    },
    async getChartData() {
      this.response = await this.request(this.urlOptions)
      return this.response
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
