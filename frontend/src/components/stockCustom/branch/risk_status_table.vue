<template>
  <div class="com-main data-table-main">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" :title="`来源于重庆银行${industry}授信客户`"></i>
    </h1>

    <div class="com-cards">
      <div class="card" :class="{ active: type === 0 }" @click="type = 0">
        <div class="card-main">
          <span class="icon icon_1"></span>
          <span class="line">
            <p>
              <b>{{ number_1 }}</b>
              家
            </p>
            <p>全部风险客户</p>
          </span>
        </div>
      </div>
      <div class="card" :class="{ active: type === 1 }" @click="type = 1">
        <div class="card-main">
          <span class="icon icon_2"></span>
          <span class="line">
            <p>
              <b>{{ number_1 }}</b>
              家
            </p>
            <p>逾期客户</p>
          </span>
        </div>
      </div>
      <div class="card" :class="{ active: type === 2 }" @click="type = 2">
        <div class="card-main">
          <span class="icon icon_3"></span>
          <span class="line">
            <p>
              <b>{{ number_2 }}</b>
              家
            </p>
            <p>黑名单客户</p>
          </span>
        </div>
      </div>
      <div class="card" :class="{ active: type === 3 }" @click="type = 3">
        <div class="card-main">
          <span class="icon icon_4"></span>
          <span class="line">
            <p>
              <b>{{ number_3 }}</b>
              家
            </p>
            <p>账户状态异常客户</p>
          </span>
        </div>
      </div>
    </div>
    <div class="operation-bar">
      <span class="button-export fr" @click="exportFile">
        <i class="el-icon-download"></i>
        导出
      </span>
      <el-popover ref="popover" placement="bottom" width="220" trigger="click">
        <div class="popover-main">
          <p>逾期客户筛选</p>
          <div class="block">
            <span class="demonstration">管护机构</span>
            <el-select class="select" v-model="orgSelect">
              <el-option v-for="item in orgs" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="demonstration">金额</span>
            <el-slider
              class="slider"
              style="margin-left: 46px"
              v-model="amountRange"
              range
              :max="100000000"
            ></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">逾期天数</span>
            <el-slider class="slider" style="margin-left: 18px" v-model="timeRange" range :max="365"></el-slider>
          </div>
          <el-button class="save-btn fr" type="primary" @click="init">确认</el-button>
        </div>
        <span class="filter button-export fr" slot="reference" style="margin-right: 8px">
          <i class="icon-img icon-filter"></i>
          筛选
        </span>
      </el-popover>
    </div>
    <el-table
      v-loading="loading"
      class="table-main table-head-grey"
      :data="tableData"
      style="width: 100%"
      height="324px"
    >
      <el-table-column prop="comName" label="名称">
        <template slot-scope="scope">
          <span>{{ scope.row.comName }}</span>
          <span v-if="scope.row.isOverdue" class="overdue-tag">逾期</span>
          <span v-if="scope.row.isBlack" class="black-tag">黑名单</span>
          <span v-if="scope.row.isChange" class="change-tag">异常</span>
        </template>
      </el-table-column>
      <el-table-column prop="buName" label="管护机构"></el-table-column>
      <el-table-column label="贷款余额">
        <template slot-scope="scope">
          <span class="bar" :style="{ width: 100 * (scope.row.loanBalance.amount / sum) + 'px' }"></span>
          <span class="amount">{{ scope.row.loanBalance.amount }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最大逾期天数">
        <template slot-scope="scope">
          {{ scope.row.overdueDay + '天' }}
        </template>
      </el-table-column>
      <el-table-column label="风险列入原因">
        <template slot-scope="scope">
          {{ scope.row.reason || '--' }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const echarts = require('echarts')
import { converUnit } from '@/libs/utils'
import { mapGetters } from 'vuex'
export default {
  data() {
    let vm = this
    return {
      orgSelect: null,
      orgs: [],
      amountRange: [0, 500],
      timeRange: [0, 30],
      type: 0,
      number_0: 18,
      number_1: 6,
      number_2: 6,
      number_3: 6,
      sum: 0,
      tableData: [],
      loading: false
    }
  },
  computed: {
    ...mapGetters(['industry', 'industryCode'])
  },
  props: {
    title: String,
    request: Function
  },
  watch: {
    type() {
      this.init()
    }
  },
  methods: {
    converUnit,
    save() {
      this.$refs.popover.doClose()
      this.init()
    },
    init() {
      this.loading = true
      this.request({
        industryCode: this.industryCode,
        buCode: null,
        amountLower: this.amountRange[0],
        amountUpper: this.amountRange[1],
        overdueLower: this.timeRange[0],
        overdueUpper: this.timeRange[0]
      })
        .then((res) => {
          this.loading = false
          this.number_0 = res.count || 0
          this.number_1 = res.overdueCount || 0
          this.number_2 = res.blacklistCount || 0
          this.number_3 = res.changeCount || 0
          this.response = res
          this.tableData = this.response.result
          this.sum = 0
          this.tableData.forEach((item) => {
            this.sum += item.loanBalance.amount
          })
        })
        .catch((e) => {
          this.loading = false
          this.number_0 = 0
          this.number_1 = 0
          this.number_2 = 0
          this.number_3 = 0
          this.sum = 0
          this.tableData = []
        })
    },
    exportFile() {
      this.$message.info('功能开发中')
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
@import '~@/assets/styles/common/table';
.data-table-main {
  .table-main {
    width: 100%;
    margin-top: 6px;
  }
  .save-btn {
    margin-top: 12px;
  }
}
.last {
  border-radius: 0px 4px 4px 0px;
  border-right: 1px solid #d9d9d9;
}
.operation-bar {
  margin-top: 12px;
}
.button-export,
.button-filter {
  margin-right: 12px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    color: #3a84ff;
  }
}
.overdue-tag,
.black-tag,
.change-tag {
  display: inline-block;
  margin-left: 8px;
  padding: 0 4px;
  line-height: 18px;
}

.overdue-tag {
  background-color: #e5e7fa;
  color: #7180f8;
}
.black-tag {
  background-color: #eaeaea;
}
.change-tag {
  background-color: #fbe4e8;
  color: #fe6a80;
}
.com-cards {
  padding-top: 16px;
  width: 100%;
  height: 76px;

  .card {
    display: inline-block;
    width: calc(25% - 20px);
    height: 100%;
    box-sizing: border-box;
    margin: 0 10px;
    border: 1px solid #cccccc;

    .card-main {
      padding-top: 10px;
      width: 160px;
      height: 100%;
      margin: 0 auto;
      cursor: pointer;
    }

    .icon {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
      background-size: contain;

      &.icon_1 {
        background-image: url(~@/assets/imgs/stockCustom/inside_1.svg);
      }
      &.icon_2 {
        background-image: url(~@/assets/imgs/stockCustom/inside_2.svg);
      }
      &.icon_3 {
        background-image: url(~@/assets/imgs/stockCustom/inside_3.svg);
      }
      &.icon_4 {
        background-image: url(~@/assets/imgs/stockCustom/inside_4.svg);
      }
    }

    .line {
      display: inline-block;
      width: 120px;
      padding-left: 20px;
      box-sizing: border-box;

      p {
        margin: 0;
        b {
          font-size: 28px;
          font-weight: bold;
          color: #1b253a;
          line-height: 36px;
        }
        &:nth-of-type(1) {
          font-size: 12px;
          font-weight: 400;
          color: #1b253a;
          line-height: 16px;
        }

        &:nth-of-type(2) {
          font-size: 12px;
          font-weight: 400;
          color: #94979b;
          line-height: 16px;
        }
      }
    }

    &.active {
      background: #fff8f9;
      border: 1px solid #fd485d;
      .icon {
        &.icon_1 {
          background-image: url(~@/assets/imgs/stockCustom/inside_1_active.svg);
        }
        &.icon_2 {
          background-image: url(~@/assets/imgs/stockCustom/inside_2_active.svg);
        }
        &.icon_3 {
          background-image: url(~@/assets/imgs/stockCustom/inside_3_active.svg);
        }
        &.icon_4 {
          background-image: url(~@/assets/imgs/stockCustom/inside_4_active.svg);
        }
      }
      .line {
        color: #fd485d;
        p {
          color: #fd485d;
          b {
            color: #fd485d;
          }
        }
      }
    }
  }
}
</style>
