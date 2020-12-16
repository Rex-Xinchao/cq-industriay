<template>
  <div class="main">
    <h1 class="main-title">
      景气图谱
      <span class="sign">汽车行业</span>
    </h1>
    <div class="chart-body" v-loading="tableLoading">
      <div class="graph-box"></div>
      <div ref="tooltip" class="chart-tooltip" @mouseleave="hideTip">
        <h1>行业分析</h1>
        <span @click="pageTo('/analysis/env')">行业环境</span>
        <span @click="pageTo('/analysis/prospect')">行业前景</span>
        <span @click="pageTo('/analysis/policy')">政策导向</span>
        <span @click="pageTo('/analysis/compete')">竞争格局</span>
        <span @click="pageTo('/analysis/risk')">行业风险</span>
        <span @click="pageTo('/analysis/customer')">行业获客</span>
        <span @click="pageTo('/analysis/information')">行业舆情</span>
        <h1>行业基准</h1>
        <span @click="pageTo('/base/grow')">成长能力</span>
        <span @click="pageTo('/base/profit')">盈利能力</span>
        <span @click="pageTo('/base/repay')">偿还能力</span>
        <span @click="pageTo('/base/business')">运营能力</span>
        <span @click="pageTo('/base/finance')">龙头财务</span>
        <h1>产业分析</h1>
        <span @click="pageTo('/industrial/boom')">景气图谱</span>
        <span @click="pageTo('/industrial/risk')">风险图谱</span>
        <h1>存量客户</h1>
        <span @click="pageTo('/stockCustom/index')">存量客户画像</span>
      </div>
      <el-dialog title="景气指数" :visible.sync="dialogVisible" width="80%" :before-close="hideMenu">
        <i class="icon-tip" title="这是一个提示"></i>
        <div class="tooltip-main">
          <div id="tooltipChart" class="chart" v-loading="loading"></div>
          <el-table v-loading="loading" class="boom-com_table" :data="tableData" height="380px">
            <el-table-column prop="indexName" label=""></el-table-column>
            <el-table-column prop="latestIndex" label="最新值"></el-table-column>
            <el-table-column prop="changeIndex" label="变动值"></el-table-column>
            <el-table-column label="变动率">
              <template slot-scope="scope">
                <span :class="scope.row.indexRatio < 0 ? 'postive' : 'negative'">{{ scope.row.indexRatio }}</span>
                <i :class="scope.row.indexRatio < 0 ? 'postive' : 'negative'" class="icon"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts')
import { boomChain, boomDialog } from '@/api/chain'
import { mapGetters } from 'vuex'
import chart from '@/mixins/chart'
export default {
  data() {
    const vm = this
    return {
      chartData: null,
      dialogVisible: false,
      loading: false,
      tableLoading: false,
      noData: false,
      type: 'boom',
      tooltip: {
        width: 440,
        height: 280
      },
      chartOption: {
        color: ['#5B8FF9'],
        tooltip: {
          trigger: 'axis',
          formatter: function (data) {
            let time = data[0].axisValue + '月'
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `景气指数：${item.value}%<br/>`
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
      tableData: [],
      interval: null
    }
  },
  computed: {
    ...mapGetters(['industryCode'])
  },
  mixins: [chart],
  methods: {
    hideMenu() {
      this.dialogVisible = false
    },
    showMenu(event, data) {
      this.interval && clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.dialogVisible = true
        this.loading = true
        this.current = data
        boomDialog({
          industryCode: data.code
        })
          .then((res) => {
            this.loading = false
            this.tableData = res.indexes
            this.initDialog(res.prosperities)
          })
          .catch((err) => {
            this.loading = false
          })
      }, 500)
    },
    initDialog(data = []) {
      this.chartOption.xAxis.data = data.map((item) => item.rpt)
      this.chartOption.series.data = data.map((item) => item.ratio)
      this.myChart = echarts.init(document.getElementById(`tooltipChart`))
      this.myChart.setOption(this.chartOption, true)
    },
    showTip(event, data) {
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
      }, 100)
    },
    hideTip() {
      this.$refs.tooltip.style.display = 'none'
    },
    getData() {
      this.tableLoading = true
      boomChain({
        industryCode: this.industryCode
      }).then((res) => {
        this.tableLoading = false
        this.chartData = res
        res.relationships.forEach((item, index) => {
          item.id = index
        })
        this.initChart()
      })
    },
    pageTo(path) {
      this.$router.push({
        path: path,
        query: {
          code: this.current.code
        }
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/industrial';

.tooltip-main {
  width: 100%;
  height: calc(100% - 16px);
  top: 50%;
  left: 50%;

  .chart,
  .boom-com_table {
    display: inline-block;
    vertical-align: top;
    width: 45%;
    height: 380px;

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

  .boom-com_table {
    width: 55%;
  }
}
</style>
<style lang="scss">
@import '~@/assets/styles/industrial_global';
</style>