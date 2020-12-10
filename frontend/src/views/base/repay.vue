<template>
  <div class="main">
    <h1 class="main-title">偿还能力</h1>
    <div class="item-box">
      <el-tabs class="item_100 crumbs" v-model="activeType">
        <el-tab-pane label="绩效评价（国资委）" name="1"></el-tab-pane>
        <el-tab-pane label="财务基准" name="2"></el-tab-pane>
      </el-tabs>
      <base-table :type="activeType" class="item_100 height_lg"></base-table>
      <line-chart :heads="headers" :type="activeType" class="item_100 item_last height_lg"></line-chart>
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
          name: '流动比率'
        },
        {
          value: 2,
          name: '速动比率'
        },
        {
          value: 3,
          name: '现金比率'
        },
        {
          value: 4,
          name: '资产负债率'
        },
        {
          value: 5,
          name: '权益乘数'
        },
        {
          value: 6,
          name: '债务权益比'
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