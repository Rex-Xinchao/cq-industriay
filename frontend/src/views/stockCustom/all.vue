<template>
  <div class="main">
    <h1 class="main-title">全行客户画像</h1>
    <div class="item-box">
      <bar-chart class="item_50" :request="loan_balance"></bar-chart>
      <circle-chart class="item_50" title="总投放规模" :request="total_loan_balance"></circle-chart>
      <stack-chart class="item_50" :request="abnormal_loan"></stack-chart>
      <circle-chart class="item_50" title="非正常贷款投放规模" :request="total_abnormal_loan"></circle-chart>
      <distribution-main style="height: 520px" class="item_100"></distribution-main>
      <risk-table style="height: 340px" class="item_100" title="近期重点风险"></risk-table>
    </div>
  </div>
</template>
<script>
import { loan_balance, abnormal_loan, total_loan_balance, total_abnormal_loan } from '@/api/custom'
import barChart from '@components/stockCustom/bar'
import stackChart from '@components/stockCustom/stack'
import circleChart from '@components/stockCustom/circle'
import riskTable from '@components/stockCustom/risk'
import distributionMain from '@components/stockCustom/distribution'
export default {
  components: {
    barChart,
    stackChart,
    circleChart,
    riskTable,
    distributionMain
  },
  methods: {
    loan_balance,
    abnormal_loan,
    total_loan_balance,
    total_abnormal_loan
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.main {
  padding: 40px 120px;
  height: auto;
}
</style>
