<template>
  <div class="main growth-main">
    <h1 class="main-title">偿还能力</h1>
    <div class="item-box">
      <el-tabs class="item_100 item-tab" style="height: 60px; line-height: 60px; padding: 0 20px" v-model="activeType">
        <el-tab-pane label="绩效评价（国资委）" name="1"></el-tab-pane>
        <el-tab-pane label="财务基准" name="2"></el-tab-pane>
      </el-tabs>
      <base-table :type="activeType" class="item_100" style="height: 430px"></base-table>
      <line-chart :type="activeType" class="item_100 item_last" style="height: 430px"></line-chart>
    </div>
  </div>
</template>
<script>
import baseTable from '@/components/base/table'
import lineChart from '@/components/base/chart'
export default {
  data() {
    return {
      activeType: '1'
    }
  },
  components: { baseTable, lineChart }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
</style>
<style lang="scss">
.growth-main {
  .el-tabs__nav-wrap::after {
    background-color: white !important;
  }
}
</style>