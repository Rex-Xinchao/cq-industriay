<template>
  <div class="com-main" v-loading="loading">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="`来源于重庆银行${industry}授信客户`"></i>
    </h1>
    <div v-if="!noData" class="chart-main" :id="chartId"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { numberFormat, converUnit } from '@/libs/utils'
import { Echart_Base, Echart_Pie } from '@/mixins/echarts'
export default {
  data() {
    let vm = this
    return {
      cfgs: [],
      data: [],
      color: ['#147AD6', '#79D2DE', '#EC6666'],
      legend: {
        show: true,
        icon: 'circle',
        orient: 'vertical',
        right: '10%',
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
        industryCode: this.industryCode.join(','),
        buCode: null
      }
    }
  },
  mixins: [Echart_Base, Echart_Pie],
  props: {
    title: String,
    legendData: Array,
    request: {
      require: true,
      type: Function
    },
    industryCode: {
      require: false,
      default: () => null
    }
  },
  watch: {
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
    getChartOption() {
      const data = this.chartData
      const chartOption = { ...this.chartOption_pie }
      chartOption.color = this.color
      chartOption.legend.data = this.legendData
      this.data = []
      for (let key in data) {
        this.data.push({
          name: this.map[key],
          value: data[key].comNum,
          amount: converUnit(data[key].amount.amount)
        })
      }
      chartOption.series[0].data = this.data
      const isOnly = this.data.filter((item) => item.amount).length === 1
      if (isOnly) {
        chartOption.series[0].label.position = 'center'
      } else {
        chartOption.series[0].label.position = 'inside'
      }
      if (window && window.innerWidth && window.innerWidth <= 1440) {
        chartOption.legend.right = 0
      }
      return chartOption
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
