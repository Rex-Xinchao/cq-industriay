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
export default {
  components: { barChart, stackChart, circleChart, multipleChart, lineChart, tableCom, doucleCircleChart }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  padding: 24px 120px 24px 24px;
  box-sizing: border-box;
  background-color: #F4F6F9;

  .main-title {
    width: 100%;
    padding: 0;
    margin: 0 0 20px 0;
    font-size: 20px;
    font-weight: 600;
    color: #1B253A;
    line-height: 28px;

    .sign {
      display: inline-block;
      height: 22px;
      font-size: 16px;
      font-weight: 400;
      color: #3A84FF;
      line-height: 22px;
      background: rgba(58, 132, 255, 0.2);
      border-radius: 4px;
      padding: 1px 8px;
      margin-left: 12px;
    }
  }

  .item-box {
    width: 100%;
    height: calc(100% - 48px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;

    .item_50 {
      display: flex;
      width: calc(50% - 10px);
      height: 224px;
      background-color: white;
      margin-bottom: 20px;
      box-sizing: border-box;
    }

    .item_33 {
      display: flex;
      width: calc(100% / 3 - 40px / 3);
      height: 224px;
      background-color: white;
      margin-bottom: 20px;
      box-sizing: border-box;
    }

    .item_25 {
      display: flex;
      width: calc(100% / 4 - 15px);
      height: 224px;
      background-color: white;
      margin-bottom: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
