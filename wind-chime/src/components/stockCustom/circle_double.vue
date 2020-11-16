<template>
  <div class="chartMain">
    <h1 class="chart-title">
      {{ title }}
      <span class="chart-title_sub">{{ subTitle }}</span>
      <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
      <div class="operation-bar fr">
        <span class="bar-item" :class="{ active: type === 1 }" @click="type = 1">近三月</span>
        <span class="bar-item" :class="{ active: type === 2 }" @click="type = 2">近半年</span>
        <span class="bar-item" :class="{ active: type === 3 }" @click="type = 3">近一年</span>
      </div>
    </h1>
    <div v-loading="loading" v-if="!noData" class="circleChart" :id="`circleChart_${timeStamp}`"></div>
    <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" :before-close="handleClose">
      <el-table height="200" :data="dialogData" v-loading="dialogLoading">
        <el-table-column property="name" label="公司名称" width="150"></el-table-column>
        <el-table-column property="org" label="管护机构" width="200"></el-table-column>
        <el-table-column label="贷款余额（万元）">
          <template slot-scope="scope">{{ numberFormat(scope.row.amount, 0) }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
const echarts = require('echarts')
import { numberFormat } from '@/libs/utils'
export default {
  name: '',
  data() {
    let vm = this
    return {
      dialogTitle: null,
      dialogData: [],
      dialogLoading: false,
      dialogVisible: false,
      noData: false,
      loading: false,
      type: 1,
      timeStamp: new Date().getTime(),
      data: [],
      legend: ['500万以下', '500~3000万', '3000万以上'],
      chartOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          show: false
        },
        series: [
          {
            type: 'pie',
            name: '事件',
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
    }
  },
  props: {
    title: String,
    subTitle: String
  },
  watch: {
    type() {
      this.init()
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
    handleClose() {
      this.dialogVisible = false
    },
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = false
        this.chartOption.series[1].data = [
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
        this.chartOption.series[0].data = [
          {
            name: '公告事件',
            value: 125
          },
          {
            name: '宏观事件',
            value: 75
          }
        ]
        if (!this.myChart) {
          this.myChart = echarts.init(document.getElementById(`circleChart_${this.timeStamp}`))
          this.myChart.on('click', (params) => {
            if (params.componentSubType === 'pie') {
              this.handleOpen(params)
            }
          })
        }
        this.myChart.setOption(this.chartOption, true)
      }, 1000)
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', () => {
      this.myChart && this.myChart.resize()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize')
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/chartMain';
.circleChart {
  width: 100%;
  flex: 1;
}
.chartMain {
  .operation-bar {
    width: auto;
  }
}
</style>
