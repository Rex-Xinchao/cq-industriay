<template>
  <div class="chartMain">
    <h1 class="chart-title">趋势分析</h1>
    <div class="filter">
      <span
        class="select-item"
        v-for="item in heads"
        :key="item.value"
        :title="item.name"
        :class="{ active: activeHead === item.value }"
        @click="activeHead = item.value"
      >
        {{ item.name }}
      </span>
    </div>
    <div v-loading="loading" v-if="!noData" id="lineChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>
<script>
import resize from '@/mixins/resize'
import line from '@/mixins/line'
export default {
  data() {
    return {
      form: {},
      time: [],
      noData: false,
      loading: false,
      activeHead: 1,
      heads: [],
      color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A'],
      legends: ['优秀值', '良好值', '平均值', '较低值', '较差值'],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${item.seriesName}：${item.value}%<br/>`
          })
          return result
        }
      }
    }
  },
  mixins: [line],
  props: {
    type: String
  },
  watch: {
    activeHead() {
      this.drawChart()
    },
    type() {
      this.getData()
    }
  },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        this.heads = [
          {
            value: 1,
            name: '营业收入增长率'
          },
          {
            value: 2,
            name: '毛利率增长率'
          },
          {
            value: 3,
            name: '净利润增长率'
          },
          {
            value: 4,
            name: '总资产增长率'
          },
          {
            value: 5,
            name: '所有者权益增长率'
          }
        ]
        this.activeHead = this.heads[0].value
        this.drawChart()
      })
    },

    setChartOption() {
      this.chartOption_line.tooltip = Object.assign({}, this.chartOption_line.tooltip, this.tooltip)
      this.chartOption_line.color = this.color
      this.chartOption_line.legend.left = 0
      this.chartOption_line.grid.left = '40px'
      const series = []
      this.legends.forEach((item) => {
        series.push({
          name: item,
          type: 'line',
          data: [
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100)
          ]
        })
      })

      this.chartOption_line.yAxis.axisLabel.formatter = '{value}%'
      this.chartOption_line.series = series
      this.chartOption_line.xAxis.data = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
      return this.chartOption_line
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.chartMain {
  .filter {
    width: 100%;
    height: 28px;
    line-height: 28px;
    margin: 20px 0 16px 0;

    span {
      display: inline-block;
      vertical-align: top;
      width: auto;
      height: 22px;
      line-height: 22px;
      border-radius: 4px;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 16px;
      margin-bottom: 16px;
      font-size: 12px;
      cursor: pointer;

      &.active {
        background: #3a84ff;
        color: white;
      }
    }
  }
}
#lineChart {
  width: 100%;
  flex: 1;
}
</style>