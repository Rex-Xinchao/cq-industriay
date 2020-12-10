<template>
  <div class="main growth-main">
    <h1 class="main-title">运营能力</h1>
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
          name: '存货周转率'
        },
        {
          value: 2,
          name: '应收周转率'
        },
        {
          value: 3,
          name: '应付周转率'
        },
        {
          value: 4,
          name: '现金周转率'
        },
        {
          value: 5,
          name: '固定资产周转率'
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