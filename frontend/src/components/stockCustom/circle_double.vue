<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
      <span class="com-title_sub">{{ subTitle }}</span>
      <i class="icon-tip" :title="`重庆银行${industry}授信客户的新闻舆情事件`"></i>
      <time-select v-model="dataTime" :options="options" startValue="1Y"></time-select>
    </h1>
    <div v-loading="loading" v-if="!noData" class="chart-main">
      <div class="half" :id="`pieChart_${timeStamp}`"></div>
      <div class="half">
        <span class="table-title">{{ tableTitle }}</span>
        <el-table height="300" :data="tableData">
          <el-table-column property="comName" label="公司名称" width="150"></el-table-column>
          <el-table-column property="buName" label="管护机构" width="200"></el-table-column>
          <el-table-column label="贷款余额">
            <template slot-scope="scope">
              {{
                scope.row.loanBalance && scope.row.loanBalance.amount
                  ? `${converUnit(scope.row.loanBalance.amount)} ${scope.row.loanBalance.currency}`
                  : '--'
              }}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { numberFormat, converUnit } from '@/libs/utils'
import resize from '@/mixins/resize'
import pie from '@/mixins/pie'
import { mapGetters } from 'vuex'
import { neg_events } from '@/api/custom'
import timeSelect from '../public/time-select.vue'
const colors = [
  {
    color: '#3B6EEE',
    children: ['#4A83F9', '#5B8FF9', '#719FFE']
  },
  {
    color: '#5BDD75',
    children: ['#36CF93', '#3EDA9D', '#71EABB']
  },
  {
    color: '#F9F842',
    children: ['#F2F998', '#EAF572', '#DDEE54']
  },
  {
    color: '#FDB505',
    children: ['#FFCB50', '#FFBC1B', '#FDB506']
  },
  {
    color: '#FC6471',
    children: ['#FEA0A0', '#FF9690', '#FE847D']
  },
  {
    color: '#A93EED',
    children: ['#F4C9F3', '#FBBFFC', '#F5A5F6']
  },
  {
    color: '#5C44E1',
    children: ['#9096F0', '#979CF0', '#858CF1']
  }
]
export default {
  components: { timeSelect },
  data() {
    return {
      tableTitle: null,
      tableData: [],
      dataTime: [],
      options: [
        {
          value: '1Y',
          label: '最近1年'
        },
        {
          value: '3Y',
          label: '最近3年'
        },
        {
          value: '5Y',
          label: '最近5年'
        },
        {
          value: 'udf',
          label: '自定义'
        },
        {
          value: 'udf_show',
          label: '自定义'
        }
      ],
      type: 1,
      timeStamp: new Date().getTime(),
      data: [],
      legend: ['500万以下', '500~3000万', '3000万以上'],
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: []
    }
  },
  computed: {
    ...mapGetters(['industry', 'industryCode'])
  },
  mixins: [resize, pie],
  props: {
    title: String,
    subTitle: String
  },
  watch: {
    type() {
      this.drawChart()
    },
    dataTime() {
      this.drawChart()
    }
  },
  methods: {
    numberFormat,
    converUnit,
    async getChartData() {
      let result = []
      this.response = await neg_events({
        industryCode: this.industryCode,
        buCode: null,
        st: this.dataTime[0],
        et: this.dataTime[1]
      })
        .then((res) => res)
        .catch((e) => {})
      result = (this.response && this.response.events) || []
      this.noData = result.length === 0
      return result
    },
    setChartEvent() {
      this.myChart.on('click', (params) => {
        if (params.componentSubType === 'pie') {
          if (params.seriesIndex === 0) {
            this.tableTitle = params.data.name
            this.tableData = params.data.list
          }
        }
      })
    },
    setChartOption() {
      this.chartId_pie = `pieChart_${this.timeStamp}`
      this.chartOption_pie.legend.show = false
      this.chartOption_pie.tooltip = this.tooltip
      this.chartOption_pie.series = this.series
      let series_in = {
        type: 'pie',
        hoverAnimation: false,
        selectedOffset: 0,
        selectedMode: 'single',
        radius: [0, '40%'],
        label: {
          position: 'inner',
          color: 'white'
        },
        labelLine: {
          show: false
        },
        color: [],
        data: []
      }
      let series_out = {
        type: 'pie',
        radius: ['55%', '70%'],
        label: {
          formatter: '{b}: {c}家 ({d}%)',
          borderWidth: 1,
          borderRadius: 4
        },
        color: [],
        data: []
      }
      this.pieData.forEach((item_p, i) => {
        series_in.color.push(colors[i].color)
        series_in.data.push({
          name: item_p.eventName,
          value: item_p.comCount
        })
        item_p.negEvents.forEach((item_c, j) => {
          series_out.color.push(colors[i].children[j])
          series_out.data.push({
            name: item_c.eventName,
            value: item_c.comCount,
            list: item_c.comList
          })
          if (!this.tableData.length) {
            this.tableTitle = item_c.eventName
            this.tableData = item_c.comList
          }
        })
      })
      const isOnly = series_in.data.length === 1
      if (isOnly) {
        series_in.label.position = 'center'
      } else {
        series_in.label.position = 'inside'
      }
      this.chartOption_pie.series[1] = series_in
      this.chartOption_pie.series[0] = series_out
      return this.chartOption_pie
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.com-main{
  .operation-bar {
    width: auto;
  }
}
.chart-main {
  .half {
    width: 50%;
    height: 100%;
    display: inline-block;
    vertical-align: top;

    &:nth-of-type(2) {
      padding: 0 0 0 20px;
      box-sizing: border-box;
    }
  }
}

.table {
  width: 50%;
  flex: 1;
}
.table-title {
  width: 61px;
  font-size: 14px;
  font-weight: 400;
  color: #94979b;
  line-height: 20px;
}
</style>
