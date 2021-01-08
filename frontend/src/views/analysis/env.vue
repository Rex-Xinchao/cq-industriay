<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        行业环境
        <span class="sign">{{ industry }}</span>
      </h1>
    </div>
    <div class="main-body">
      <div class="left" :class="{ left_lg: showSiderbar }">
        <div class="siderbar" v-if="showSiderbar" v-loading="loading_siderbar">
          <h1>
            &nbsp;
            <i class="icon el-icon-s-fold fr" @click="showSiderbar = false"></i>
          </h1>
          <el-input class="search-main radius_sm" placeholder="请输入指标关键词" v-model="keyword" clearable></el-input>
          <el-menu
            text-color="#94979B"
            active-text-color="#25211F"
            :default-active="activeMenu"
            class="env-com_menu"
            @select="getHead"
            :default-openeds="['up', 'mid', 'down']"
          >
            <el-submenu v-for="(item, index) in menus" :index="item.code" :key="`${item.code}`">
              <template slot="title">
                <span class="menu-item" :title="item.name">{{ item.name }}</span>
              </template>
              <el-menu-item
                v-for="(child, index) in item.children"
                :index="child.code"
                :key="`${index}_child`"
                v-show="child.show"
                style="overflow: hidden; text-overflow: ellipsis"
                :title="child.name"
              >
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <i v-else class="icon el-icon-s-unfold" @click="showSiderbar = true"></i>
      </div>
      <div class="right" :class="{ right_lg: !showSiderbar }">
        <div class="right-head" v-loading="loading">
          <span
            class="select-item"
            v-for="item in heads"
            :key="item.value"
            :title="item.name"
            :class="{ active: activeHead === item.value }"
            @click="activeHead = item.value"
          >
            {{ item.name }}
          </span>
        </div>
        <div class="right-main" v-loading="loading">
          <h1 class="right-main-title">
            <span>
              {{ activeHeadName }}
              <i class="icon-tip" title="这是一个提示"></i>
            </span>
            <span class="icon-box">
              <i
                class="icon-img icon-line"
                :class="{ active: chartParams.chartType === 'line' }"
                @click="chartParams.chartType = 'line'"
              ></i>
              <i
                class="icon-img icon-bar"
                :class="{ active: chartParams.chartType === 'bar' }"
                @click="chartParams.chartType = 'bar'"
              ></i>
              <time-select v-model="chartParams.dateTime" :options="options" startValue="1Y"></time-select>
            </span>
          </h1>
          <p class="right-main-tip">
            来源：国家统计局&nbsp;&nbsp;&nbsp;&nbsp;频率：{{ rate }}&nbsp;&nbsp;&nbsp;&nbsp;单位：{{ unit }}
          </p>
          <div class="right-main-chart">
            <div id="toggleChart"></div>
            <no-data-show class="chart-nodata" :show="noData"></no-data-show>
          </div>
          <el-table class="right-main-table" :data="tableData" style="width: 100%">
            <el-table-column
              v-for="item in tableHead"
              :key="item"
              :label="item"
              :prop="item"
              align="center"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts')
