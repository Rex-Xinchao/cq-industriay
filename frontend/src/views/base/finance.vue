<template>
  <div class="main">
    <h1 class="main-title">龙头财务</h1>
    <div class="main-body">
      <div class="filter">
        <span class="filter-label">指标：</span>
        <span class="filter-item">
          <el-select v-model="norm" collapse-tags multiple placeholder="请选择">
            <el-option v-for="item in norms" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
        <span class="filter-label">市场：</span>
        <span class="filter-item">
          <el-select v-model="market" multiple placeholder="请选择">
            <el-option v-for="item in markets" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
        <span class="filter-label fr">披露时间：{{ time || '--' }}</span>
      </div>
      <el-table v-loading="loading" class="table-head-grey" :data="tableData" height="calc(100% - 120px)">
        <el-table-column label="龙头企业" align="center"></el-table-column>
        <el-table-column label="市场" align="center"></el-table-column>
        <el-table-column label="业务线收入" align="center" sortable></el-table-column>
        <el-table-column label="业务线毛利" align="center" sortable></el-table-column>
        <el-table-column label="业务线收入增速" align="center" sortable></el-table-column>
        <el-table-column label="业务线毛利率" align="center" sortable></el-table-column>
        <el-table-column label="营业收入" align="center" sortable></el-table-column>
        <el-table-column label="净利润" align="center" sortable></el-table-column>
      </el-table>
      <el-pagination
        class="pagination fr"
        background
        layout="prev, pager, next"
        :total="page.total"
        @current-change="currentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: '2020 Q2',
      norm: [],
      norms: [
        {
          label: '业务指标',
          value: 1
        },
        {
          label: '成长指标',
          value: 2
        },
        {
          label: '盈利指标',
          value: 3
        },
        {
          label: '偿债指标',
          value: 4
        },
        {
          label: '运营指标',
          value: 5
        }
      ],
      market: [],
      markets: [
        {
          label: 'A股',
          value: 1
        },
        {
          label: '三板',
          value: 2
        },
        {
          label: '发债',
          value: 3
        }
      ],
      loading: false,
      tableData: [],
      page: {
        total: 100,
        count: 5
      }
    }
  },
  watch: {
    norm() {
      this.getData()
    },
    market() {
      this.getData()
    }
  },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.tableData = []
      }, 1000)
    },
    currentChange(data) {
      this.page.count = data
      this.getData()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
.main {
  height: calc(100% - 40px);
  .main-body {
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    padding: 0 16px;

    .filter {
      width: 100%;
      height: 28px;
      line-height: 28px;
      padding: 16px 0;

      .filter-label,
      .filter-item {
        display: inline-block;
        vertical-align: top;
      }

      .filter-item {
        margin-right: 16px;
        width: 160px;
      }

      .filter-label {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
      }

      .fr {
        font-size: 12px;
        font-weight: 400;
        color: #94979b;
      }
    }

    .table-main {
      width: 100%;
    }

    .pagination {
      margin-top: 16px;
    }
  }
}
</style>