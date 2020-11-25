<template>
  <div class="main">
    <h1 class="main-title">
      行业风险
      <span class="sign">汽车行业</span>
    </h1>
    <div class="main-body item-box">
      <pack-chart class="item_60" style="height: 460px; background-color: #f4f6f9"></pack-chart>
      <div class="item_40" style="height: 460px; background-color: #f4f6f9; flex-direction: column">
        <finance-table class="finance-table-main" title="财务及经济指标异动"></finance-table>
        <div class="market-info-main">
          <div class="card" v-loading="loading">
            <span class="title">债券市场</span>
            <span class="num">
              {{ bond.value }}
              <s class="unit">违约企业</s>
              <el-popover ref="popover" placement="bottom" width="108" trigger="click">
                <div class="popover-main">
                  <p style="text-align: center" v-for="item in bond.list">{{ item }}</p>
                </div>
                <s class="link" slot="reference">查看</s>
              </el-popover>
            </span>
            <span class="tip">
              占总企业
              <strong>{{ bond.ratio }}%</strong>
            </span>
          </div>
          <div class="card" v-loading="loading">
            <span class="title">股票市场</span>
            <span class="num">
              {{ stock.value }}
              <s class="unit">ST企业</s>
              <el-popover ref="popover" placement="bottom" width="108" trigger="click">
                <div class="popover-main">
                  <p style="text-align: center" v-for="item in stock.list">{{ item }}</p>
                </div>
                <s class="link" slot="reference">查看</s>
              </el-popover>
            </span>
            <span class="tip">
              占总企业
              <strong>{{ stock.ratio }}%</strong>
            </span>
          </div>
        </div>
      </div>
      <bar-table
        title="行业司法诉讼风险"
        :legends="['行业司法诉讼风险']"
        class="bar-chart-main item_50"
        style="height: 250px"
      ></bar-table>
      <line-table
        title="行业不良率/违约率"
        :legends="['行业不良率', '行业违约率']"
        class="line-chart-main item_50"
        style="height: 250px"
      ></line-table>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts')
import { bond, stock } from '@/mockData/risk'
import packChart from '@/components/analysis/risk/pack.vue'
import financeTable from '@/components/analysis/risk/financeTable.vue'
import barTable from '@/components/analysis/risk/bar.vue'
import lineTable from '@/components/analysis/risk/line.vue'
export default {
  data() {
    return {
      loading: false,
      bond: {},
      stock: {}
    }
  },
  components: { packChart, financeTable, barTable, lineTable },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.bond = bond
        this.stock = stock
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
.main-body {
  width: 100%;
  box-sizing: border-box;

  .finance-table-main {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  .market-info-main {
    width: 100%;
    height: 135px;

    .card {
      display: inline-block;
      width: calc(50% - 10px);
      height: 100%;
      padding: 20px 0 20px 20px;
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
        width: calc(100%);
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
        width: calc(100%);
        font-size: 35px;
        font-weight: bold;
        color: #1b253a;
        line-height: 44px;
        margin-bottom: 6px;

        .unit {
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          color: #000a12;
          line-height: 20px;
        }

        .link {
          text-indent: 1em;
          text-decoration: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
          color: #3a84ff;
          line-height: 20px;
          margin-left: 6px;
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
}
</style>