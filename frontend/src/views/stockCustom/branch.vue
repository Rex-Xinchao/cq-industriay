<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        存量客户画像
        <span class="sign">{{ industry }}</span>
        <el-button class="fr" @click="pageTo('/analysis/env', true)">查看更多指标</el-button>
      </h1>
    </div>
    <div class="item-box">
      <div class="com-main" v-loading="loading">
        <h1 class="com-title">行业经济/宏观指标</h1>
        <div class="card-box">
          <complex-chart v-if="dataList[0].indexType === 1" class="card" :chartData="dataList[0]"></complex-chart>
          <line-chart v-else class="card" :chartData="dataList[0]"></line-chart>
          <complex-chart v-if="dataList[1].indexType === 1" class="card" :chartData="dataList[1]"></complex-chart>
          <line-chart v-else class="card" :chartData="dataList[1]"></line-chart>
          <complex-chart v-if="dataList[2].indexType === 1" class="card" :chartData="dataList[2]"></complex-chart>
          <line-chart v-else class="card" :chartData="dataList[2]"></line-chart>
          <complex-chart v-if="dataList[3].indexType === 1" class="card" :chartData="dataList[3]"></complex-chart>
          <line-chart v-else class="card" :chartData="dataList[3]"></line-chart>
        </div>
        <div class="card-box">
          <ratio-line
            color="#344CE9"
            title="行业存量授信客户不良率"
            legend="行业存量授信客户不良率"
            class="card_lg"
            :rejectData="rejectData"
            keyName="rejectRate"
          ></ratio-line>
          <ratio-line
            color="#72AF78"
            title="行业存量授信客户违约率"
            legend="行业存量授信客户违约率"
            class="card_lg"
            :rejectData="rejectData"
            keyName="defaultRate"
          ></ratio-line>
        </div>
      </div>
      <div class="com-main">
        <h1 class="com-title">行业存量授信客户贷款余额情况</h1>
        <div class="card-box">
          <bar-chart class="card_lg" :request="loan_balance"></bar-chart>
          <circle-chart
            class="card_lg"
            title="贷款余额分布"
            :request="total_loan_balance"
            :legendData="legendData_1"
          ></circle-chart>
        </div>
      </div>
      <div class="com-main">
        <h1 class="com-title">行业存量授信客户不良贷款情况</h1>
        <div class="card-box">
          <stack-chart class="card_lg" :request="abnormal_loan"></stack-chart>
          <circle-chart
            class="card_lg"
            title="不良贷款余额分布"
            :request="total_abnormal_loan"
            :legendData="legendData_2"
          ></circle-chart>
        </div>
      </div>
      <table-com title="行业客户及行内风险状况" class="item_100 height_mid" :request="customer_statistics"></table-com>
      <doucle-circle-chart
        class="item_100 height_mid"
        title="行业存量授信客户负面舆情事件"
        subTitle="汽车行业"
      ></doucle-circle-chart>
      <risk-table-com class="item_100 item_last height_mid" title="行业存量授信客户的外部风险"></risk-table-com>
    </div>
  </div>
</template>
<script>
import {
  loan_balance,
  abnormal_loan,
  total_loan_balance,
  total_abnormal_loan,
  core_index,
  customer_statistics,
  customer,
  reject_default
} from '@/api/custom'
import barChart from '@components/stockCustom/bar'
import stackChart from '@components/stockCustom/stack'
import circleChart from '@components/stockCustom/circle'
import complexChart from '@components/stockCustom/branch/complex'
import lineChart from '@components/stockCustom/branch/line'
import tableCom from '@components/stockCustom/branch/risk_status_table'
import doucleCircleChart from '@components/stockCustom/branch/circle_double'
import ratioLine from '@/components/stockCustom/branch/ratio_line'
import riskTableCom from '@/components/stockCustom/branch/external_risk_table'
import pageTo from '@/mixins/pageTo'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      dataList: [{}, {}, {}, {}],
      rejectData: [],
      legendData_1: ['500万以下', '500~2000万', '2000~5000万', '5000万~1亿', '1亿以上'],
      legendData_2: ['500万以下', '500~2000万', '2000~5000万', '5000万~1亿', '1亿以上']
    }
  },
  computed: {
    ...mapGetters(['industryCode', 'industry'])
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
  components: {
    barChart,
    stackChart,
    circleChart,
    complexChart,
    lineChart,
    tableCom,
    doucleCircleChart,
    ratioLine,
    riskTableCom
  },
  methods: {
    loan_balance,
    abnormal_loan,
    total_loan_balance,
    total_abnormal_loan,
    customer_statistics,
    customer,
    getData() {
      this.loading = true
      core_index({
        industryCode: this.industryCode,
        buCode: null,
        limit: null
      })
        .then((res) => {
          this.loading = false
          this.dataList = []
          for (let i = 0; i < 4; i++) {
            this.dataList.push(res.result[i] || {})
          }
        })
        .catch((e) => {
          this.loading = false
          this.dataList = [{}, {}, {}, {}]
        })
      reject_default({
        industryCode: this.industryCode
      })
        .then((res) => {
          this.rejectData = res.result || []
          for (let i = 0; i < 4; i++) {
            this.dataList.push(res.result[i] || {})
          }
        })
        .catch((e) => {
          this.rejectData = []
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/common/component';

.com-main {
  background-color: white;
}
.card-box {
  width: 100%;
  height: 186px;
  margin: 12px 0 0 0;
  display: flex;
  border-bottom: 1px solid #cccccc;
  padding: 0 0 20px 0;

  &:last-of-type {
    border-bottom: none;
    padding: 0;
  }

  &:nth-of-type(2) {
    border-bottom: none;
    padding: 0;
  }

  .card {
    width: calc(25% - 15px);
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #dcdee3;
    padding: 0;
    margin: 0 20px 0 0;

    &:last-of-type {
      border: none;
      margin: 0;
    }
  }

  .card_lg {
    width: calc(50% - 10px);
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #dcdee3;
    padding: 0;
    margin: 0 20px 0 0;

    &:last-of-type {
      border: none;
      margin: 0;
    }
  }
}
</style>
