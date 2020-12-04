<template>
  <div class="main">
    <h1 class="main-title">
      存量客户画像
      <span class="sign">汽车行业</span>
      <el-button class="fr" @click="pageTo('/analysis/env')">查看更多指标</el-button>
    </h1>
    <div class="item-box">
      <div v-loading="loading" class="item_25">
        <complex-chart v-if="dataList[0].type === 1" class="fill" :chartData="dataList[0]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[0]"></line-chart>
      </div>
      <div v-loading="loading" class="item_25">
        <complex-chart v-if="dataList[1].type === 1" class="fill" :chartData="dataList[0]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[1]"></line-chart>
      </div>
      <div v-loading="loading" class="item_25">
        <complex-chart v-if="dataList[2].type === 1" class="fill" :chartData="dataList[0]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[2]"></line-chart>
      </div>
      <div v-loading="loading" class="item_25">
        <complex-chart v-if="dataList[3].type === 1" class="fill" :chartData="dataList[0]"></complex-chart>
        <line-chart v-else class="fill" :chartData="dataList[3]"></line-chart>
      </div>
      <bar-chart class="item_50" :request="loan_balance"></bar-chart>
      <circle-chart class="item_50" title="总投放规模" :request="total_loan_balance"></circle-chart>
      <stack-chart class="item_50" :request="abnormal_loan"></stack-chart>
      <circle-chart class="item_50" title="非正常贷款投放规模" :request="total_abnormal_loan"></circle-chart>
      <table-com class="item_50" style="height: 385px"></table-com>
      <table-com title="行内客户" class="item_50" style="height: 385px"></table-com>
      <doucle-circle-chart
        class="item_100"
        style="height: 385px"
        title="存量客户近期负面事件"
        subTitle="汽车行业"
      ></doucle-circle-chart>
    </div>
  </div>
</template>
<script>
import { loan_balance, abnormal_loan, total_loan_balance, total_abnormal_loan, core_index } from '@/api/custom'
import barChart from '@components/stockCustom/bar'
import stackChart from '@components/stockCustom/stack'
import circleChart from '@components/stockCustom/circle'
import complexChart from '@components/stockCustom/complex'
import lineChart from '@components/stockCustom/line'
import tableCom from '@components/stockCustom/table'
import doucleCircleChart from '@components/stockCustom/circle_double'
export default {
  data() {
    return {
      loading: false,
      dataList: [{}, {}, {}, {}]
    }
  },
  components: {
    barChart,
    stackChart,
    circleChart,
    complexChart,
    lineChart,
    tableCom,
    doucleCircleChart
  },
  methods: {
    loan_balance,
    abnormal_loan,
    total_loan_balance,
    total_abnormal_loan,
    pageTo(path) {
      this.$router.push(path)
    },
    getData() {
      this.loading = true
      core_index({}).then((res) => {
        this.loading = false
        this.dataList = res.result
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.fill {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
