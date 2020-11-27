<template>
  <div class="com-main data-table-main">
    <h1 class="main-title" v-if="title">
      {{ title }}
      <i class="icon-tip" title="这是一个提示"></i>
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
          <el-button class="save-btn fr" type="primary" @click="save">保存</el-button>
        </div>
        <span class="button-cfg filter fr" slot="reference">
          <i class="icon-img"></i>
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
          <el-button class="save-btn fr" type="primary" @click="save">保存</el-button>
        </div>
        <span class="button-cfg filter fr" slot="reference">
          <i class="icon-img"></i>
          筛选
        </span>
      </el-popover>
    </div>
    <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="org" label="管护机构"></el-table-column>
      <el-table-column v-if="type === 2" prop="resean" label="黑名单原因"></el-table-column>
      <el-table-column v-if="type !== 2" label="贷款余额（万元）">
        <template slot-scope="scope">{{ numberFormat(scope.row.amount, 0) }}</template>
      </el-table-column>
      <el-table-column v-if="type === 1 && !title" label="逾期天数">
        <template slot-scope="scope">
          {{ scope.row.time + '天' }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const echarts = require('echarts')
import { numberFormat } from '@/libs/utils'
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
      number_3: 120,
      tableData: [],
      sum: 0,
      loading: false
    }
  },
  props: {
    title: String
  },
  watch: {
    type() {
      this.init()
    }
  },
  methods: {
    numberFormat,
    save() {
      this.$refs.popover.doClose()
      this.init()
    },
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.sum = 5146
        this.tableData = [
          {
            name: '客户名称',
            org: '分行名称',
            amount: '5146',
            time: '23'
          }
        ]
      }, 1000)
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/component';
.filter {
  cursor: pointer;
}
.data-table-main {
  .table-main {
    width: 100%;
    margin-top: 20px;
    flex: 1;
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
<style lang="scss">
.popover-main {
  .demonstration {
    display: inline-block;
    font-size: 14px;
    color: #8492a6;
    vertical-align: top;
    line-height: 44px;
  }

  .slider {
    display: inline-block;
    width: calc(100% - 88px);
  }
  .select {
    width: calc(100% - 88px);
    margin-left: 4px;
    margin-top: 8px;
  }
}
</style>
