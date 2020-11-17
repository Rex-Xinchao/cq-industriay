<template>
  <div class="main">
    <h1 class="main-title">
      存量客户画像
      <span class="sign">汽车行业</span>
    </h1>
    <div class="item-box">
      <multiple-chart class="item_25" title="汽车产量及同比变化" subTitle="近12月"></multiple-chart>
      <multiple-chart class="item_25" title="汽车销量及同比变化" subTitle="近12月"></multiple-chart>
      <line-chart class="item_25" title="行业资产负债率" name="负债率" color="#344CE9"></line-chart>
      <line-chart class="item_25" title="行业亏损企业数同比变化" name="企业数同比" color="#FF6D02"></line-chart>
      <bar-chart class="item_50"></bar-chart>
      <circle-chart class="item_50" title="总投放规模"></circle-chart>
      <stack-chart class="item_50"></stack-chart>
      <circle-chart class="item_50" title="非正常贷款投放规模"></circle-chart>
      <table-com class="item_50" style="height: 385px"></table-com>
      <doucle-circle-chart
        class="item_50"
        style="height: 385px"
        title="存量客户近期负面事件"
        subTitle="汽车行业"
      ></doucle-circle-chart>
      <distribution-main style="height: 500px" class="item_100"></distribution-main>
      <risk-table style="height: 340px" class="item_100" title="近期重点风险"></risk-table>
    </div>
  </div>
</template>
<script>
import barChart from '@components/stockCustom/bar'
import stackChart from '@components/stockCustom/stack'
import circleChart from '@components/stockCustom/circle'
import multipleChart from '@components/stockCustom/multiple'
import lineChart from '@components/stockCustom/line'
import tableCom from '@components/stockCustom/table'
import doucleCircleChart from '@components/stockCustom/circle_double'
import riskTable from '@components/stockCustom/risk'
import distributionMain from '@components/stockCustom/distribution'
export default {
  components: {
    barChart,
    stackChart,
    circleChart,
    multipleChart,
    lineChart,
    tableCom,
    doucleCircleChart,
    riskTable,
    distributionMain
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
</style>