import { mapGetters } from 'vuex'
import { getTimeLine, converUnit } from '@/libs/utils'
import { envMenu, envChart } from '@/api/analysis'
import resize from '@/mixins/resize'
import bar from '@/mixins/bar'
import line from '@/mixins/line'
export default {
  data() {
    return {
      showSiderbar: true,
      keyword: null,
      loading_siderbar: false,
      loading: false,
      activeMenu: null,
      menus: [],
      menuTypes: {
        up: '上游',
        down: '下游',
        mid: '中游'
      },
      activeHead: 1,
      heads: [],
      envData: {},
      noData: false,
      rate: '--',
      unit: '--',
      tableHead: [],
      tableData: [],
      color: ['#5B8FF9'],
      chartParams: {
        chartType: 'line',
        dateTime: []
      },
      tooltip: {
        formatter: (data) => {
          let value = data[0].value ? converUnit(data[0].value) : '--'
          return `${data[0].name}<br/>${this.activeHeadName}：${value}${this.unit}`
        }
      },
      dataZoom: [{ show: true }, { type: 'inside' }],
      grid: {
        bottom: '80px',
        top: '20px',
        left: '50px',
        right: '50px'
      },
      series: {
        type: 'line',
        data: [],
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#5B8FF9'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ],
            global: false
          }
        }
      },
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
      ]
    }
  },
  mixins: [resize, bar, line],
  computed: {
    ...mapGetters(['industry', 'industryCode']),
    activeHeadName() {
      if (!this.activeHead) return null
      let obj = this.heads.find((item) => item.value === this.activeHead)
      if (!obj) return null
      return obj.name
    }
  },
  watch: {
    showSiderbar() {
      this.$nextTick(() => {
        this.reseize()
      })
    },
    keyword(data) {
      this.filterMenu(data)
    },
    industryCode: {
      immediate: true,
      handler() {
        this.initMenu()
      }
    },
    chartParams: {
      deep: true,
      handler() {
        this.drawChart()
      }
    },
    activeHeadName() {
      this.drawChart()
      this.getTableData()
    }
  },
  methods: {
    initMenu() {
      this.loading_siderbar = false
      envMenu({ code: this.industryCode })
        .then((res) => {
          this.loading_siderbar = false
          this.menus = res.result.map((item) => {
            item.name = this.menuTypes[item.code] || this.industry
            item.children.forEach((child) => (child.show = true))
            return item
          })
          this.activeMenu = this.menus[0].children[0].code
          this.getHead(this.activeMenu)
        })
        .catch((err) => {
          this.loading_siderbar = false
        })
    },
    filterMenu(data) {
      this.menus.forEach((item) => {
        item.children.forEach((item_c) => {
          if (data) {
            item_c.show = item_c.name.indexOf(data) >= 0
          } else {
            item_c.show = true
          }
        })
      })
    },
    getHead(data) {
      // todo 静态数据特殊处理
      if (!['FA0040010709', 'AC003005', 'EC001001130201'].includes(data)) return
      this.loading = true
      envChart({ code: data })
        .then((res) => {
          this.loading = false
          this.heads = res.names || []
          this.activeHead = this.heads[0].value
          this.envData = res
          this.drawChart()
          this.getTableData()
        })
        .catch((err) => {
          this.loading = false
          this.heads = []
          this.envData = {}
        })
    },
    setChartOption() {
      this.chartId_line = 'toggleChart'
      this.chartId_bar = 'toggleChart'
      this.series.type = this.chartParams.chartType
      const chartOption = this.chartParams.chartType === 'line' ? this.chartOption_line : this.chartOption_bar
      chartOption.color = this.color
      chartOption.series = this.series
      chartOption.tooltip = Object.assign({}, chartOption.tooltip, this.tooltip)
      chartOption.grid = Object.assign({}, chartOption.grid, this.grid)
      let map = {}
      if (!this.envData.names) return {}
      const activeItem = this.envData.names.find((item) => item.name === this.activeHeadName)
      let key = activeItem.value
      this.rate = activeItem.rate
      this.unit = activeItem.unit
      this.noData = this.envData.chart.length === 0
      this.envData.chart.forEach((item) => {
        map[item.rpt] = item[key] || 0
      })
      // let timeLine = getTimeLine(this.envData.chart[0].rpt, this.envData.chart[this.envData.chart.length - 1].rpt)
      chartOption.xAxis.data = Object.keys(map)
      chartOption.series.data = Object.values(map)
      chartOption.yAxis.axisLabel.formatter = (d) => converUnit(d, 'zh', 0)
      chartOption.yAxis.min = null
      chartOption.dataZoom = this.dataZoom
      return chartOption
    },
    getTableData() {
      if (!this.envData.names) return {}
      let tableData = this.envData.chart || []
      let key = this.envData.names.find((item) => item.name === this.activeHeadName).value
      this.tableHead = tableData.map((item) => item.rpt.substring(0, 7))
      let data = {}
      tableData.forEach((item) => {
        data[item.rpt.substring(0, 7)] = item[key] ? converUnit(item[key]) : '--'
      })
      this.tableData = [data]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/env';
.main {
  height: calc(100% - 48px);
}
</style>