<template>
  <div class="com-main risk-table-main">
    <h1 class="main-title">
      {{ title }}
      <div class="fr">
        <el-select class="select" v-model="typeSelect">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <time-select class="select" v-model="timeSelect"></time-select>
      </div>
    </h1>
    <div v-loading="loading">
      <ul class="tag-list">
        <li
          v-for="(item, index) in tags"
          :key="index"
          class="event-tag"
          :class="`tag-grade_${item.eventGrade}`"
          @click="pageTo(item)"
        >
          {{ item.eventName }}
        </li>
      </ul>
      <ul class="company-list" :id="tableId">
        <li class="company-main" v-for="(item, index) in companys" :key="index">
          <p class="line info-line">
            <span>{{ item.comName }}</span>
            <span>
              投放规模：{{
                item.loanBalance && item.loanBalance.amount
                  ? `${converUnit(item.loanBalance.amount)} ${item.loanBalance.currency}`
                  : '--'
              }}
            </span>
            <span>
              逾期金额：{{
                item.overdueAmount && item.overdueAmount.amount
                  ? `${converUnit(item.overdueAmount.amount)} ${item.overdueAmount.currency}`
                  : '--'
              }}
            </span>
            <span>逾期天数：{{ item.overdueDay }}</span>
          </p>
          <p class="line tag-line">
            <span
              v-for="(event, index) in item.events"
              :key="index"
              class="event-tag"
              :class="`tag-grade_${event.eventGrade}`"
              @click="pageTo(event)"
            >
              {{ event.eventName }}
            </span>
          </p>
        </li>
      </ul>
      <no-data-show class="chart-nodata" :show="noData"></no-data-show>
    </div>
  </div>
</template>
<script>
import { converUnit } from '@/libs/utils'
import { risk_event } from '@/api/custom'
import scroll from '@/mixins/scroll'
export default {
  data() {
    return {
      tableId: 'riskTable',
      noData: false,
      loading: false,
      timeSelect: [],
      typeSelect: 1,
      typeOptions: [
        { label: '贷款余额从高到低', value: 1 },
        { label: '贷款余额从低到高', value: 2 },
        { label: '逾期金额从高到低', value: 3 },
        { label: '逾期金额从低到高', value: 4 },
        { label: '逾期天数从高到低', value: 5 },
        { label: '逾期天数从低到高', value: 6 }
      ],
      tags: [],
      companys: []
    }
  },
  props: {
    title: String
  },
  mixins: [scroll],
  watch: {
    typeSelect() {
      this.tags = []
      this.companys = []
      this.search()
    },
    timeSelect() {
      this.tags = []
      this.companys = []
      this.search()
    }
  },
  methods: {
    converUnit,
    search() {
      this.loading = true
      risk_event({
        eventCode: this.typeSelect,
        st: this.timeSelect[0],
        et: this.timeSelect[1],
        page: this.page.pageNo,
        size: this.page.pageSize
      })
        .then((res) => {
          this.loading = false
          this.tags = res.eventList
          if (res.comList.length === 0) {
            this.end = true
          } else {
            this.companys.push(...res.comList)
          }
          this.noData = this.companys.length === 0
        })
        .catch((e) => {
          this.loading = false
          this.noData = true
          this.tags = []
          this.companys = []
        })
    },
    pageTo(item) {
      // let url = ''
      //   window.open('')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
@import '~@/assets/styles/common/eventTag';
.risk-table-main {
  .select {
    margin-left: 12px;
    float: right;
  }

  .tag-list {
    width: 100%;
    margin-top: 12px;
    border-bottom: 1px solid #eff0f1;
    padding: 8px 0;
  }

  .company-list {
    width: 100%;
    padding: 12px 0;
    height: 200px;
    overflow: auto;

    .company-main {
      margin-bottom: 8px;
    }

    .line {
      width: 100%;
      padding: 0;
      margin: 0;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      line-height: 30px;
    }

    .info-line {
      span {
        display: inline-block;
        margin-right: 40px;
      }
    }
  }

  .chart-nodata {
    height: calc(100% - 80px);
    top: 80px;
  }
}
</style>