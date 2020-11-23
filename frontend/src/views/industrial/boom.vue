<template>
  <div class="main">
    <h1 class="main-title">
      景气图谱
      <span class="sign">汽车行业</span>
    </h1>
    <div class="chart">
      <div class="graph-box" @click="hideMenu"></div>
      <div ref="tooltip" class="chart-tooltip">
        <h1 class="tooltip-title">
          景气指数
          <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
        </h1>
        <div class="tooltip-main">
          <div id="tooltipChart" class="chart" v-loading="loading"></div>
          <el-table v-loading="loading" class="table" :data="tableData" height="200px">
            <el-table-column prop="name" label=""></el-table-column>
            <el-table-column prop="last" label="最新值"></el-table-column>
            <el-table-column prop="change" label="变动值"></el-table-column>
            <el-table-column label="变动率">
              <template slot-scope="scope">
                <span :class="scope.row.ratio.indexOf('-') < 0 ? 'postive' : 'negative'">{{ scope.row.ratio }}</span>
                <i :class="scope.row.ratio.indexOf('-') < 0 ? 'postive' : 'negative'" class="icon"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts')
import chart from '@/mixins/chart'
export default {
  data() {
    const vm = this
    return {
      loading: false,
      noData: false,
      type: 'boom',
      tooltip: {
        width: 780,
        height: 260
      },
      chartOption: {
        color: ['#5B8FF9'],
        tooltip: {
          trigger: 'axis',
          formatter: function (data) {
            let time = data[0].axisValue + '月'
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `${item.seriesName}：${item.value}%<br/>`
            })
            return result
          }
        },
        grid: {
          left: '38px',
          right: '20px',
          bottom: '20px',
          top: '32px'
        },
        xAxis: {
          type: 'category',
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
            formatter: '{value}%',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          },
          max: 100,
          min: 0
        },
        series: {
          name: 'test',
          type: 'line',
          smooth: true,
          data: [],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5B8FF9'
              },
              {
                offset: 1,
                color: '#ffe'
              }
            ])
          }
        }
      },
      tableData: [
        { name: '行业营收规模', ratio: '+10%' },
        { name: '行业净利润', ratio: '+10%' },
        { name: '行业毛利率', ratio: '+10%' },
        { name: '汽车产量', ratio: '+10%' },
        { name: '汽车销量', ratio: '+10%' },
        { name: '汽车销量', ratio: '+10%' },
        { name: '汽车销量', ratio: '+10%' },
        { name: '汽车销量', ratio: '+10%' }
      ]
    }
  },
  mixins: [chart],
  methods: {
    showMenu(event, data) {
      this.hideMenu()
      let top = 0
      let left = 0
      if (event.pageX < this.tooltip.width) {
        left = this.treeNode.width / 2
      } else if (event.pageX > this.d3TreeBox.width - this.tooltip.width / 2) {
        left = this.d3TreeBox.width - this.tooltip.width - this.treeNode.width / 2
      } else {
        left = event.pageX - this.tooltip.width / 2
      }
      if (event.pageY + this.tooltip.height > this.d3TreeBox.height) {
        top = event.pageY - this.tooltip.height - this.treeNode.height - 100
      } else {
        top = event.pageY - this.tooltip.height / 2
      }
      setTimeout(() => {
        this.$refs.tooltip.style.display = 'block'
        this.$refs.tooltip.style.top = top + 'px'
        this.$refs.tooltip.style.left = left + 'px'
        this.initDialog()
      }, 100)
    },
    hideMenu() {
      this.$refs.tooltip.style.display = 'none'
    },
    initDialog() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        this.chartOption.xAxis.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        this.chartOption.series.data = [50, 10, 21, 9, 30, 12, 6, 5, 8, 3, 2, 1]
        this.myChart = echarts.init(document.getElementById(`tooltipChart`))
        this.myChart.setOption(this.chartOption, true)
      }, 1000)
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.chart {
  width: 100%;
  height: calc(100% - 40px);
  background-color: white;
  position: relative;

  .chart-tooltip {
    display: none;
    position: absolute;
    width: 780px;
    height: 260px;
    top: 0;
    left: 0;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08),
      0px 3px 6px -4px rgba(0, 0, 0, 0.12);
    padding: 14px 20px;
    box-sizing: border-box;

    h1 {
      font-size: 12px;
      font-weight: 500;
      color: #444444;
      padding: 0;
      margin: 0;
    }

    .tooltip-main {
      width: 100%;
      height: calc(100% - 16px);

      .chart,
      .table {
        display: inline-block;
        vertical-align: top;
        width: 45%;
        height: 100%;

        .negative {
          color: #08a24c;
        }

        .postive {
          color: #ea444e;
        }

        .icon {
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
          width: 8px;
          height: 16px;
          background-repeat: no-repeat;
          &.negative {
            background-image: url(~@/assets/imgs/icons/down.svg);
          }
          &.postive {
            background-image: url(~@/assets/imgs/icons/up.svg);
          }
        }
      }

      .table {
        width: 55%;
      }
    }
  }
}
.graph-box {
  width: 100%;
  height: 100%;
  margin: 0;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
}
</style>
<style lang="scss">
$UP_COLOR: #a49fff;
$DOWN_COLOR: #83bfff;

.link.up {
  stroke: $UP_COLOR;
}

.link.down {
  stroke: $DOWN_COLOR;
}

path.link {
  fill: none;
  stroke-width: 1px;
  stroke-dasharray: 3, 3;

  .down {
    stroke: $DOWN_COLOR;
  }

  .up {
    stroke: $UP_COLOR;
  }
}

.typeNode {
  &.up {
    text {
      fill: #4c53ff;
    }
  }
  &.down {
    text {
      fill: #2897ef;
    }
  }
}

.node {
  circle {
    fill: none;
    stroke-width: 1.5px;
  }

  .down circle {
    stroke: $DOWN_COLOR;
  }

  .up circle {
    stroke: $UP_COLOR;
  }
}
</style>