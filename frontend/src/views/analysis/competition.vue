<template>
  <div class="main competition-main">
    <h1 class="main-title">
      竞争格局
      <span class="sign">{{ industry }}</span>
    </h1>
    <div class="item-box">
      <multiple-chart class="item_60 height_sm" title="行业集中度指数"></multiple-chart>
      <toggle-chart class="item_40 height_sm"></toggle-chart>
      <el-tabs class="item_100 crumbs" v-model="activeType">
        <el-tab-pane label="全部" name="all"></el-tab-pane>
        <el-tab-pane label="重庆市" name="cq"></el-tab-pane>
        <el-tab-pane label="四川省" name="sc"></el-tab-pane>
        <el-tab-pane label="贵州省" name="gz"></el-tab-pane>
        <el-tab-pane label="陕西省" name="sx"></el-tab-pane>
      </el-tabs>
      <table-com class="item_100 item_last height_mid" :area="activeType"></table-com>
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
@import '~@/assets/styles/common/view';
.main-body {
  background-color: white;
}
</style>