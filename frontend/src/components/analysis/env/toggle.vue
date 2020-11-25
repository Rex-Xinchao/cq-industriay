<template>
  <div class="right-main">
    <h1 class="right-main-title">
      <span>
        {{ activeName }}
        <i class="icon-tip" title="这是一个提示"></i>
      </span>
      <span class="icon-box">
        <i class="icon-img icon-line" :class="{ active: chartType === 'line' }" @click="chartType = 'line'"></i>
        <i class="icon-img icon-bar" :class="{ active: chartType === 'bar' }" @click="chartType = 'bar'"></i>
        <time-select v-model="dateTime"></time-select>
      </span>
    </h1>
    <p class="right-main-tip">来源：国家统计局&nbsp;&nbsp;&nbsp;&nbsp;频率：月&nbsp;&nbsp;&nbsp;&nbsp;单位：万辆</p>
    <div class="right-main-chart">
      <div v-loading="loading" id="toggleChart"></div>
      <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
    </div>
    <el-table v-loading="loading" class="right-main-table" :data="tableData" style="width: 100%">
      <el-table-column
        v-for="item in tableHead"
        :key="item"
        :label="`${item}年`"
        :prop="item"
        align="center"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
const echarts = require('echarts')
import { chartData, tableData } from '@/mockData/env'
import { getTimeLine } from '@/libs/utils'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import line from '@/mixins/line'
export default {
  data() {
    const vm = this
    return {
      tableHead: [],
      tableData: [],
      color: ['#5B8FF9'],
      chartType: 'line',
      tooltip: {
        formatter: (data) => {
          return `${data[0].name}<br/>${vm.activeName}：${data[0].value}万辆`
        }
      },
      dataZoom: [{ show: true }, { type: 'inside' }],
      grid: {
        bottom: '80px',
        top: '20px'
      },
      series: {
        type: 'line',
        data: [],
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#5B8FF9'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ],
            global: false
          }
        }
      },
      dateTime: []
    }
  },
  mixins: [resize, bar, line],
  props: {
    activeName: String
  },
  watch: {
    chartType() {
      this.drawChart()
    },
    dateTime() {
      this.drawChart()
      this.getTableData()
    },
    activeName: {
      immediate: true,
      handler() {
        this.drawChart()
        this.getTableData()
      }
    }
  },
  methods: {
    setChartOption() {
      this.chartId_line = 'toggleChart'
      this.chartId_bar = 'toggleChart'
      this.series.type = this.chartType
      const chartOption = this.chartType === 'line' ? this.chartOption_line : this.chartOption_bar
      chartOption.color = this.color
      chartOption.series = this.series
      chartOption.tooltip = Object.assign({}, chartOption.tooltip, this.tooltip)
      chartOption.grid = Object.assign({}, chartOption.grid, this.grid)
      let map = {}
      chartData.forEach((item) => {
        map[item[0]] = item[1]
      })
      let timeLine = getTimeLine(chartData[0][0], chartData[chartData.length - 1][0])
      chartOption.xAxis.data = timeLine
      chartOption.series.data = timeLine.map((item) => map[item] || 0)
      chartOption.dataZoom = this.dataZoom
      return chartOption
    },
    getTableData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.tableHead = tableData.map((item) => item.year)
        let data = {}
        tableData.forEach((item) => {
          data[item.year] = item.value
        })
        this.tableData = [data]
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.right-main {
  width: 100%;
  height: calc(100% - 112px);
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;

  .right-main-title {
    margin: 0 0 8px 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    color: #000a12;
    line-height: 22px;
    display: flex;
    justify-content: space-between;

    .icon-img {
      width: 16px;
      height: 22px;
      line-height: 22px;
      margin-right: 16px;
      cursor: pointer;

      &.icon-line {
        background-position-y: 5px;
        background-image: url(~@/assets/imgs/icons/line.svg);

        &.active {
          background-image: url(~@/assets/imgs/icons/line-active.svg);
        }
      }

      &.icon-bar {
        background-position-y: 4px;
        background-image: url(~@/assets/imgs/icons/bar.svg);

        &.active {
          background-image: url(~@/assets/imgs/icons/bar-active.svg);
        }
      }
    }
  }

  .right-main-tip {
    font-size: 12px;
    font-weight: 400;
    color: #94979b;
    line-height: 18px;
    margin: 0 0 8px 0;
  }

  .right-main-chart {
    width: 100%;
    height: calc(100% - 158px);
    position: relative;

    #toggleChart {
      width: 100%;
      height: 100%;
    }
  }

  .right-main-table {
    width: 100%;
    height: auto;
  }
}
</style>