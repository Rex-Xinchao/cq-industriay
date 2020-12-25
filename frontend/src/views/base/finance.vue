<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">龙头财务</h1>
    </div>
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
        <span class="filter-label fr">披露期：{{ time || '--' }}</span>
      </div>
      <el-table v-loading="loading" class="table-head-grey" :data="tableData" height="calc(100% - 120px)">
        <el-table-column prop="comName" label="龙头企业" align="center">
          <template slot-scope="scope">
            {{ scope.row.comName ? scope.row.comName : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="market" label="市场" align="center">
          <template slot-scope="scope">
            {{ scope.row.market ? scope.row.market : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="income" label="业务线收入" align="center" sortable>
          <template slot-scope="scope">
            {{ scope.row.income ? scope.row.income : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="grossMargin" label="业务线毛利" align="center" sortable>
          <template slot-scope="scope">
            {{ scope.row.grossMargin ? scope.row.grossMargin : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="growth" label="业务线收入增速" align="center" sortable>
          <template slot-scope="scope">
            {{ scope.row.growth ? `${scope.row.growth}%` : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="gpr" label="业务线毛利率" align="center" sortable>
          <template slot-scope="scope">
            {{ scope.row.gpr ? `${scope.row.gpr}%` : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="businessIncome" label="营业收入" align="center" sortable>
          <template slot-scope="scope">
            {{ scope.row.businessIncome ? scope.row.businessIncome : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="netIncome" label="净利润" align="center" sortable>
          <template slot-scope="scope">
            {{ scope.row.netIncome ? scope.row.netIncome : '--' }}
          </template>
        </el-table-column>
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
import { leading_financial } from '@/api/base'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      time: null,
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
        count: 1
      }
    }
  },
  computed: {
    ...mapGetters(['industryCode'])
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
      let params = {
        industryCode: this.industryCode,
        standardType: this.norm,
        mkt: this.market,
        page: this.page.count,
        size: 20
      }
      console.log(params)
      leading_financial(params)
        .then((res) => {
          this.loading = false
          this.tableData = res.result
          this.time = res.time
          // todo page && size && total
        })
        .catch((err) => {
          this.loading = false
          this.tableData = []
          this.time = null
        })
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
  padding-top: 48px;
  height: calc(100% - 48px);
  .main-body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: white;
    padding: 0 16px;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);

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