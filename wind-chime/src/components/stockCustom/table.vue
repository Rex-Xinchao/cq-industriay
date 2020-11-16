<template>
  <div class="tableMain">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: type === 1 }" @click="type = 1">{{ `逾期客户  (${number_1})` }}</span>
      <span class="bar-item" :class="{ active: type === 2 }" @click="type = 2">{{ `黑名单  (${number_2})` }}</span>
      <span class="bar-item" :class="{ active: type === 3 }" @click="type = 3">{{ `大中型企业  (${number_3})` }}</span>
      <span class="button-cfg fr">
        <i class="icon-img"></i>
        筛选
      </span>
    </div>
    <el-table v-loading="loading" class="table-main" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="org" label="管理机构"></el-table-column>
      <el-table-column prop="amount" label="贷款余额（万元）"></el-table-column>
      <el-table-column label="逾期天数">
        <template slot-scope="scope">
          {{ scope.row.time + '天' }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: '',
  data() {
    let vm = this
    return {
      type: 1,
      number_1: 6,
      number_2: 6,
      number_3: 120,
      tableData: [],
      sum: 0,
      loading: false
    }
  },
  props: {},
  watch: {
    type() {
      this.init()
    }
  },
  methods: {
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
.tableMain {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  position: relative;

  .operation-bar {
    width: 100%;
    height: 30px;

    .bar-item {
      display: inline-block;
      font-size: 14px;
      border: 1px solid #d9d9d9;
      padding: 4px 12px;
      box-sizing: border-box;
      font-weight: 400;
      color: #000000;
      cursor: pointer;
      border-right: none;

      &:first-of-type {
        border-radius: 4px 0px 0px 4px;
      }

      &:nth-of-type(2) {
        border-right: none;
      }

      &:nth-of-type(3) {
        border-radius: 0px 4px 4px 0px;
        border-right: 1px solid #d9d9d9;
      }

      &.active {
        border-color: #3a84ff;
        color: #3a84ff;

        & + .bar-item {
          border-left-color: #3a84ff;
        }
      }
    }

    .button-cfg {
      font-size: 14px;
      font-weight: 400;
      color: #3A84FF;
      line-height: 30px;
      cursor: pointer;
    }
  }
}
.table-main {
  width: 100%;
  margin-top: 20px;
  flex: 1;
}
</style>
<style lang="scss">
.el-table thead th {
  background: #EFF0F3;
}
</style>
