<template>
  <div class="com-main distribution-main">
    <el-tabs v-model="activeType">
      <el-tab-pane label="全部" name="all"></el-tab-pane>
      <el-tab-pane label="重庆市" name="cq"></el-tab-pane>
      <el-tab-pane label="四川省" name="sc"></el-tab-pane>
      <el-tab-pane label="贵州省" name="gz"></el-tab-pane>
      <el-tab-pane label="陕西省" name="sx"></el-tab-pane>
    </el-tabs>
    <div class="distribution-line operation-bar">
      <span class="bar-item" :class="{ active: type === 1 }" @click="handleType(1)">行业分布</span>
      <span class="bar-item" :class="{ active: type === 2 }" @click="handleType(2)">区域分布</span>

      <el-select class="select" v-model="typeSelect">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select class="select" v-model="classifySelect">
        <el-option
          v-for="item in classifyOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="distribution-line line-sub">
      <div class="radio">
        <el-radio-group v-model="ratioSelect">
          <el-radio :label="1">客户数量</el-radio>
          <el-radio :label="2">贷款余额</el-radio>
          <el-radio :label="3">逾期客户数量</el-radio>
          <el-radio :label="4">逾期贷款余额</el-radio>
        </el-radio-group>
      </div>
      <span v-if="ratioSelect === 1" class="text">投放规模：210亿</span>
    </div>
    <div v-loading="loading" style="width: 100%">
      <div v-if="type === 1" class="information-main">
        <div class="chart-main" id="chart"></div>
        <el-table v-loading="tableLoading" class="table-main" :data="tableData" height="334">
          <el-table-column prop="comName" label="客户"></el-table-column>
          <el-table-column prop="industryName" label="所属行业"></el-table-column>
          <el-table-column prop="loanBalance.amount" label="投放规模" width="180" sortable>
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
      <div v-else class="information-main">
        <div class="map-main" id="map"></div>
        <div v-loading="tableLoading" class="legend-main">
          <p class="title">
            全部非正常客户数：
            <span class="info-num">{{ total }}家</span>
          </p>
          <p v-for="(item, index) in badListData" :key="index">
            <span class="name">{{ item.badloanType }}</span>
            <span class="progress">
              <span class="bar" style="background-color: #4a84ff" :style="getBarWidth(item)"></span>
              {{ item.comNum }}家
            </span>
          </p>
        </div>
        <div class="table-main_min">
          <el-popover ref="popover" placement="bottom" width="220" trigger="click">
            <div class="popover-main">
              <p>逾期客户筛选</p>
              <div class="block">
                <span class="demonstration">管护机构</span>
                <el-select class="select" v-model="orgSelect">
                  <el-option v-for="item in orgs" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="block">
                <span class="demonstration">金额</span>
                <el-slider
                  class="slider"
                  style="margin-left: 46px"
                  v-model="amountRange"
                  range
                  :max="100000000"
                ></el-slider>
              </div>
              <div class="block">
                <span class="demonstration">逾期天数</span>
                <el-slider class="slider" style="margin-left: 18px" v-model="timeRange" range :max="365"></el-slider>
              </div>
              <el-button class="save-btn fr" type="primary" @click="onFilterCheck">确认</el-button>
            </div>
            <span class="button-cfg filter fr" slot="reference">
              <i class="icon-img icon-filter"></i>
              筛选
            </span>
          </el-popover>
          <el-table v-loading="tableLoading" :data="tableData" height="320">
            <el-table-column prop="comName" label="客户"></el-table-column>
            <el-table-column prop="buName" label="管护机构"></el-table-column>
            <el-table-column prop="loanBalance.amount" label="投放规模" width="180" sortable>
              <template slot-scope="scope">
                {{
                  scope.row.loanBalance && scope.row.loanBalance.amount
                    ? `${converUnit(scope.row.loanBalance.amount)} ${scope.row.loanBalance.currency}`
                    : '--'
                }}
              </template>
            </el-table-column>
            <el-table-column prop="overdueDay" label="逾期天数" sortable>
              <template slot-scope="scope">
                {{ scope.row.overdueDay + '天' }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
import cq from '@/libs/map/chongqing'
import sc from '@/libs/map/sichuan'
import gz from '@/libs/map/guizhou'
import sx from '@/libs/map/shanxi'
import all from '@/libs/map/all'
import { converUnit } from '@/libs/utils'
import resize from '@/mixins/resize'
import { region_map, industry_map } from '@/api/custom'
export default {
  data() {
    const vm = this
    return {
      orgSelect: null,
      orgs: [],
      amountRange: [0, 500],
      timeRange: [0, 30],
      loading: false,
      tableLoading: false,
      activeType: 'all',
      type: 1,
      typeSelect: '',
      typeOptions: [{ label: '全部产业', value: '' }],
      classifySelect: 1,
      classifyOptions: [
        { label: '国标三级', value: 1 },
        { label: '国标四级', value: 2 }
      ],
      ratioSelect: 1,
      ratioOptions: [{ label: '占行内全部投放', value: '' }],
      chartOption: {
        color: ['#3FAAFF', '#B4CEDC', '#62DB9B', '#58CCF4', '#7D7CFF', '#FBB447', '#EC8B66'],
        tooltip: {
          formatter: function (params) {
            let unit = vm.ratioSelect === 1 || vm.ratioSelect === 3 ? '个' : params.data.currency
            return `${params.name}：${params.value}${unit}`
          }
        },
        series: [
          {
            type: 'treemap',
            roam: false,
            nodeClick: false,
            width: '100%',
            height: '100%',
            breadcrumb: {
              show: false
            },
            data: []
          }
        ]
      },
      mapOption: {
        tooltip: {
          formatter: function (params) {
            let unit = vm.ratioSelect === 1 || vm.ratioSelect === 3 ? '个' : params.data.currency
            return `${params.name}：${params.value || 0}${unit}`
          }
        },
        visualMap: {
          orient: 'horizontal',
          right: '0',
          bottom: '10',
          itemWidth: '12',
          min: 1,
          max: 500000,
          inRange: {
            color: ['#64EEFF', '#5E78FF', '#1121FF']
          },
          text: ['高', '非正常贷款企业数量：低'],
          calculable: true
        },
        series: [
          {
            type: 'map',
            roam: false,
            left: 'center',
            top: '10px',
            emphasis: {
              label: {
                show: true
              }
            },
            textFixed: {
              Alaska: [20, -20]
            }
          }
        ]
      },
      tableData: [],
      badListData: [],
      total: null,
      mapData: null
    }
  },
  mixins: [resize],
  watch: {
    activeType: {
      immediate: true,
      handler() {
        this.handleType(this.type)
      }
    },
    ratioSelect() {
      if (this.type === 1) {
        this.drawChart()
      } else {
        this.drawMap()
      }
    }
  },
  methods: {
    converUnit,
    handleType(type) {
      this.type = type
      this.loading = true
      setTimeout(() => {
        this.$nextTick(() => {
          if (this.type === 1) {
            this.getChartData()
          } else {
            this.getMapData()
          }
        })
      }, 1000)
    },
    getChartData() {
      let params = {
        activeType: this.activeType,
        typeSelect: this.typeSelect,
        classifySelect: this.classifySelect
      }
      industry_map(params)
        .then((res) => {
          this.loading = false
          this.chartData = res.result
          this.drawChart()
        })
        .catch((e) => {
          this.loading = false
          this.chartData = []
          this.drawChart()
        })
    },
    drawChart() {
      if (!this.myChart) {
        this.myChart = echarts.init(document.getElementById('chart'))
        this.myChart.on('click', (params) => {
          this.setChartTable(params.data.list)
        })
      }
      let data = []
      switch (this.ratioSelect) {
        case 1:
          data = this.chartData.map((item) => {
            return {
              name: item.industryName,
              value: item.loanComNum,
              list: item.loanCom
            }
          })
          break
        case 2:
          data = this.chartData.map((item) => {
            return {
              name: item.industryName,
              value: item.loanBalance.amount,
              currency: item.loanBalance.currency,
              list: item.loanCom
            }
          })
          break
        case 3:
          data = this.chartData.map((item) => {
            return {
              name: item.industryName,
              value: item.overdueComNum,
              list: item.loanCom
            }
          })
          break
        case 4:
          data = this.chartData.map((item) => {
            return {
              name: item.industryName,
              value: item.overdueAmount.amount,
              currency: item.loanBalance.currency,
              list: item.loanCom
            }
          })
          break
      }
      this.chartOption.series[0].data = data
      this.myChart.setOption(this.chartOption, true)
      this.myChart.resize()
      let list = []
      this.chartData.forEach((item) => {
        list = list.concat(item.loanCom)
      })
      this.setChartTable(list)
    },
    setChartTable(item = []) {
      this.tableData = item
    },
    getMapData() {
      let params = {
        activeType: this.activeType,
        typeSelect: this.typeSelect,
        classifySelect: this.classifySelect
      }
      region_map(params)
        .then((res) => {
          this.loading = false
          this.mapData = res
          this.drawMap()
        })
        .catch((e) => {
          this.loading = false
          this.mapData = {
            regionLoan: [],
            regionBadloan: [],
            badList: [],
            loanCom: []
          }
          this.drawMap()
        })
    },
    drawMap() {
      switch (this.activeType) {
        case 'cq':
          echarts.registerMap('map', cq)
          break
        case 'sc':
          echarts.registerMap('map', sc)
          break
        case 'gz':
          echarts.registerMap('map', gz)
          break
        case 'sx':
          echarts.registerMap('map', sx)
          break
        default:
          echarts.registerMap('map', all)
          break
      }
      this.mapOption.series[0].map = 'map'
      if (!this.mapChart) {
        this.mapChart = echarts.init(document.getElementById('map'))
        this.mapChart.on('click', (data) => {
          switch (data.name) {
            case '重庆市':
              this.activeType = 'cq'
              break
            case '四川省':
              this.activeType = 'sc'
              break
            case '贵州省':
              this.activeType = 'gz'
              break
            case '陕西省':
              this.activeType = 'sx'
              break
            default:
              this.getMapTableData()
              break
          }
        })
      }
      let data = this.getAreaList()
      let max = 0
      data.forEach((item) => {
        max = Math.max(max, item.value)
      })
      this.mapOption.visualMap.max = max
      this.mapOption.series[0].data = data
      this.mapChart.setOption(this.mapOption, true)
      this.mapChart.resize()
      this.setMapTable()
    },
    getAreaList() {
      let data = []
      switch (this.ratioSelect) {
        case 1:
          data = this.mapData.regionLoan.map((item) => {
            return {
              name: item.name,
              value: item.comCount
            }
          })
          break
        case 2:
          data = this.mapData.regionLoan.map((item) => {
            return {
              name: item.name,
              value: item.amountCount.amount,
              currency: item.amountCount.currency
            }
          })
          break
        case 3:
          data = this.mapData.regionBadloan.map((item) => {
            return {
              name: item.name,
              value: item.comCount
            }
          })
          break
        case 4:
          data = this.mapData.regionBadloan.map((item) => {
            return {
              name: item.name,
              value: item.amountCount.amount,
              currency: item.amountCount.currency
            }
          })
          break
      }
      return data
    },
    getMapTableData() {
      this.loading = true
      let params = {
        activeType: this.activeType,
        typeSelect: this.typeSelect,
        classifySelect: this.classifySelect
      }
      region_map(params)
        .then((res) => {
          this.loading = false
          this.mapData = res
        })
        .catch((e) => {
          this.loading = false
          this.mapData = {
            regionLoan: [],
            regionBadloan: [],
            badList: [],
            loanCom: []
          }
        })
    },
    setMapTable() {
      this.tableData = this.mapData.loanCom
      this.badListData = this.mapData.badList
      this.total = 0
      this.mapData.badList.forEach((item) => {
        this.total += item.comNum
      })
    },
    getBarWidth(item) {
      if (!this.total) return { width: 0 }
      let ratio = (item.comNum / this.total) * 100
      return { width: `${ratio}%` }
    },
    onFilterCheck() {
      this.$refs.popover.doClose()
      this.getMapTableData()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/component';
.distribution-line {
  width: 100%;
  margin-bottom: 16px;
}
.line-sub {
  display: flex;
  justify-content: space-between;

  .radio {
    display: inline-block;
    width: auto;
  }

  .text {
    font-size: 12px;
    font-weight: 400;
    color: #94979b;
  }
  .select {
    width: 150px;
  }
}
.information-main {
  width: 100%;
  height: 360px;
  box-sizing: border-box;
  padding: 0 10px 20px 10px;

  .chart-main {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    height: 100%;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .map-main {
    display: inline-block;
    vertical-align: top;
    width: 35%;
    height: 100%;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .legend-main {
    display: inline-block;
    vertical-align: top;
    width: 25%;
    height: 100%;
    padding: 20px 10px 10px 10px;
    box-sizing: border-box;

    .title {
      font-size: 16px;
      font-weight: 400;
      color: #000a12;
      line-height: 22px;
      margin-top: 0;

      .info-num {
        display: inline-block;
        padding: 0 6px;
        height: 22px;
        background: #ec6666;
        border-radius: 2px;
        color: white;
      }
    }

    p {
      font-size: 14px;
      margin-bottom: 24px;

      .name {
        display: inline-block;
        vertical-align: top;
        line-height: 20px;
        width: 60px;
      }

      .progress {
        display: inline-block;
        vertical-align: top;
        width: calc(100% - 120px);
        height: 20px;
        background: #e9eaf0;
        line-height: 20px;
        white-space: nowrap;

        .bar {
          display: inline-block;
          vertical-align: top;
          width: auto;
          height: 20px;
        }
      }
    }
  }
  .table-main {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .table-main_min {
    display: inline-block;
    width: 40%;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
  }
}
.select {
  width: 114px;
  margin-left: 12px;
}
</style>
