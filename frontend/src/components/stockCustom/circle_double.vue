<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <span class="chart-title_sub">{{ subTitle }}</span>
      <i class="icon-tip" :title="`重庆银行${industry}授信客户的新闻舆情事件`"></i>
      <div class="operation-bar fr">
        <span class="bar-item" :class="{ active: type === 1 }" @click="type = 1">近三月</span>
        <span class="bar-item" :class="{ active: type === 2 }" @click="type = 2">近半年</span>
        <span class="bar-item" :class="{ active: type === 3 }" @click="type = 3">近一年</span>
      </div>
    </h1>
    <div v-loading="loading" v-if="!noData" class="circleChart">
      <div class="half" :id="`pieChart_${timeStamp}`"></div>
      <div class="half">
        <span class="table-title">{{ dialogTitle }}</span>
        <el-table height="300" :data="dialogData" v-loading="dialogLoading">
          <el-table-column property="name" label="公司名称" width="150"></el-table-column>
          <el-table-column property="org" label="管护机构" width="200"></el-table-column>
          <el-table-column label="贷款余额（万元）">
            <template slot-scope="scope">{{ numberFormat(scope.row.amount, 0) }}</template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
  </div>
</template>

<script>
import { numberFormat } from '@/libs/utils'
import resize from '@/mixins/resize'
import pie from '@/mixins/pie'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      dialogTitle: null,
      dialogLoading: false,
      dialogVisible: false,
      dialogData: [],
      type: 1,
      timeStamp: new Date().getTime(),
      data: [],
      legend: ['500万以下', '500~3000万', '3000万以上'],
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          selectedMode: 'single',
          color: ['#5941E0', '#3D70ED', '#72DC7B', '#BFD2DB', '#657798'],
          radius: [0, '40%'],
          label: {
            position: 'inner'
          },
          labelLine: {
            show: false
          },
          data: []
        },
        {
          type: 'pie',
          radius: ['55%', '70%'],
          color: [
            '#EC6666',
            '#F14444',
            '#4A84F9',
            '#73A1FF',
            '#FDD14C',
            '#FFA805',
            '#FEA806',
            '#72EBBC',
            '#37CF93',
            '#5BCEDD',
            '#79D2DE'
          ],
          label: {
            formatter: '{b}: {c}家 ({d}%)',
            borderWidth: 1,
            borderRadius: 4
          },
          data: []
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['industry'])
  },
  mixins: [resize, pie],
  props: {
    title: String,
    subTitle: String
  },
  watch: {
    type() {
      this.drawChart()
    }
  },
  methods: {
    numberFormat,
    handleOpen(data) {
      if (data.seriesIndex === 0) return
      this.dialogTitle = data.data.name
      this.dialogVisible = true
      this.dialogLoading = true
      setTimeout(() => {
        this.dialogLoading = false
        this.dialogData = [
          {
            name: '客户名称',
            org: '分行名称',
            amount: '5146',
            time: '23'
          }
        ]
      }, 1000)
    },
    setChartEvent() {
      this.myChart.on('click', (params) => {
        if (params.componentSubType === 'pie') {
          this.handleOpen(params)
        }
      })
    },
    setChartOption() {
      this.chartId_pie = `pieChart_${this.timeStamp}`
      this.chartOption_pie.legend.show = false
      this.chartOption_pie.tooltip = this.tooltip
      this.chartOption_pie.series = this.series
      this.chartOption_pie.series[1].data = [
        {
          name: '业绩亏损',
          value: 100
        },
        {
          name: 'xx风险',
          value: 25
        },
        {
          name: '楼市降温',
          value: 50
        },
        {
          name: '基础设施',
          value: 25
        }
      ]
      this.chartOption_pie.series[0].data = [
        {
          name: '公告事件',
          value: 125
        },
        {
          name: '宏观事件',
          value: 75
        }
      ]
      this.handleOpen({
        seriesIndex: 1,
        data: {
          name: '楼市降温'
        }
      })
      return this.chartOption_pie
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.circleChart {
  width: 100%;
  flex: 1;

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
.chartMain {
  .operation-bar {
    width: auto;
  }
}
.table-title {
  width: 61px;
  font-size: 14px;
  font-weight: 400;
  color: #94979b;
  line-height: 20px;
}
</style>
