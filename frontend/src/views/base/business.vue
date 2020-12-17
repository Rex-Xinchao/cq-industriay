<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">运营能力</h1>
      <el-tabs class="item_100 crumbs" v-model="activeType">
        <el-tab-pane label="绩效评价（国资委）" name="1"></el-tab-pane>
        <el-tab-pane label="财务基准" name="2"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="item-box">
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
          name: '存货周转率'
        },
        {
          value: 2,
          name: '应收账款周转率'
        },
        {
          value: 3,
          name: '应付账款周转率'
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

.item-box {
  margin-top: 128px !important;
}

.crumbs {
  width: calc(100% - 40px);
  background: white;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);
}
</style>