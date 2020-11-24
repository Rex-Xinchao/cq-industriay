<template>
  <div class="main">
    <h1 class="main-title">
      行业前景
      <span class="sign">汽车行业</span>
    </h1>
    <div class="main-body">
      <div class="main-header">
        <div class="card" v-for="item in cards" :key="item.code">
          <i class="icon-img icon-card"></i>
          <span class="title" :title="item.name">{{ item.name }}</span>
          <span class="num">{{ item.value }}</span>
          <span class="tip">
            {{ item.type === 'up' ? '较去年增加' : '较去年减少' }}
            <strong>{{ item.change }}</strong>
            <i class="icon-img" :class="`icon-${item.type}`"></i>
          </span>
        </div>
      </div>
      <mutiple-chart class="main-chart" title="成长前景" lineTitle="行业规模增速" barTitle="行业规模"></mutiple-chart>
      <bar-chart class="main-chart" title="盈利前景" :legends="['行业毛利率', '行业净利率']"></bar-chart>
      <mutiple-chart class="main-chart" title="市场前景" lineTitle="" barTitle="龙头企业营收总规模"></mutiple-chart>
    </div>
  </div>
</template>
<script>
import mutipleChart from '@components/analysis/mutiple'
import barChart from '@components/analysis/bar'
import { cards } from '@/mockData/prospect'
export default {
  data() {
    return {
      cards
    }
  },
  components: { mutipleChart, barChart }
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
}
</style>