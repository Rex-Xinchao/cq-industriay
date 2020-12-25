<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ type === 1 ? '行业债券市场违约情况' : '行业股票市场ST情况' }}
    </h1>
    <div class="com-body" v-if="type === 1">
      <div class="table-info">
        <span class="number-sum">{{ sum }}</span>
        家违约企业
        <span class="ratio-info">
          占总发债企业
          <span class="number-ratio">{{ ratio }}%</span>
        </span>
      </div>
      <el-table
        v-loading="loading"
        class="table-main table-head-grey"
        :data="tableData"
        height="300px"
        style="width: 100%"
      >
        <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
        <el-table-column label="证券代码 " align="center"></el-table-column>
        <el-table-column label="证券简称 " align="center"></el-table-column>
        <el-table-column label="公司名称 " align="center"></el-table-column>
      </el-table>
    </div>
    <div class="com-body" v-else>
      <div class="table-info">
        <span class="number-sum">{{ sum }}</span>
        家ST企业
        <span class="ratio-info">
          占总上市企业
          <span class="number-ratio">{{ ratio }}%</span>
        </span>
      </div>
      <el-table
        v-loading="loading"
        class="table-main table-head-grey"
        :data="tableData"
        height="300px"
        style="width: 100%"
      >
        <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
        <el-table-column label="证券代码 " align="center"></el-table-column>
        <el-table-column label="证券简称 " align="center"></el-table-column>
        <el-table-column label="公司名称 " align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { numberFormat } from '@/libs/utils'
export default {
  data() {
    return {
      loading: false,
      tableData: [],
      sum: 16,
      ratio: 2.28
    }
  },
  props: {
    type: Number
  },
  watch: {},
  methods: {
    numberFormat
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
@import '~@/assets/styles/common/table';
.table-info {
  margin: 4px 0;
  font-size: 14px;
  font-weight: 400;
  color: #000a12;
  line-height: 20px;

  span {
    display: inline-block;
  }

  .number-sum {
    font-size: 32px;
    font-weight: bold;
    color: #ea444e;
    line-height: 40px;
    margin-right: 8px;
  }

  .ratio-info {
    font-size: 12px;
    font-weight: 400;
    color: #94979b;
    line-height: 18px;
    margin-left: 8px;
  }

  .number-ratio {
    color: #1b253a;
  }
}
</style>
