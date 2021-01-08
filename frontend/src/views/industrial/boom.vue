<template>
  <div class="main">
    <h1 class="main-title">
      景气图谱
      <span class="sign">{{ industry }}</span>
    </h1>
    <div class="chart-body" v-loading="tableLoading">
      <div class="graph-box"></div>
      <no-data-show :show="noData"></no-data-show>
      <div ref="tooltip" class="chart-tooltip" @mouseleave="hideTip">
        <h1>行业分析</h1>
        <span @click="onItemClick('/analysis/env')">行业环境</span>
        <span @click="onItemClick('/analysis/prospect')">行业前景</span>
        <span @click="onItemClick('/analysis/policy')">政策导向</span>
        <span @click="onItemClick('/analysis/compete')">竞争格局</span>
        <span @click="onItemClick('/analysis/risk')">行业风险</span>
        <span @click="onItemClick('/analysis/customer')">行业获客</span>
        <span @click="onItemClick('/analysis/information')">行业舆情</span>
        <h1>行业基准</h1>
        <span @click="onItemClick('/base/grow')">成长能力</span>
        <span @click="onItemClick('/base/profit')">盈利能力</span>
        <span @click="onItemClick('/base/repay')">偿还能力</span>
        <span @click="onItemClick('/base/business')">运营能力</span>
        <span @click="onItemClick('/base/finance')">龙头财务</span>
        <h1>产业分析</h1>
        <span @click="onItemClick('/industrial/boom')">景气图谱</span>
        <span @click="onItemClick('/industrial/risk')">风险图谱</span>
        <h1>存量客户</h1>
        <span @click="onItemClick('/stockCustom/index')">存量客户画像</span>
      </div>
      <el-dialog
        modal-append-to-body
        title="景气指数"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="hideMenu"
      >
        <i class="icon-tip" title="景气指数由宏观经济指标、财务指标、舆情指数综合构建而成"></i>
        <div class="tooltip-main">
          <div id="tooltipChart" class="chart" v-loading="loading"></div>
          <el-table v-loading="loading" class="boom-com_table" :data="tableData" height="380px">
            <el-table-column prop="indexName" label=""></el-table-column>
            <el-table-column prop="latestIndex" label="最新值"></el-table-column>
            <el-table-column prop="changeIndex" label="变动值"></el-table-column>
            <el-table-column label="变动率">
              <template slot-scope="scope">
                <span :class="scope.row.indexRatio > 0 ? 'postive' : 'negative'">{{ scope.row.indexRatio }}%</span>
                <i
                  :class="scope.row.indexRatio > 0 ? 'postive' : 'negative'"
                  class="icon"
                  :title="scope.row.indexRatio > 0 ? '增加' : '减少'"
                ></i>
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
import { mapGetters } from 'vuex'
import { boomChain, boomDialog } from '@/api/chain'
import chart from '@/mixins/chart'
import pageTo from '@/mixins/pageTo'
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
      legends: {
        show: true,
        data: ['景气指数', '核心财务指数', '行业经济指数', '舆情情绪指数'],
        bottom: 0
      },
      chartOption: {
        color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A'],
        tooltip: {
          trigger: 'axis',
          formatter: function (data) {
            let time = data[0].axisValue + '月'
            let result = `${time}<br/>`
            data.forEach((item) => {
              result += `${item.seriesName}：${item.value ? item.value.toFixed(2) : '--'}<br/>`
            })
            return result
          }
        },
        grid: {
          left: '38px',
          right: '20px',
          bottom: '55px',
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
        series: []
      },
      tableData: [],
      interval: null,
      keyNames: {
        value1: '景气指数',
        value2: '核心财务指数',
        value3: '行业经济指数',
        value4: '舆情情绪指数'
      }
    }
  },
  computed: {
    ...mapGetters(['industryCode', 'industry'])
  },
  watch: {
    industryCode: {
      immediate: true,
      handler() {
        this.getData()
      }
    }
  },
  mixins: [chart, pageTo],
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
      let series = []
      for (let key in this.keyNames) {
        series.push({
          name: this.keyNames[key],
          type: 'line',
          smooth: true,
          data: data.map((item) => item[key])
        })
      }
      this.chartOption.xAxis.data = data.map((item) => item.rpt)
      this.chartOption.legend = this.legends
      this.chartOption.series = series
      this.myChart = echarts.init(document.getElementById(`tooltipChart`))
      this.myChart.setOption(this.chartOption, true)
    },
    showTip(event, data) {
      let top = 0
      let left = 0
      this.current = data
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
      this.$refs.tooltip.style.display = 'block'
      this.$refs.tooltip.style.top = top + 'px'
      this.$refs.tooltip.style.left = left + 'px'
    },
    hideTip() {
      this.$refs.tooltip.style.display = 'none'
    },
    getData() {
      this.tableLoading = true
      boomChain({
        industryCode: this.industryCode
      })
        .then((res) => {
          this.tableLoading = false
          this.chartData = res
          this.noData = res.nodes.length === 0
          res.relationships.forEach((item, index) => {
            item.id = index
          })
          this.initChart()
        })
        .catch((err) => {
          this.tableLoading = false
          this.noData = true
        })
    },
    onItemClick(path) {
      let { name, code } = { ...this.current }
      let type = 2
      this.pageTo(path, { name, code, type }, true)
    }
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