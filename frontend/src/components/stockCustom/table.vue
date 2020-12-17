<template>
  <div class="com-main data-table-main">
    <h1 class="com-title" v-if="title">
      {{ title }}
      <i class="icon-tip" :title="`样本来源于重庆银行${industry}授信客户`"></i>
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
        <span class="filter fr" slot="reference">
          <i class="icon-img icon-filter"></i>
          筛选
        </span>
      </el-popover>
    </h1>
    <div class="operation-bar" v-else>
      <span class="bar-item" :class="{ active: type === 1 }" @click="type = 1">{{ `逾期客户  (${number_1})` }}</span>
      <span class="bar-item last" :class="{ active: type === 2 }" @click="type = 2">
        {{ `黑名单  (${number_2})` }}
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
            <el-slider class="slider" style="margin-left: 46px" v-model="amountRange" range :max="3000"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">逾期天数</span>
            <el-slider class="slider" style="margin-left: 18px" v-model="timeRange" range :max="100"></el-slider>
          </div>
          <el-button class="save-btn fr" type="primary" @click="init">确认</el-button>
        </div>
        <span class="filter fr" slot="reference">
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
      <el-table-column prop="comName" label="名称"></el-table-column>
      <el-table-column prop="buName" label="管护机构"></el-table-column>
      <el-table-column v-if="type === 2" label="黑名单原因">
        <template slot-scope="scope">
          {{ scope.row.reason || '--' }}
        </template>
      </el-table-column>
      <el-table-column v-if="type !== 2" label="贷款余额">
        <template slot-scope="scope">
          {{
            scope.row.loanBalance && scope.row.loanBalance.amount
              ? `${converUnit(scope.row.loanBalance.amount)} ${scope.row.loanBalance.currency}`
              : '--'
          }}
        </template>
      </el-table-column>
      <el-table-column v-if="type === 1 && !title" label="逾期天数">
        <template slot-scope="scope">
          {{ scope.row.overdueDay + '天' }}
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
      type: 1,
      number_1: 6,
      number_2: 6,
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
          this.number_1 = res.overdueCount || 0
          this.number_2 = res.blacklistCount || 0
          this.response = res
          this.getData()
        })
        .catch((e) => {
          this.loading = false
          this.number_1 = 0
          this.number_2 = 0
          this.tableData = []
        })
    },
    getData() {
      if (this.type === 1) {
        this.tableData = this.response.overdueCustomers || this.response.result
      } else {
        this.tableData = this.response.blacklist
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
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
</style>
