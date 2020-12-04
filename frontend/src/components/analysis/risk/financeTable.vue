<template>
  <div class="com-main finance-table-main">
    <h1 class="main-title">
      {{ title }}
      <i class="icon-tip" title="数据来源于行业宏观经济指标和龙头企业财务数据"></i>
    </h1>
    <el-table v-loading="loading" class="table" :data="tableData" height="200px">
      <el-table-column prop="name" label=""></el-table-column>
      <el-table-column prop="last" align="center" label="最新值"></el-table-column>
      <el-table-column prop="change" align="center" label="变动值"></el-table-column>
      <el-table-column label="变动率" align="center">
        <template slot-scope="scope">
          <span :class="scope.row.ratio && scope.row.ratio.indexOf('-') < 0 ? 'postive' : 'negative'">
            {{ scope.row.ratio }}
          </span>
          <i :class="scope.row.ratio && scope.row.ratio.indexOf('-') < 0 ? 'postive' : 'negative'" class="icon"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { tableData } from '@/mockData/risk'
export default {
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  props: {
    title: String
  },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.tableData = tableData
      }, 1000)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/component';
.finance-table-main {
  background-color: white;

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
</style>