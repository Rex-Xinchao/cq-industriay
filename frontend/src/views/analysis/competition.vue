<template>
  <div class="main competition-main">
    <div class="item-menu">
      <h1 class="main-title">
        竞争格局
        <span class="sign">{{ industry }}</span>
      </h1>
    </div>
    <div class="item-box">
      <multiple-chart class="item_60 height_sm" title="行业集中度指数"></multiple-chart>
      <toggle-chart class="item_40 height_sm" title="行业工商企业注册资本和成立时间"></toggle-chart>
      <table-com class="item_100 item_last height_lg" :area="activeType" title="行业区域企业金字塔"></table-com>
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