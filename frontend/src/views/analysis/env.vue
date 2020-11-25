<template>
  <div class="main">
    <h1 class="main-title">
      行业环境
      <span class="sign">汽车行业</span>
    </h1>
    <div class="main-body">
      <div class="left" :style="{ width: showSiderbar ? '262px' : '44px' }">
        <div class="siderbar" v-if="showSiderbar">
          <h1>
            &nbsp;
            <i class="icon el-icon-s-fold fr" @click="showSiderbar = false"></i>
          </h1>
          <el-input class="search-main radius_sm" placeholder="请输入指标关键词" v-model="keyword" clearable></el-input>
          <el-menu
            text-color="#94979B"
            active-text-color="#25211F"
            :default-active="activeMenu"
            class="menu"
            @select="getHead"
            :default-openeds="['up', 'mid', 'down']"
          >
            <el-submenu v-for="(item, index) in menu" :index="item.code" :key="`${item.code}`">
              <template slot="title">
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item
                v-for="(child, index) in item.children"
                :index="child.code"
                :key="`${index}_child`"
                v-show="child.show"
              >
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <i v-else class="icon el-icon-s-unfold" @click="showSiderbar = true"></i>
      </div>
      <div class="right" :style="{ width: showSiderbar ? 'calc(100% - 262px)' : 'calc(100% - 44px)' }">
        <div v-loading="headLoding" class="right-head">
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
        <div class="right-main">
          <h1 class="right-main-title">
            <span>
              {{ activeHeadName }}
              <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
            </span>
            <span class="icon-box">
              <i class="icon-img icon-line" :class="{ active: chartType === 'line' }" @click="chartType = 'line'"></i>
              <i class="icon-img icon-bar" :class="{ active: chartType === 'bar' }" @click="chartType = 'bar'"></i>
              <time-select v-model="dateTime"></time-select>
            </span>
          </h1>
          <p class="right-main-tip">
            来源：国家统计局&nbsp;&nbsp;&nbsp;&nbsp;频率：月&nbsp;&nbsp;&nbsp;&nbsp;单位：万辆
          </p>
          <div class="right-main-chart">
            <div v-loading="loading" id="lineChart"></div>
            <no-data-show v-loading="loading" class="chart-nodata" :show="noData"></no-data-show>
          </div>
          <el-table v-loading="loading" class="right-main-table" :data="tableData" style="width: 100%">
            <el-table-column
              v-for="item in tableHead"
              :key="item"
              :label="`${item}年`"
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
import resize from '@/mixins/resize'
import { menuData, headData, chartData, tableData } from '@/mockData/env'
export default {
  data() {
    const vm = this
    return {
      noData: false,
      showSiderbar: true,
      keyword: null,
      menuLoding: false,
      activeMenu: null,
      menu: [],
      headLoding: false,
      activeHead: 1,
      heads: [],
      loading: false,
      chartType: 'line',
      dateTime: [],
      tableHead: [],
      tableData: [],
      chartOption: {
        color: '#5B8FF9',
        tooltip: {
          trigger: 'axis',
          formatter: (data) => {
            return `${data[0].name}<br/>${vm.activeHeadName}：${data[0].value}万辆`
          }
        },
        xAxis: {
          data: [],
          axisLine: {
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          }
        },
        yAxis: {
          gridIndex: 0,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        grid: {
          left: '38px',
          right: '20px',
          bottom: '80px',
          top: '20px'
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
              global: false // 缺省为 false
            }
          }
        }
      }
    }
  },
  mixins: [resize],
  computed: {
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
    activeMenu() {
      this.getHead()
    },
    activeHead() {
      this.initChart()
    },
    chartType() {
      this.initChart()
    },
    dateTime() {
      this.initChart()
    }
  },
  methods: {
    initMenu() {
      this.menuLoding = false
      setTimeout(() => {
        this.menuLoding = false
        this.menu = menuData
        this.activeMenu = this.menu[0].children[0].code
      }, 100)
    },
    filterMenu(data) {
      this.menu.forEach((item) => {
        item.children.forEach((item_c) => {
          if (data) {
            item_c.show = item_c.name.indexOf(data) >= 0
          } else {
            item_c.show = true
          }
        })
      })
    },
    getHead() {
      this.headLoding = true
      setTimeout(() => {
        this.headLoding = false
        this.heads = headData
        this.activeHead = this.heads[0].value
      }, 500)
    },
    initChart() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.noData = chartData.length === 0
        this.myChart = echarts.init(document.getElementById('lineChart'))
        this.chartOption.xAxis.data = chartData.map((item) => item[0])
        this.chartOption.series.type = this.chartType
        this.chartOption.series.data = chartData.map((item) => item[1])
        this.myChart.setOption(this.chartOption, true)
        this.tableHead = tableData.map((item) => item.year)
        let data = {}
        tableData.forEach((item) => {
          data[item.year] = item.value
        })
        this.tableData = [data]
      }, 1000)
    }
  },
  mounted() {
    this.initMenu()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.main-body {
  .left {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    padding-right: 20px;
    box-sizing: border-box;
    .siderbar {
      width: 100%;
      height: 100%;
      background-color: white;
      padding: 20px;
      box-sizing: border-box;

      h1 {
        font-size: 16px;
        font-weight: 400;
        color: #000a12;
        line-height: 22px;
        padding: 0;
        margin: 0 0 12px 0;
      }

      .search-main {
        border-radius: 2px;
        margin: 0 0 12px 0;
      }

      .menu {
        width: 100%;
        height: calc(100% - 64px);
        border: none;
      }
    }

    .icon {
      border: 1px solid #d9d9d9;
      color: #595959;
      cursor: pointer;
      line-height: 22px;
      padding: 0 2px;
      background-color: white;
    }

    .el-icon-s-unfold {
      margin-top: 20px;
    }
  }

  .right {
    display: inline-block;
    vertical-align: top;
    height: 100%;

    .right-head {
      width: 100%;
      height: 92px;
      padding: 16px 20px;
      background-color: white;
      box-sizing: border-box;
      margin-bottom: 20px;
      border-radius: 4px;

      span {
        display: inline-block;
        vertical-align: top;
        width: 240px;
        height: 22px;
        line-height: 22px;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 0 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 30px;
        margin-bottom: 16px;
        font-size: 12px;
        cursor: pointer;

        &.active {
          background: #3a84ff;
          color: white;
        }
      }
    }

    .right-main {
      width: 100%;
      height: calc(100% - 112px);
      background-color: white;
      border-radius: 4px;
      padding: 20px;
      box-sizing: border-box;

      .right-main-title {
        margin: 0 0 8px 0;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
        color: #000a12;
        line-height: 22px;
        display: flex;
        justify-content: space-between;

        .icon-img {
          width: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 16px;
          cursor: pointer;

          &.icon-line {
            background-position-y: 5px;
            background-image: url(~@/assets/imgs/icons/line.svg);

            &.active {
              background-image: url(~@/assets/imgs/icons/line-active.svg);
            }
          }

          &.icon-bar {
            background-position-y: 4px;
            background-image: url(~@/assets/imgs/icons/bar.svg);

            &.active {
              background-image: url(~@/assets/imgs/icons/bar-active.svg);
            }
          }
        }
      }

      .right-main-tip {
        font-size: 12px;
        font-weight: 400;
        color: #94979b;
        line-height: 18px;
        margin: 0 0 8px 0;
      }

      .right-main-chart {
        width: 100%;
        height: calc(100% - 158px);
        position: relative;

        #lineChart {
          width: 100%;
          height: 100%;
        }
      }

      .right-main-table {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
<style lang="scss">
.left {
  .siderbar {
    .menu {
      .el-submenu__title {
        height: 32px;
        line-height: 32px;
      }
    }
  }
}
</style>