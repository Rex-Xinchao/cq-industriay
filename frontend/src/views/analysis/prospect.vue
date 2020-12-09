<template>
  <div class="main">
    <h1 class="main-title">
      行业前景
      <span class="sign">{{ industry }}</span>
    </h1>
    <div class="main-body">
      <div class="main-header">
        <div class="card" v-for="item in cards" :key="item.code" v-loading="loading">
          <i class="icon-img icon-card"></i>
          <span class="title" :title="item.name">{{ item.name }}</span>
          <span class="num">
            {{ item.value }}
            <span class="unit">{{ item.unit }}</span>
          </span>
          <span class="tip">
            {{ item.type === 'up' ? '较去年增加' : '较去年减少' }}
            <strong>{{ item.change }}</strong>
            <i class="icon-img" :class="`icon-${item.type}`"></i>
          </span>
        </div>
      </div>
      <complex-chart
        class="main-chart"
        title="成长前景"
        lineTitle="行业规模增速"
        tip="样本数据来源于上市、三板、发债企业"
        barTitle="行业规模"
        :types="['ratio', 'number']"
      ></complex-chart>
      <bar-chart
        class="main-chart"
        title="盈利前景"
        :legends="['行业毛利率', '行业净利率']"
        tip="样本数据来源于上市、三板、发债企业"
      ></bar-chart>
      <complex-chart
        class="main-chart"
        title="市场前景"
        lineTitle="龙头企业数量"
        barTitle="龙头企业营收总规模"
        tip="样本数据来源于上市、三板、发债企业"
      ></complex-chart>
    </div>
  </div>
</template>
<script>
import complexChart from '@components/analysis/prospect/complex'
import barChart from '@components/analysis/prospect/bar'
import { cards } from '@/mockData/prospect'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      cards: [{}, {}, {}, {}]
    }
  },
  computed: {
    ...mapGetters(['industry'])
  },
  components: { complexChart, barChart },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.cards = cards
      }, 1000)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.main-header {
  width: 100%;
  height: 140px;
  margin-bottom: 20px;
  box-sizing: border-box;

  .card {
    display: inline-block;
    width: calc(25% - 15px);
    height: 100%;
    padding: 20px 30px 20px 20px;
    background-color: #ffffff;
    margin-right: 20px;
    box-sizing: border-box;
    vertical-align: top;

    &:last-of-type {
      margin: 0;
    }

    &:nth-of-type(1) {
      .icon-card {
        background-image: url(~@/assets/imgs/icons/prospect_head_1.svg);
      }
    }
    &:nth-of-type(2) {
      .icon-card {
        background-image: url(~@/assets/imgs/icons/prospect_head_2.svg);
      }
    }
    &:nth-of-type(3) {
      .icon-card {
        background-image: url(~@/assets/imgs/icons/prospect_head_3.svg);
      }
    }
    &:nth-of-type(4) {
      .icon-card {
        background-image: url(~@/assets/imgs/icons/prospect_head_4.svg);
      }
    }

    .icon-card {
      float: right;
      width: 30px;
      height: 30px;
      background-color: #cccccc;
    }

    .title {
      display: block;
      width: calc(100% - 50px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      font-weight: 400;
      color: #000a12;
      line-height: 22px;
      margin-bottom: 10px;
    }

    .num {
      display: block;
      width: calc(100% - 60px);
      font-size: 35px;
      font-weight: bold;
      color: #1b253a;
      line-height: 44px;
      margin-bottom: 6px;

      .unit {
        font-size: 16px;
      }
    }

    .tip {
      font-size: 12px;
      font-weight: 400;
      color: #94979b;
      line-height: 16px;
      strong {
        color: #1b253a;
      }

      .icon-img {
        width: 8px;
        height: 16px;
        margin-left: 6px;
        vertical-align: sub;
      }

      .icon-up {
        background-image: url(~@/assets/imgs/icons/up.svg);
      }

      .icon-down {
        background-image: url(~@/assets/imgs/icons/down.svg);
      }
    }
  }
}
.main-chart {
  width: 100%;
  height: 350px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>