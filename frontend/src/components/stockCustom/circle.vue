<template>
  <div class="com-main" v-loading="loading">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="`来源于重庆银行${industry}授信客户`"></i>
    </h1>
    <div v-if="!noData" class="chart-main" :id="`circleChart_${timeStamp}`"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { numberFormat, converUnit } from '@/libs/utils'
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
        data: [],
        formatter: function (name) {
          let { value, amount } = { ...vm.data.find((item) => item.name === name) }
          amount = amount.toFixed(2)
          return '{a|' + name + '}' + '{b|' + value + ' 家} ' + '{b|' + amount + '万元} '
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
    ...mapGetters(['industry']),
    urlOptions() {
      return {
        industryCode: this.industryCode,
        buCode: null
      }
    }
  },
  mixins: [resize, pie],
  props: {
    title: String,
    legendData: Array,
    request: {
      require: true,
      type: Function
    },
    industryCode: {
      require: true,
      type: Array
    }
  },
  watch: {
    industryCode: {
      immediate: true,
      handler(data) {
        if (!data.length) return
        this.drawChart()
      }
    }
  },
  methods: {
    async getChartData() {
      let result = []
      this.response = await this.request(this.urlOptions)
        .then((res) => res)
        .catch((e) => {})
      result = this.response
      if (result) {
        this.noData = !result.big
      } else {
        this.noData = true
      }
      return result
    },
    setChartOption() {
      const data = this.pieData
      this.chartId_pie = `circleChart_${this.timeStamp}`
      this.chartOption_pie.color = this.color
      this.chartOption_pie.legend = Object.assign({}, this.chartOption_pie.legend, this.legend)
      this.chartOption_pie.legend.data = this.legendData
      this.data = []
      for (let key in data) {
        this.data.push({
          name: this.map[key],
          value: data[key].comNum,
          amount: converUnit(data[key].amount.amount)
        })
      }
      this.chartOption_pie.series[0].data = this.data
      const isOnly = this.data.filter((item) => item.amount).length === 1
      if (isOnly) {
        this.chartOption_pie.series[0].label.position = 'center'
      } else {
        this.chartOption_pie.series[0].label.position = 'inside'
      }
      if (window && window.innerWidth && window.innerWidth <= 1440) {
        this.chartOption_pie.legend.right = 0
      }
      return this.chartOption_pie
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.add-btn {
  margin-top: 12px;
  width: 100%;
}

.save-btn {
  margin-top: 12px;
}
</style>
