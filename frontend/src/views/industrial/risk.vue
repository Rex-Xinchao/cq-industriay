<template>
  <div class="main">
    <h1 class="main-title">
      风险图谱
      <span class="sign">{{ industry }}</span>
    </h1>
    <div class="chart-body" v-loading="tableLoading">
      <el-select v-model="code" placeholder="请选择" class="code-select" v-if="sams.length > 1">
        <el-option v-for="item in sams" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div class="graph-box"></div>
      <no-data-show class="chart-nodata" :show="noData"></no-data-show>
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
        title="异动指标"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="hideMenu"
      >
        <i class="icon-tip" title="异动指标范围是行业宏观经济数据和财务数据"></i>
        <el-table v-loading="loading" class="table" :data="tableData" max-height="500px">
          <el-table-column prop="indexName" label=""></el-table-column>
          <el-table-column prop="latestIndex" label="最新值"></el-table-column>
          <el-table-column prop="changeIndex" label="变动值"></el-table-column>
          <el-table-column label="变动率">
            <template slot-scope="scope">
              <span :class="scope.row.indexRatio < 0 ? 'postive' : 'negative'">
                {{ scope.row.indexRatio }}
              </span>
              <i
                :class="scope.row.indexRatio < 0 ? 'postive' : 'negative'"
                class="icon"
                :title="scope.row.indexRatio < 0 ? '增加' : '减少'"
              ></i>
            </template>
          </el-table-column>
        </el-table>
        <h1 class="tooltip-title" style="margin-top: 12px" v-if="tags && tags.length">
          高发事件
          <i class="icon-tip" title="异动指标范围是行业宏观经济数据和财务数据"></i>
        </h1>
        <div class="tag-list">
          <div class="tag" v-for="item in tags" :key="item.eventName">{{ item.eventName }}</div>
        </div>
        <p class="link"><a @click="pageTo('/analysis/risk', true, true)">查看行业风险</a></p>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { riskChain, riskDialog } from '@/api/chain'
import { Mappings } from '@/mixins/base'
import chart from '@/mixins/chart'
import pageTo from '@/mixins/pageTo'
export default {
  data() {
    return {
      code: null,
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
    ...mapGetters(['industryCode', 'industry'])
  },
  watch: {
    code: {
      immediate: true,
      handler(data) {
        this.noData = true
        if (!data) return
        this.getData()
      }
    }
  },
  mixins: [chart, pageTo, Mappings],
  methods: {
    hideMenu() {
      this.dialogVisible = false
    },
    showMenu(event, data) {
      this.interval && clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.dialogVisible = true
        this.loading = true
        riskDialog({
          industryCode: data.code
        })
          .then((res) => {
            this.loading = false
            this.current = data
            this.tableData = res.indexes || []
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
      riskChain({
        industryCode: this.code
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
.code-select {
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 1000;
}
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
.chart-nodata {
  height: calc(100% - 100px);
  top: 100px;
}
</style>
<style lang="scss">
@import '~@/assets/styles/industrial_global';
</style>
