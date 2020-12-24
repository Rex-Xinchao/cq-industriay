<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
      <el-popover placement="bottom" width="340" trigger="hover">
        <div>
          <p>HHI指数 （赫希芬达尔--赫希曼指数）</p>
          <p>市场上所有企业的市场份额的平方和，再乘以10000</p>
          <p>低集中度市场：&lt;1000</p>
          <p>中集中度市场：1000~1800</p>
          <p>高集中度市场：>1800</p>
        </div>
        <i class="icon-tip" slot="reference"></i>
      </el-popover>
    </h1>
    <div class="chart-body" v-loading="loading">
      <div class="progress-main">
        <span class="high">高</span>
        <span class="middle">中</span>
        <span class="low">低</span>
        <span class="point" :style="getRoute(2360)"></span>
        <span class="num">2360</span>
      </div>
      <div class="chart-main" id="lineChart_M"></div>
      <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
    </div>
  </div>
</template>

<script>
import resize from '@/mixins/resize'
import line from '@/mixins/line'
export default {
  name: '',
  data() {
    let vm = this
    return {
      noData: false,
      loading: false,
      tooltip: {
        trigger: 'axis',
        formatter: `{a}<br/>${vm.title}：{c}`
      },
      grid: {
        left: '100px',
        right: '20px',
        bottom: '30px',
        top: '60px'
      },
      visualMap: {
        orient: 'horizontal',
        top: 10,
        right: 10,
        pieces: [
          {
            lte: 1000,
            color: '#69EFAE'
          },
          {
            gt: 1000,
            lte: 1800,
            color: '#4E6AFD'
          },
          {
            gt: 1800,
            color: '#FF2EEF'
          }
        ],
        itemWidth: 14
      },
      series: {
        type: 'line',
        data: []
      }
    }
  },
  mixins: [resize, line],
  props: {
    title: String
  },
  methods: {
    setChartOption() {
      this.chartId_line = 'lineChart_M'
      this.chartOption_line.tooltip = Object.assign({}, this.chartOption_line.tooltip, this.tooltip)
      this.chartOption_line.grid = this.grid
      this.chartOption_line.visualMap = this.visualMap
      this.chartOption_line.series = this.series
      this.chartOption_line.xAxis.data = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
      this.chartOption_line.series.data = [50, 10, 1058, 1058, 30, 2018, 1582, 5, 8]
      return this.chartOption_line
    },
    getRoute(num) {
      let current = -70
      if (num < 1000) {
        let start = -70
        let ende = 10
        current = -70 + (num / 1000) * 80
      } else if (num > 1800) {
        let start = 125
        let end = 200
        current = 125 + ((num - 1800) / 8200) * 75
      } else {
        let start = 15
        let end = 115
        current = 15 + ((num - 1000) / 800) * 100
      }
      return `transform: rotate(${current}deg)`
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.chart-body {
  width: 100%;
  flex: 1;
  padding: 0 0 0 10px;
}
.progress-main {
  display: inline-block;
  vertical-align: top;
  width: 170px;
  height: 100%;
  background-image: url(~@/assets/imgs/circle.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 36px;
  position: relative;

  .high {
    font-size: 12px;
    color: #969bab;
    position: absolute;
    top: 114px;
    right: 0px;
  }
  .middle {
    font-size: 12px;
    color: #969bab;
    position: absolute;
    top: 40px;
    left: calc(50% - 6px);
  }
  .low {
    font-size: 12px;
    color: #969bab;
    position: absolute;
    top: 114px;
    left: 0px;
  }

  .point {
    width: 100px;
    height: 40px;
    position: absolute;
    bottom: 0;
    background-image: url(~@/assets/imgs/niddle.svg);
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(50% - 50px);
    top: calc(50% - 20px);
    transform-origin: 50% 75%;
  }

  .num {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #769ef6;
    line-height: 38px;
    position: absolute;
    bottom: 55px;
  }
}
.chart-main {
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 170px);
  height: 100%;
}
.chart-nodata {
  width: calc(100% - 170px);
  left: 170px;
}
</style>
