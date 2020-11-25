<template>
  <div class="main competition-main">
    <h1 class="main-title">
      竞争格局
      <span class="sign">{{ industry }}</span>
    </h1>
    <div class="item-box">
      <multiple-chart title="行业集中度指数" class="item_60" style="height: 280px"></multiple-chart>
      <toggle-chart class="item_40" style="height: 280px"></toggle-chart>
      <el-tabs class="item_100 item-tab" style="height: 60px; line-height: 60px; padding: 0 20px" v-model="activeType">
        <el-tab-pane label="全部" name="all"></el-tab-pane>
        <el-tab-pane label="重庆市" name="cq"></el-tab-pane>
        <el-tab-pane label="四川省" name="sc"></el-tab-pane>
        <el-tab-pane label="贵州省" name="gz"></el-tab-pane>
        <el-tab-pane label="陕西省" name="sx"></el-tab-pane>
      </el-tabs>
      <table-com :area="activeType" class="item_100" style="height: 380px"></table-com>
    </div>
  </div>
</template>
<script>
import multipleChart from '@components/analysis/competition/multiple'
import toggleChart from '@components/analysis/competition/toggle'
import tableCom from '@components/analysis/competition/table'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeType: 'all'
    }
  },
  computed: {
    ...mapGetters(['industry'])
  },
  components: { toggleChart, multipleChart, tableCom }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.main-body {
  width: 100%;
  box-sizing: border-box;
  background-color: white;
}
</style>
<style lang="scss">
.competition-main {
  .el-tabs__nav-wrap::after {
    background-color: white !important;
  }
}
</style>