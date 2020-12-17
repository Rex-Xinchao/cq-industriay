<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        存量客户画像
        <span class="sign">汽车行业</span>
        <el-button class="fr" @click="pageTo('/analysis/env')">查看更多指标</el-button>
      </h1>
    </div>
    <div class="item-box">
      <div v-loading="loading" class="item_25 height_sm">
        <complex-chart v-if="dataList[0].indexType === 1" class="fill" :chartData="dataList[0]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[0]"></line-chart>
      </div>
      <div v-loading="loading" class="item_25 height_sm">
        <complex-chart v-if="dataList[1].indexType === 1" class="fill" :chartData="dataList[1]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[1]"></line-chart>
      </div>
      <div v-loading="loading" class="item_25 height_sm">
        <complex-chart v-if="dataList[2].indexType === 1" class="fill" :chartData="dataList[2]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[2]"></line-chart>
      </div>
      <div v-loading="loading" class="item_25 height_sm">
        <complex-chart v-if="dataList[3].indexType === 1" class="fill" :chartData="dataList[3]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[3]"></line-chart>
      </div>
      <bar-chart class="item_50 height_sm" :request="loan_balance"></bar-chart>
      <circle-chart
        class="item_50 height_sm"
        title="贷款余额分布"
        :request="total_loan_balance"
        :legendData="legendData_1"
      ></circle-chart>
      <stack-chart class="item_50 height_sm" :request="abnormal_loan"></stack-chart>
      <circle-chart
        class="item_50 height_sm"
        title="不良贷款余额分布"
        :request="total_abnormal_loan"
        :legendData="legendData_2"
      ></circle-chart>
      <line-table
        title="行业不良率/违约率"
        :legends="['行业不良率', '行业违约率']"
        class="item_100 height_sm"
      ></line-table>
      <table-com class="item_50 height_mid" :request="customer_statistics"></table-com>
      <table-com title="行内客户" class="item_50 height_mid" :request="customer"></table-com>
      <doucle-circle-chart
        class="item_100 item_last height_mid"
        title="行业存量授信客户负面舆情事件"
        subTitle="汽车行业"
      ></doucle-circle-chart>
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
  customer
} from '@/api/custom'
import barChart from '@components/stockCustom/bar'
import stackChart from '@components/stockCustom/stack'
import circleChart from '@components/stockCustom/circle'
import complexChart from '@components/stockCustom/complex'
import lineChart from '@components/stockCustom/line'
import tableCom from '@components/stockCustom/table'
import doucleCircleChart from '@components/stockCustom/circle_double'
import lineTable from '@/components/analysis/risk/line.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      dataList: [{}, {}, {}, {}],
      legendData_1: ['500万以下', '500~2000万', '2000~3000万', '3000万以上'],
      legendData_2: ['500万以下', '500~2000万', '2000~5000万', '5000万~1亿', '1亿以上']
    }
  },
  computed: {
    ...mapGetters(['industryCode'])
  },
  components: {
    barChart,
    stackChart,
    circleChart,
    complexChart,
    lineChart,
    tableCom,
    doucleCircleChart,
    lineTable
  },
  methods: {
    loan_balance,
    abnormal_loan,
    total_loan_balance,
    total_abnormal_loan,
    customer_statistics,
    customer,
    pageTo(path) {
      this.$router.push(path)
    },
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
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
.fill {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
