<template>
  <div class="com-main">
    <h1 class="com-title">趋势分析</h1>
    <div class="filter-bar">
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
    <div v-loading="loading" v-if="!noData" class="chart-main" id="lineChart"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>
<script>
import { tendency } from '@/api/base'
import resize from '@/mixins/resize'
import line from '@/mixins/line'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {},
      time: [],
      noData: false,
      loading: false,
      activeHead: 1,
      color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A'],
      legends: [
        {
          name: '优秀值',
          code: 'greateValue'
        },
        {
          name: '良好值',
          code: 'goodValue'
        },
        {
          name: '平均值',
          code: 'averageValue'
        },
        {
          name: '较低值',
          code: 'lowerValue'
        },
        {
          name: '较差值',
          code: 'badValue'
        }
      ],
      tooltip: {
        formatter: function (data) {
          let time = data[0].axisValue
          let result = `${time}<br/>`
          data.forEach((item) => {
            result += `${item.seriesName}：${item.value}%<br/>`
          })
          return result
        }
      },
      request: tendency
    }
  },
  computed: {
    ...mapGetters(['industryCode']),
    urlOptions() {
      return {
        industryCode: this.industryCode,
        indexType: this.activeHead,
        type: this.type
      }
    }
  },
  mixins: [resize, line],
  props: {
    type: String,
    heads: Array
  },
  watch: {
    activeHead() {
      this.drawChart()
    },
    type() {
      this.drawChart()
    }
  },
  methods: {
    setChartOption() {
      this.chartOption_line.tooltip = Object.assign({}, this.chartOption_line.tooltip, this.tooltip)
      this.chartOption_line.color = this.color
      this.chartOption_line.legend.left = 0
      this.chartOption_line.grid.left = '40px'
      const series = []
      this.legends.forEach((item) => {
        series.push({
          name: item.name,
          type: 'line',
          data: this.lineData.map((data) => data[item.code])
        })
      })
      this.chartOption_line.yAxis.axisLabel.formatter = '{value}%'
      this.chartOption_line.series = series
      this.chartOption_line.xAxis.data = this.lineData.map((data) => data.rpt)
      return this.chartOption_line
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.filter-bar {
  width: 100%;
  height: auto;
  line-height: 28px;
  padding: 16px 0 16px 0;
  border-bottom: 1px dashed #ccc;

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
    font-size: 12px;
    cursor: pointer;

    &:hover {
      color: #3a84ff;
    }

    &.active {
      background: #3a84ff;
      color: white;
    }
  }
}
</style>