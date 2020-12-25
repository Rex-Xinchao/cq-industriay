<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        行业前景
        <span class="sign">{{ industry }}</span>
      </h1>
    </div>
    <div class="main-body">
      <card-list class="card-list"></card-list>
      <complex-chart
        class="main-chart"
        title="成长前景"
        tip="上市、三板、发债企业的业务收入数据和财报资产规模"
        :barTitles="['行业收入', '行业资产']"
        :types="['ratio', 'number']"
      ></complex-chart>
      <div class="main-chart com-main" style="height: 520px">
        <h1 class="com-title">
          盈利前景
          <i class="icon-tip" title="上市、三板、发债企业的业务毛利率和财报净利率"></i>
        </h1>
        <barOnly style="height: 200px" name="行业毛利率"></barOnly>
        <barOnly style="height: 200px" name="行业净利率"></barOnly>
      </div>
      <bar-chart
        class="main-chart"
        title="市场前景"
        :showSelect="true"
        :legends="['上市', '三板', '发债']"
        tip="上市、三板、发债企业数量和工商企业数量"
      ></bar-chart>
    </div>
  </div>
</template>
<script>
import complexChart from '@components/analysis/prospect/complex'
import cardList from '@components/analysis/prospect/cards'
import barChart from '@components/analysis/prospect/bar'
import barOnly from '@components/analysis/prospect/bar_only'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['industry'])
  },
  components: { complexChart, barChart, barOnly, cardList },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/common/component';
.card-list {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);
}
.main-chart {
  width: 100%;
  height: 350px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>