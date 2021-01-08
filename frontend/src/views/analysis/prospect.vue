<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        行业前景
        <span class="sign">{{ industry }}</span>
      </h1>
    </div>
    <div class="main-body">
      <div class="com-main card-list">
        <h1 class="com-title">前景概览</h1>
        <div class="com-body">
          <div class="card-box" v-for="(item, index) in cards" :key="index" v-loading="loading" :title="item.title">
            <div class="card">
              <i class="icon-img icon-card"></i>
              <span class="title" :title="item.name">{{ item.name }}</span>
              <span class="num">
                <span :style="{ color: item.type === 'up' ? '#EA444E' : '#08A24C' }">
                  {{ item.unit === '元' ? getNumUnit(item.value).num : item.value }}
                </span>
                <span class="unit">
                  {{ item.unit === '元' ? `${getNumUnit(item.value).unit}${item.unit}` : item.unit }}
                </span>

                <span class="link" @click="pageTo('/base/finance', true, true)" v-if="index === 0">查看企业清单</span>
              </span>
              <span class="tip">
                {{ item.type === 'up' ? '较去年增加' : '较去年减少' }}
                <strong :class="`text-${item.type}`">{{ item.change }}</strong>
                <i class="icon-img" :class="`icon-${item.type}`" :title="item.type === 'up' ? '增加' : '减少'"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <complex-chart
        class="main-chart"
        title="成长前景"
        tip="上市、三板、发债企业的业务收入数据和财报资产规模"
        :types="['number', 'ratio']"
        :industryCode="industryCode"
      ></complex-chart>
      <div class="main-chart com-main" style="height: 520px">
        <h1 class="com-title">
          盈利前景
          <i class="icon-tip" title="上市、三板、发债企业的业务毛利率和财报净利率"></i>
        </h1>
        <line-chart type="ratio" style="height: 200px" name="行业毛利率" :industryCode="industryCode"></line-chart>
        <line-chart
          :color="['#79D2DE']"
          type="ratio"
          style="height: 200px"
          name="行业净利率"
          :industryCode="industryCode"
        ></line-chart>
      </div>
      <bar-chart
        class="main-chart"
        title="市场前景"
        :industryCode="industryCode"
        tip="上市、三板、发债企业数量和工商企业数量"
      ></bar-chart>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getNumUnit } from '@/libs/utils'
import { prospectData } from '@/api/analysis'
import pageTo from '@/mixins/pageTo'
import complexChart from '@components/analysis/prospect_complex'
import barChart from '@components/analysis/prospect_bar'
import lineChart from '@components/analysis/prospect_line'
export default {
  data() {
    return {
      loading: false,
      cards: [{}, {}, {}, {}]
    }
  },
  computed: {
    ...mapGetters(['industry', 'industryCode'])
  },
  watch: {
    industryCode: {
      immediate: true,
      handler() {
        this.getData()
      }
    }
  },
  mixins: [pageTo],
  components: { complexChart, barChart, lineChart },
  methods: {
    getNumUnit,
    getData() {
      this.loading = true
      prospectData()
        .then((res) => {
          this.loading = false
          this.cards = res.cards
          this.cards[0].name = '龙头企业数量'
          this.cards[0].title = '上市、三板、发债企业数量'
          this.cards[1].name = '龙头企业业务营收规模'
          this.cards[1].title = '上市、三板、发债企业的业务收入数据'
          this.cards[2].name = '龙头企业业务毛利率'
          this.cards[2].title = '上市、三板、发债企业的业务毛利数据'
          this.cards[3].name = '龙头企业资产规模'
          this.cards[3].title = '上市、三板、发债企业的财报资产规模'
        })
        .catch((err) => {
          this.loading = false
          this.cards = []
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/common/component';
@import '~@/assets/styles/prospect';
</style>