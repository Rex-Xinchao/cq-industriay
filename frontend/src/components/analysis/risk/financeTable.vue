<template>
  <div class="com-main finance-table-main">
    <h1 class="com-title">
      {{ title }}
      <i class="icon-tip" title="数据来源于上市、三板、发债企业的财务数据和统计局/行业网站发布的宏观指标"></i>
    </h1>
    <el-table v-loading="loading" class="table" :data="tableData" height="200px">
      <el-table-column prop="name" label=""></el-table-column>
      <el-table-column prop="last" align="right" label="最新值">
        <template slot-scope="scope">
          {{ scope.row.last ? converUnit(scope.row.last) : '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="change" align="right" label="变动值">
        <template slot-scope="scope">
          {{ scope.row.change ? converUnit(scope.row.change) : '--' }}
        </template>
      </el-table-column>
      <el-table-column label="变动率" align="right">
        <template slot-scope="scope">
          <span :class="scope.row.ratio && scope.row.ratio >= 0 ? 'postive' : 'negative'">
            {{ scope.row.ratio ? converUnit(scope.row.ratio) : '--' }}
          </span>
          <i
            :class="scope.row.ratio && scope.row.ratio >= 0 ? 'postive' : 'negative'"
            class="icon"
            :title="scope.row.ratio && scope.row.ratio >= 0 ? '增加' : '减少'"
          ></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { converUnit } from '@/libs/utils'
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
    converUnit,
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
@import '~@/assets/styles/common/component';
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