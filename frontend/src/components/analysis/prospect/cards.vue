<template>
  <div class="com-main">
    <h1 class="com-title">前景概览</h1>
    <div class="com-body">
      <div class="card-box" v-for="(item, index) in cards" :key="item.code" v-loading="loading" :title="item.title">
        <div class="card">
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
          <span class="link fr" @click="pageTo" v-if="index === 0">企业清单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cards } from '@/mockData/prospect'
export default {
  data() {
    return {
      loading: false,
      cards: [{}, {}, {}, {}]
    }
  },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.cards = cards
        this.cards[0].title = '上市、三板、发债企业数量'
        this.cards[1].title = '上市、三板、发债企业的业务收入数据'
        this.cards[2].title = '上市、三板、发债企业的业务毛利数据'
        this.cards[3].title = '上市、三板、发债企业的财报资产规模'
      }, 1000)
    },
    pageTo() {
      let url = this.$router.resolve({
        path: '/base/finance'
      })
      window.open(url.href)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.card-box {
  display: inline-block;
  width: calc(25% - 15px);
  margin-right: 20px;
  box-sizing: border-box;
  border-right: 1px solid #dcdee3;

  &:last-of-type {
    margin: 0;
    border-right: none;
    .card {
      border-right: none;
    }
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
}
.card {
  display: inline-block;
  width: 100%;
  max-width: 260px;
  height: 100%;
  padding: 20px 30px 0 20px;
  background-color: #ffffff;
  box-sizing: border-box;
  align-content: space-between;

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

  .link {
    font-size: 12px;
    font-weight: 400;
    color: #3398db;
    cursor: pointer;
    line-height: 24px;
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
</style>
