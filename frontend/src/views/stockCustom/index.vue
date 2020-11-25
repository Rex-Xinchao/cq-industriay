<template>
  <div class="main">
    <h1 class="main-title">
      存量客户画像
      <span class="sign">汽车行业</span>
    </h1>
    <div class="item-box">
      <complex-chart class="item_25" title="汽车产量及同比变化" subTitle="近12月"></complex-chart>
      <complex-chart class="item_25" title="汽车销量及同比变化" subTitle="近12月"></complex-chart>
      <line-chart class="item_25" title="行业资产负债率" name="负债率" color="#344CE9"></line-chart>
      <line-chart class="item_25" title="行业亏损企业数同比变化" name="企业数同比" color="#FF6D02"></line-chart>
      <bar-chart class="item_50"></bar-chart>
      <circle-chart class="item_50" title="总投放规模"></circle-chart>
      <stack-chart class="item_50"></stack-chart>
      <circle-chart class="item_50" title="非正常贷款投放规模"></circle-chart>
      <table-com class="item_50" style="height: 385px"></table-com>
      <table-com title="行内客户" class="item_50" style="height: 385px"></table-com>
      <doucle-circle-chart
        class="item_100"
        style="height: 385px"
        title="存量客户近期负面事件"
        subTitle="汽车行业"
      ></doucle-circle-chart>
    </div>
  </div>
</template>
<script>
import barChart from '@components/stockCustom/bar'
import stackChart from '@components/stockCustom/stack'
import circleChart from '@components/stockCustom/circle'
import complexChart from '@components/stockCustom/complex'
import lineChart from '@components/stockCustom/line'
import tableCom from '@components/stockCustom/table'
import doucleCircleChart from '@components/stockCustom/circle_double'
export default {
  components: {
    barChart,
    stackChart,
    circleChart,
    complexChart,
    lineChart,
    tableCom,
    doucleCircleChart
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
</style>
