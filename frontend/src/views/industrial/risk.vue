<template>
  <div class="main">
    <h1 class="main-title">
      风险图谱
      <span class="sign">汽车行业</span>
    </h1>
    <div class="chart-body" v-loading="tableLoading">
      <div class="graph-box"></div>

      <div ref="tooltip" class="chart-tooltip" @mouseleave="hideTip">
        <h1>行业分析</h1>
        <span>行业环境</span>
        <span>行业前景</span>
        <span>政策导向</span>
        <span>竞争格局</span>
        <span>行业风险</span>
        <span>行业获客</span>
        <h1>行业基准</h1>
        <span>成长能力</span>
        <span>盈利能力</span>
        <span>偿还能力</span>
        <span>运营能力</span>
        <h1>产业分析</h1>
        <span>景气图谱</span>
        <span>风险图谱</span>
        <h1>存量客户</h1>
        <span>存量客户画像</span>
      </div>
      <el-dialog title="异动指标" :visible.sync="dialogVisible" width="50%" :before-close="hideMenu">
        <i class="icon-tip" title="这是一个提示"></i>
        <el-table v-loading="loading" class="table" :data="tableData" height="108px">
          <el-table-column prop="indexName" label=""></el-table-column>
          <el-table-column prop="latestIndex" label="最新值"></el-table-column>
          <el-table-column prop="changeIndex" label="变动值"></el-table-column>
          <el-table-column label="变动率">
            <template slot-scope="scope">
              <span :class="scope.row.indexRatio < 0 ? 'postive' : 'negative'">
                {{ scope.row.indexRatio }}
              </span>
              <i :class="scope.row.indexRatio < 0 ? 'postive' : 'negative'" class="icon"></i>
            </template>
          </el-table-column>
        </el-table>
        <h1 class="tooltip-title" style="margin-top: 12px" v-if="tags.length">
          高发事件
          <i class="icon-tip" title="异动指标范围是行业宏观经济数据和财务数据"></i>
        </h1>
        <div class="tag-list">
          <div class="tag" v-for="item in tags" :key="item.eventName">{{ item.eventName }}</div>
        </div>
        <p class="link"><a @click="pageTo">查看行业风险</a></p>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import chart from '@/mixins/chart'
import { riskChain, riskDialog } from '@/api/chain'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      chartData: null,
      dialogVisible: false,
      noData: false,
      loading: false,
      tableLoading: false,
      type: 'risk',
      tooltip: {
        width: 400,
        height: 280
      },
      tags: [],
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
        riskDialog({})
          .then((res) => {
            this.loading = false
            this.current = data
            this.tableData = res.indexes
            this.tags = res.events
          })
          .catch((err) => {
            this.loading = false
            this.tableData = []
            this.tags = []
          })
      }, 500)
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
    pageTo() {
      this.$router.push({
        path: '/analysis/risk',
        query: {
          code: this.current.code
        }
      })
    },
    getData() {
      this.tableLoading = true
      riskChain({
        industryCode: this.industryCode
      }).then((res) => {
        this.tableLoading = false
        this.chartData = res
        res.relationships.forEach((item, index) => {
          item.id = index
        })
        this.initChart()
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
.table {
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
.tag-list {
  width: 100%;
  .tag {
    display: inline-block;
    vertical-align: top;
    margin-right: 6px;
    margin-bottom: 6px;
    padding: 0 8px;
    line-height: 22px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.65);
    font-size: 12px;
  }
}
.link {
  font-size: 12px;
  font-weight: 400;
  color: #3a84ff;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
}
</style>
<style lang="scss">
@import '~@/assets/styles/industrial_global';
</style>
