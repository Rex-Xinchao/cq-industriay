<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
    </h1>
    <div class="com-filter">
      <el-select class="filter-item" v-model="type" placeholder="请选择">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div class="filter-item time-select">
        <span :class="{ active: time === 1 }" @click="time = 1">近3月</span>
        <span :class="{ active: time === 2 }" @click="time = 2">近1年</span>
        <span :class="{ active: time === 3 }" @click="time = 3">近3年</span>
      </div>
      <div class="filter-item operation-bar">
        <span
          v-for="item in barList"
          :key="item.value"
          class="bar-item"
          :class="{ active: barType === item.value }"
          @click="barType = item.value"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
    <div class="com-chart" v-loading="loading">
      <div v-if="!noData" class="chart-main" :id="chartId_bar"></div>
      <no-data-show class="chart-nodata" :show="noData"></no-data-show>
    </div>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
export default {
  data() {
    return {
      chartId_bar: `barChart_${new Date().getTime()}`,
      noData: false,
      type: 1,
      time: 1,
      barType: 1,
      typeOptions: [
        {
          label: '风险客户数量',
          value: 1
        },
        {
          label: '贷款余额',
          value: 2
        }
      ],
      tooltip: {
        trigger: 'axis',
        formatter: function (data) {
          let result = ''
          data.forEach((item) => {
            result += `${item.name}：${item.value}家<br/>`
          })
          return result
        }
      },
      series: {
        name: '2011年',
        type: 'bar',
        data: [28, 20, 17, 8, 4],
        label: {
          show: true,
          position: 'right',
          formatter: '{c}家'
        }
      }
    }
  },
  props: {
    title: String,
    barList: Array
  },
  watch: {
    type() {
      this.drawChart()
    },
    time() {
      this.drawChart()
    },
    barType() {
      this.drawChart()
    },
    industryCode: {
      immediate: true,
      handler(data) {
        if (!data.length) return
        this.drawChart()
      }
    }
  },
  mixins: [resize, bar],
  methods: {
    setChartOption() {
      this.chartOption_bar.color = ['#4A84FF']
      this.chartOption_bar.tooltip = Object.assign({}, this.chartOption_bar.tooltip, this.tooltip)
      this.chartOption_bar.grid.top = 16
      this.chartOption_bar.grid.left = 120
      this.chartOption_bar.legend.show = false
      this.chartOption_bar.xAxis.type = 'value'
      this.chartOption_bar.yAxis.type = 'category'
      this.chartOption_bar.yAxis.data = ['资本市场服务', '煤炭开采和洗选业', '汽车制造业', '医药制造业', '食品制造业']
      this.series.data = [4, 8, 17, 20, 28]
      this.chartOption_bar.series = this.series
      return this.chartOption_bar
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.com-filter {
  .filter-item {
    margin-top: 16px;
    display: inline-block;

    &.time-select {
      span {
        display: inline-block;
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
        margin-left: 24px;
        cursor: pointer;

        &.active {
          color: #3a84ff;
        }

        &:hover {
          color: #3a84ff;
        }
      }
    }
  }
}
</style>
