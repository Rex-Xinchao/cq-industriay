<template>
  <div class="com-main">
    <h1 class="com-title">基准指标</h1>
    <div class="com-filter">
      <div class="filter-item">日期：</div>
      <el-date-picker
        class="filter-item time-select"
        v-model="dateTime"
        type="year"
        :clearable="false"
        placeholder="请选择年份"
        :picker-options="pickerOptions"
      ></el-date-picker>
      <el-select class="filter-item time-type-select" v-model="timeType" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-button class="filter-item btn" type="primary" @click="search">查询</el-button>
    </div>
    <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData" height="300">
      <el-table-column prop="name" label="科目" align="center"></el-table-column>
      <el-table-column prop="greateValue" label="优秀值" align="center">
        <template slot-scope="scope">
          <span v-html="getValue(scope.row.greateValue, scope.row.type)"></span>
        </template>
      </el-table-column>
      <el-table-column prop="goodValue" label="良好值" align="center">
        <template slot-scope="scope">
          <span v-html="getValue(scope.row.goodValue, scope.row.type)"></span>
        </template>
      </el-table-column>
      <el-table-column prop="averageValue" label="平均值" align="center">
        <template slot-scope="scope">
          <span v-html="getValue(scope.row.averageValue, scope.row.type)"></span>
        </template>
      </el-table-column>
      <el-table-column prop="lowerValue" label="较低值" align="center">
        <template slot-scope="scope">
          <span v-html="getValue(scope.row.lowerValue, scope.row.type)"></span>
        </template>
      </el-table-column>
      <el-table-column prop="badValue" label="较差值" align="center">
        <template slot-scope="scope">
          <span v-html="getValue(scope.row.badValue, scope.row.type)"></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { standard } from '@/api/base'
import { mapGetters } from 'vuex'
import { formatDate } from '@/libs/utils'
export default {
  data() {
    return {
      form: {},
      loading: false,
      tableData: [],
      dateTime: new Date().setFullYear(new Date().getFullYear() - 1),
      timeType: 'Q4',
      options: [
        {
          label: '年度',
          value: 'Q4'
        },
        {
          label: '半年度',
          value: 'Q2'
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > new Date().getTime() - 3600 * 24 * 365 * 1000
        }
      }
    }
  },
  computed: {
    ...mapGetters(['industryCode'])
  },
  props: {
    type: String,
    finType: Number
  },
  watch: {
    type() {
      this.search()
    },
    dateTime() {
      this.search()
    },
    timeType() {
      this.search()
    }
  },
  methods: {
    search() {
      let params = {
        industryCode: this.industryCode,
        year: formatDate(this.dateTime, 'yyyy'),
        quarter: this.timeType,
        finType: this.finType
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
    },
    getValue(value, type = 'ratio') {
      if (!value) return null
      const unit = type === 'ratio' ? '%' : '万元'
      return `${value}${unit}`
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

  .time-select,
  .time-type-select {
    margin: 0 12px 0 0;
    width: 180px;
  }
}
</style>