<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        行业风险
        <span class="sign">汽车行业</span>
        <el-button class="fr" @click="pageTo('/industrial/risk', true, true)">查看上下游风险</el-button>
      </h1>
    </div>
    <div class="item-box">
      <pack-chart class="item_100 pack-main"></pack-chart>
      <finance-table class="item_40 finance-table-main" title="财务及经济指标异动"></finance-table>
      <bar-table title="行业司法诉讼风险" :legends="['行业司法诉讼风险']" class="item_60 bar-chart-main"></bar-table>
      <table-com class="item_50 last" :type="1"></table-com>
      <table-com class="item_50 last" :type="2"></table-com>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts')
import { bond, stock } from '@/mockData/risk'
import packChart from '@/components/analysis/risk/pack'
import financeTable from '@/components/analysis/risk/financeTable'
import barTable from '@/components/analysis/risk/bar'
import tableCom from '@/components/analysis/risk/table'
import pageTo from '@/mixins/pageTo'
export default {
  data() {
    return {
      loading: false,
      bond: {},
      stock: {}
    }
  },
  mixins: [pageTo],
  components: { packChart, financeTable, barTable, tableCom },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.bond = bond
        this.stock = stock
      }, 1000)
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
  .pack-main {
    background-color: rgba(0, 0, 0, 0) !important;
    height: 580px !important;
  }
  .finance-table-main,
  .bar-chart-main,
  .line-chart-main {
    height: calc(100% - 500px) !important;
    min-height: 250px;
  }
}
</style>