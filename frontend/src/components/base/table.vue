<template>
  <div class="com-main">
    <h1 class="com-title">基准指标</h1>
    <div class="com-filter">
      <div class="filter-item">日期：</div>
      <time-select class="filter-item" v-model="dateTime"></time-select>
      <el-button class="filter-item btn" type="primary" @click="search">查询</el-button>
    </div>
    <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData" height="300">
      <el-table-column prop="name" label="科目" align="center"></el-table-column>
      <el-table-column prop="greateValue" label="优秀值" align="center"></el-table-column>
      <el-table-column prop="goodValue" label="良好值" align="center"></el-table-column>
      <el-table-column prop="averageValue" label="平均值" align="center"></el-table-column>
      <el-table-column prop="lowerValue" label="较低值" align="center"></el-table-column>
      <el-table-column prop="badValue" label="较差值" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { standard } from '@/api/base'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {},
      dateTime: [],
      loading: false,
      tableData: []
    }
  },
  computed: {
    ...mapGetters(['industryCode'])
  },
  props: {
    type: String,
    standardType: String
  },
  watch: {
    type() {
      this.search()
    }
  },
  methods: {
    search() {
      let params = {
        industryCode: this.industryCode,
        standardType: this.standardType,
        st: this.dateTime[0],
        et: this.dateTime[1]
      }
      this.loading = true
      standard(params)
        .then((res) => {
          this.loading = false
          this.tableData = res.result || []
        })
        .catch((err) => {
          this.loading = false
          this.tableData = []
        })
    }
  },
  mounted() {
    this.search()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.com-filter {
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
</style>