<template>
  <div class="chartMain">
    <h1 class="chart-title">基准指标</h1>
    <div class="filter">
      <div class="filter-item">日期：</div>
      <time-select class="filter-item" v-model="time"></time-select>
      <el-button class="filter-item btn" type="primary" @click="search">查询</el-button>
    </div>
    <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData" height="300">
      <el-table-column prop="name" label="科目" align="center"></el-table-column>
      <el-table-column prop="A" label="优秀值" align="center"></el-table-column>
      <el-table-column prop="B" label="良好值" align="center"></el-table-column>
      <el-table-column prop="C" label="平均值" align="center"></el-table-column>
      <el-table-column prop="D" label="较低值" align="center"></el-table-column>
      <el-table-column prop="E" label="较差值" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      time: [],
      loading: false,
      tableData: []
    }
  },
  props: {
    type: String
  },
  watch: {
    type() {
      this.search()
    }
  },
  methods: {
    search() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.tableData = []
      }, 1000)
    }
  },
  mounted() {
    this.search()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.chartMain {
  .filter {
    width: 100%;
    height: 28px;
    line-height: 28px;
    margin: 20px 0 16px 0;
    .filter-item {
      display: inline-block;
      vertical-align: top;
      float: none;
    }

    .btn {
      margin-left: 12px;
    }
  }
}
</style>