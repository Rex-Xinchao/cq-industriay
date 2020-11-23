<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
    </h1>
    <div class="chart-body" v-loading="loading">
      <div class="progress-main">
        <span class="point" :style="getRoute(2360)"></span>
        <span class="num">2360</span>
      </div>
      <div class="chart-main" id="lineChart_M"></div>
      <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
import resize from '@/mixins/resize'
export default {
  name: '',
  data() {
    let vm = this
    return {
      noData: false,
      loading: false,
      chartOption: {
        grid: {
          left: '80px',
          right: '20px',
          bottom: '20px',
          top: '60px'
        },
        xAxis: {
          data: [],
          axisLine: {
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          }
        },
        yAxis: {
          type: 'value',
          gridIndex: 0,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          },
          minInterval: 10,
          min: 0
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
          name: 'Beijing AQI',
          type: 'line',
          data: []
        }
      }
    }
  },
  mixins: [resize],
  props: {
    title: String
  },
  watch: {
    isScale() {
      this.init()
    }
  },
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        this.chartOption.xAxis.data = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        this.chartOption.series.data = [50, 10, 1058, 1058, 30, 2018, 1582, 5, 8]
        this.myChart = echarts.init(document.getElementById('lineChart_M'))
        this.myChart.setOption(this.chartOption, true)
      }, 1000)
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
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.chart-body {
  width: 100%;
  flex: 1;
}
.progress-main {
  display: inline-block;
  vertical-align: top;
  width: 170px;
  height: 100%;
  background-image: url(~@/assets/imgs/circle.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 36px;
  position: relative;

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
