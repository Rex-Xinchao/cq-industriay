<template>
  <div class="main growth-main">
    <h1 class="main-title">盈利能力</h1>
    <div class="item-box">
      <el-tabs class="item_100" style="height: 60px; line-height: 60px; padding: 0 20px" v-model="activeType">
        <el-tab-pane label="绩效评价（国资委）" name="1"></el-tab-pane>
        <el-tab-pane label="财务基准" name="2"></el-tab-pane>
      </el-tabs>
      <base-table :type="activeType" class="item_100" style="height: 430px"></base-table>
      <line-chart :heads="headers" :type="activeType" class="item_100 item_last" style="height: 430px"></line-chart>
    </div>
  </div>
</template>
<script>
import baseTable from '@/components/base/table'
import lineChart from '@/components/base/chart'
export default {
  data() {
    return {
      activeType: '1',
      headers: [
        {
          value: 1,
          name: '毛利率'
        },
        {
          value: 2,
          name: '营业利润率'
        },
        {
          value: 3,
          name: '净利率'
        },
        {
          value: 4,
          name: '税息折旧及摊销前利润率'
        },
        {
          value: 5,
          name: '息税前利润率'
        },
        {
          value: 6,
          name: '资产收益率（ROA）'
        },
        {
          value: 7,
          name: '净资产收益率（ROE）'
        }
      ]
    }
  },
  components: { baseTable, lineChart }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
</style>
<style lang="scss">
.growth-main {
  .el-tabs__nav-wrap::after {
    background-color: white !important;
  }
}
</style>