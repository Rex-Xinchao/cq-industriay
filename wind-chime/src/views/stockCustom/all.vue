<template>
  <div class="main">
    <h1 class="main-title">
      全行客户画像
      <span class="sign">汽车行业</span>
    </h1>
    <div class="item-box">
      <bar-chart class="item_50"></bar-chart>
      <circle-chart class="item_50" title="总投放规模"></circle-chart>
      <stack-chart class="item_50"></stack-chart>
      <circle-chart class="item_50" title="非正常贷款投放规模"></circle-chart>
      <distribution-main style="height: 500px" class="item_100"></distribution-main>
      <risk-table style="height: 340px" class="item_100" title="近期重点风险"></risk-table>
    </div>
  </div>
</template>
<script>
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
