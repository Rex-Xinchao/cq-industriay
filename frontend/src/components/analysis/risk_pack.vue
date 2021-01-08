<template>
  <div class="pack-chart-main" v-loading="loading" element-loading-background="#F4F6F9">
    <div class="chart-filter">
      <el-select class="select" v-model="typeSelect">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <time-select class="select" v-model="dateTime"></time-select>
    </div>
    <div class="chart-main" id="forceChart"></div>
    <no-data-show class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>
<script>
import { graph } from '@/mockData/risk'
const echarts = require('echarts')
import resize from '@/mixins/resize'
export default {
  data() {
    return {
      loading: false,
      noData: true,
      typeSelect: 1,
      typeOptions: [
        { label: '行业舆情热度', value: 1 },
        { label: '行业多发事件', value: 2 }
      ],
      dateTime: [],
      chartOption: {
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'force',
            hoverAnimation: false,
            focusNodeAdjacency: false,
            roam: false,
            categories: [1, 2, 3],
            itemStyle: {
              borderWidth: 0,
              color: (d) => {
                const colorList = [
                  ['#00B2F8', '#0062EA'],
                  ['#C9A1FF', '#7783DA'],
                  ['#1EE9FE', '#4DB0FD']
                ]
                return {
                  type: 'linear',
                  x: 1,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: colorList[d.data.category][1]
                    },
                    {
                      offset: 1,
                      color: colorList[d.data.category][0]
                    }
                  ],
                  global: false // 缺省为 false
                }
              },
              shadowColor: 'rgba(134, 136, 225, 0.28)',
              shadowBlur: 20,
              shadowOffsetX: 1.5,
              shadowOffsetY: 1
            },
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              color: 'white'
            },
            lineStyle: {
              color: null
            },
            force: {
              gravity: 0.01,
              edgeLength: 10,
              repulsion: 32,
              layoutAnimation: false
            }
          }
        ]
      }
    }
  },
  props: {
    industryCode: String
  },
  watch: {
    typeSelect() {
      this.init()
    },
    dateTime() {
      this.init()
    },
    industryCode: {
      immediate: true,
      handler() {
        this.init()
      }
    }
  },
  mixins: [resize],
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        graph.nodes.forEach((item) => {
          item.size = item.symbolSize = Math.ceil(Math.random() * 40 + 60)
          item.x = null
          item.y = null
        })
        this.chartOption.series[0].nodes = graph.nodes
        this.chartOption.series[0].links = graph.links
        this.myChart = echarts.init(document.getElementById('forceChart'))
        this.myChart.setOption(this.chartOption, true)
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.pack-chart-main {
  position: relative;
  background-image: url(~@/assets/imgs/pack-bg.svg);
  background-repeat: no-repeat;
  background-position: center;
  .chart-filter {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1999;
    .select {
      margin-right: 12px;
    }
  }
  .chart-main {
    width: 100%;
    height: 100%;
  }
}
</style>