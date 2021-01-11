<template>
  <div class="main">
    <h1 class="main-title">全行客户画像</h1>
    <div class="item-box">
      <div class="com-main">
        <h1 class="com-title">行业存量授信客户贷款余额情况</h1>
        <div class="card-box">
          <bar-chart class="card_lg" :request="loan_balance"></bar-chart>
          <circle-chart
            class="card_lg"
            title=""
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
            title=""
            :request="total_abnormal_loan"
            :legendData="legendData_2"
          ></circle-chart>
        </div>
      </div>
      <distribution-main style="height: 560px" class="item_100 height_lg"></distribution-main>
      <risk-table class="item_100 height_mid" title="全行存量客户舆情风险事件"></risk-table>
      <risk-rank-com
        class="item_50 item_last height_mid"
        :barList="barList_1"
        title="全行存量授信客户行内风险"
      ></risk-rank-com>
      <risk-rank-com
        class="item_50 item_last height_mid"
        :barList="barList_2"
        title="全行存量授信客户外部风险"
      ></risk-rank-com>
    </div>
  </div>
</template>
<script>
import { loan_balance, abnormal_loan, total_loan_balance, total_abnormal_loan } from '@/api/custom'
import { Mappings_GB } from '@/mixins/base'
import barChart from '@components/stockCustom/bar'
import stackChart from '@components/stockCustom/stack'
import circleChart from '@components/stockCustom/circle'
import distributionMain from '@components/stockCustom/total/distribution'
import riskTable from '@components/stockCustom/total/risk_information_list'
import riskRankCom from '@components/stockCustom/total/risk_rank_com'
export default {
  data() {
    return {
      legendData_1: ['500万以下', '500~2000万', '2000~3000万', '3000万以上'],
      legendData_2: ['500万以下', '500~2000万', '2000~5000万', '5000万~1亿', '1亿以上'],
      barList_1: [
        {
          name: '逾期客户',
          value: 1
        },
        {
          name: '黑名单',
          value: 2
        },
        {
          name: '账户状态异常',
          value: 3
        }
      ],
      barList_2: [
        {
          name: '负面舆情',
          value: 1
        },
        {
          name: '裁判文书',
          value: 2
        },
        {
          name: '被执行人',
          value: 3
        },
        {
          name: '失信被执行人',
          value: 4
        },
        {
          name: '股权冻结',
          value: 5
        }
      ]
    }
  },
  components: {
    barChart,
    stackChart,
    circleChart,
    riskTable,
    distributionMain,
    riskRankCom
  },
  mixins: [Mappings_GB],
  methods: {
    loan_balance,
    abnormal_loan,
    total_loan_balance,
    total_abnormal_loan
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/common/component';
.item-box {
  margin-top: 20px !important;
}
.main {
  height: auto;
}
.item-box {
  padding-top: 0px !important;
}
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

  &:first-of-type {
    border-bottom: none;
    padding: 0;
  }

  &:last-of-type {
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
