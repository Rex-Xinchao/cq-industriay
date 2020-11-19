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
            一级层级标题
            <i class="icon el-icon-s-fold fr" @click="showSiderbar = false"></i>
          </h1>
          <el-input class="search-main radius_sm" placeholder="请输入关键词" v-model="keyword" clearable></el-input>
          <el-menu
            text-color="#94979B"
            active-text-color="#25211F"
            :default-active="activeName"
            class="menu"
            @select="getData"
          >
            <el-submenu v-for="(item, index) in menu" :index="item.code" :key="`${index}_father`">
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
        <div v-loading="headLoding" class="right-main">
          <h1 class="right-main-title">
            <span>
              {{ activeHeadName }}
              <i class="el-icon-warning icon-tip" title="这是一个提示"></i>
            </span>
            <span class="icon-box">
              <i class="icon"></i>
              <i class="icon"></i>
            </span>
            <time-select v-model="dateTime"></time-select>
          </h1>
          <p class="right-main-tip">
            来源：国家统计局&nbsp;&nbsp;&nbsp;&nbsp;频率：月&nbsp;&nbsp;&nbsp;&nbsp;单位：万辆
          </p>
          <div v-loading="loading" class="right-main-chart" id="lineChart"></div>
          <el-table v-loading="loading" class="right-main-table" :data="tableData" style="width: 100%">
            <el-table-column
              v-for="item in tableHead"
              :key="item"
              :label="`${item}年`"
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
const ChartData = [
  ['2000-06-05', 116],
  ['2000-06-06', 129],
  ['2000-06-07', 135],
  ['2000-06-08', 86],
  ['2000-06-09', 73],
  ['2000-06-10', 85],
  ['2000-06-11', 73],
  ['2000-06-12', 68],
  ['2000-06-13', 92],
  ['2000-06-14', 130],
  ['2000-06-15', 245],
  ['2000-06-16', 139],
  ['2000-06-17', 115],
  ['2000-06-18', 111],
  ['2000-06-19', 309],
  ['2000-06-20', 206],
  ['2000-06-21', 137],
  ['2000-06-22', 128],
  ['2000-06-23', 85],
  ['2000-06-24', 94],
  ['2000-06-25', 71],
  ['2000-06-26', 106],
  ['2000-06-27', 84],
  ['2000-06-28', 93],
  ['2000-06-29', 85],
  ['2000-06-30', 73],
  ['2000-07-01', 83],
  ['2000-07-02', 125],
  ['2000-07-03', 107],
  ['2000-07-04', 82],
  ['2000-07-05', 44],
  ['2000-07-06', 72],
  ['2000-07-07', 106],
  ['2000-07-08', 107],
  ['2000-07-09', 66],
  ['2000-07-10', 91],
  ['2000-07-11', 92],
  ['2000-07-12', 113],
  ['2000-07-13', 107],
  ['2000-07-14', 131],
  ['2000-07-15', 111],
  ['2000-07-16', 64],
  ['2000-07-17', 69],
  ['2000-07-18', 88],
  ['2000-07-19', 77],
  ['2000-07-20', 83],
  ['2000-07-21', 111],
  ['2000-07-22', 57],
  ['2000-07-23', 55],
  ['2000-07-24', 60],
  ['2000-07-25', 44],
  ['2000-07-26', 127],
  ['2000-07-27', 114],
  ['2000-07-28', 86],
  ['2000-07-29', 73],
  ['2000-07-30', 52],
  ['2000-07-31', 69],
  ['2000-08-01', 86],
  ['2000-08-02', 118],
  ['2000-08-03', 56],
  ['2000-08-04', 91],
  ['2000-08-05', 121],
  ['2000-08-06', 127],
  ['2000-08-07', 78],
  ['2000-08-08', 79],
  ['2000-08-09', 46],
  ['2000-08-10', 108],
  ['2000-08-11', 80],
  ['2000-08-12', 79],
  ['2000-08-13', 69],
  ['2000-08-14', 80],
  ['2000-08-15', 105],
  ['2000-08-16', 119],
  ['2000-08-17', 105],
  ['2000-08-18', 55],
  ['2000-08-19', 74],
  ['2000-08-20', 41],
  ['2000-08-21', 62],
  ['2000-08-22', 104],
  ['2000-08-23', 118],
  ['2000-08-24', 121],
  ['2000-08-25', 126],
  ['2000-08-26', 99],
  ['2000-08-27', 92],
  ['2000-08-28', 75],
  ['2000-08-29', 91],
  ['2000-08-30', 94],
  ['2000-08-31', 69],
  ['2000-09-01', 93],
  ['2000-09-02', 124],
  ['2000-09-03', 120],
  ['2000-09-04', 93],
  ['2000-09-05', 26],
  ['2000-09-06', 32],
  ['2000-09-07', 70],
  ['2000-09-08', 89],
  ['2000-09-10', 117],
  ['2000-09-11', 144],
  ['2000-09-12', 111],
  ['2000-09-13', 120],
  ['2000-09-14', 97],
  ['2000-09-15', 108],
  ['2000-09-17', 74],
  ['2000-09-18', 105],
  ['2000-09-19', 127],
  ['2000-09-20', 143],
  ['2000-09-21', 62],
  ['2000-09-22', 80],
  ['2000-09-23', 136],
  ['2000-09-24', 29],
  ['2000-09-25', 91],
  ['2000-09-26', 93],
  ['2000-09-27', 114],
  ['2000-09-28', 45],
  ['2000-09-29', 102],
  ['2000-09-30', 111],
  ['2000-10-01', 93],
  ['2000-10-02', 117],
  ['2000-10-03', 78],
  ['2000-10-04', 76],
  ['2000-10-05', 100],
  ['2000-10-06', 75],
  ['2000-10-07', 169],
  ['2000-10-08', 59],
  ['2000-10-09', 89],
  ['2000-10-10', 91],
  ['2000-10-11', 75],
  ['2000-10-12', 28],
  ['2000-10-13', 47],
  ['2000-10-14', 92],
  ['2000-10-16', 72],
  ['2000-10-17', 149],
  ['2000-10-18', 86],
  ['2000-10-19', 88],
  ['2000-10-20', 104],
  ['2000-10-21', 91],
  ['2000-10-22', 88],
  ['2000-10-23', 55],
  ['2000-10-24', 63],
  ['2000-10-25', 41],
  ['2000-10-26', 85],
  ['2000-10-27', 99],
  ['2000-10-28', 121],
  ['2000-10-29', 96],
  ['2000-10-30', 90],
  ['2000-11-01', 80],
  ['2000-11-02', 116],
  ['2000-11-03', 207],
  ['2000-11-04', 306],
  ['2000-11-05', 283],
  ['2000-11-06', 200],
  ['2000-11-07', 93],
  ['2000-11-08', 49],
  ['2000-11-09', 78],
  ['2000-11-10', 40],
  ['2000-11-11', 74],
  ['2000-11-12', 67],
  ['2000-11-13', 118],
  ['2000-11-14', 196],
  ['2000-11-15', 101],
  ['2000-11-16', 59],
  ['2000-11-17', 83],
  ['2000-11-18', 83],
  ['2000-11-19', 124],
  ['2000-11-20', 57],
  ['2000-11-21', 78],
  ['2000-11-22', 113],
  ['2000-11-23', 172],
  ['2000-11-24', 129],
  ['2000-11-25', 103],
  ['2000-11-26', 75],
  ['2000-11-27', 125],
  ['2000-11-28', 121],
  ['2000-11-29', 204],
  ['2000-11-30', 141],
  ['2000-12-01', 106],
  ['2000-12-02', 146],
  ['2000-12-03', 95],
  ['2000-12-04', 149],
  ['2000-12-05', 71],
  ['2000-12-07', 157],
  ['2000-12-08', 141],
  ['2000-12-09', 197],
  ['2000-12-10', 43],
  ['2000-12-11', 81],
  ['2000-12-12', 109],
  ['2000-12-13', 118],
  ['2000-12-15', 115],
  ['2000-12-16', 92],
  ['2000-12-17', 123],
  ['2000-12-18', 147],
  ['2000-12-19', 59],
  ['2000-12-20', 103],
  ['2000-12-21', 146],
  ['2000-12-22', 137],
  ['2000-12-23', 74],
  ['2000-12-24', 64],
  ['2000-12-25', 67],
  ['2000-12-26', 107],
  ['2000-12-27', 101],
  ['2000-12-28', 79],
  ['2000-12-29', 137],
  ['2000-12-30', 165],
  ['2000-12-31', 81],
  ['2001-01-01', 100],
  ['2001-01-02', 126],
  ['2001-01-03', 56],
  ['2001-01-05', 108],
  ['2001-01-06', 88],
  ['2001-01-07', 78],
  ['2001-01-08', 105],
  ['2001-01-09', 77],
  ['2001-01-10', 105],
  ['2001-01-11', 93],
  ['2001-01-12', 107],
  ['2001-01-13', 128],
  ['2001-01-14', 53],
  ['2001-01-15', 81],
  ['2001-01-16', 128],
  ['2001-01-17', 179],
  ['2001-01-18', 225],
  ['2001-01-19', 116],
  ['2001-01-20', 153],
  ['2001-01-21', 161],
  ['2001-01-22', 149],
  ['2001-01-23', 115],
  ['2001-01-24', 136],
  ['2001-01-25', 101],
  ['2001-01-26', 109],
  ['2001-01-27', 108],
  ['2001-01-28', 86],
  ['2001-01-29', 101],
  ['2001-01-30', 109],
  ['2001-01-31', 139],
  ['2001-02-01', 110],
  ['2001-02-02', 113],
  ['2001-02-03', 130],
  ['2001-02-04', 62],
  ['2001-02-05', 88],
  ['2001-02-06', 105],
  ['2001-02-07', 87],
  ['2001-02-08', 140],
  ['2001-02-09', 116],
  ['2001-02-10', 100],
  ['2001-02-11', 83],
  ['2001-02-12', 102],
  ['2001-02-13', 106],
  ['2001-02-14', 157],
  ['2001-02-15', 131],
  ['2001-02-16', 77],
  ['2001-02-17', 101],
  ['2001-02-18', 148],
  ['2001-02-19', 227],
  ['2001-02-20', 105],
  ['2001-02-21', 155],
  ['2001-02-22', 293],
  ['2001-02-23', 99],
  ['2001-02-24', 57],
  ['2001-02-25', 97],
  ['2001-02-26', 104],
  ['2001-02-27', 117],
  ['2001-02-28', 125],
  ['2001-03-01', 216],
  ['2001-03-02', 149],
  ['2001-03-03', 256],
  ['2001-03-04', 172],
  ['2001-03-05', 113],
  ['2001-03-06', 338],
  ['2001-03-07', 57],
  ['2001-03-08', 48],
  ['2001-03-10', 111],
  ['2001-03-11', 87],
  ['2001-03-12', 175],
  ['2001-03-13', 186],
  ['2001-03-14', 201],
  ['2001-03-15', 76],
  ['2001-03-16', 131],
  ['2001-03-17', 127],
  ['2001-03-18', 128],
  ['2001-03-19', 152],
  ['2001-03-20', 144],
  ['2001-03-21', 162],
  ['2001-03-22', 500],
  ['2001-03-24', 358],
  ['2015-02-16', 153],
  ['2015-02-18', 73],
  ['2015-02-19', 267],
  ['2015-02-20', 183],
  ['2015-02-21', 394],
  ['2015-02-22', 158],
  ['2015-02-23', 86],
  ['2015-02-24', 207]
]
export default {
  data() {
    return {
      showSiderbar: true,
      headLoding: false,
      loading: false,
      keyword: null,
      activeName: '1',
      activeHead: 1,
      menu: [
        {
          name: '上游',
          code: 'up',
          children: [
            {
              name: '测试',
              code: 'test',
              show: true
            }
          ]
        },
        {
          name: '中游',
          code: 'mid',
          children: [
            {
              name: '测试1',
              code: 'test1',
              show: true
            }
          ]
        },
        {
          name: '下游',
          code: 'down',
          children: [
            {
              name: '测试2',
              code: 'test2',
              show: true
            }
          ]
        }
      ],
      heads: [],
      dateTime: [],
      tableHead: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      tableData: [],
      chartOption: {
        color: '#5B8FF9',
        tooltip: {
          trigger: 'axis'
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
            startValue: '2014-06-01'
          },
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
  computed: {
    activeHeadName() {
      if (!this.activeHead) return null
      let obj = this.heads.find((item) => item.value === this.activeHead)
      if (!obj) return null
      return obj.name
    }
  },
  watch: {
    activeHead() {
      this.initChart()
    },
    dateTime() {
      this.initChart()
    },
    keyword(data) {
      this.menu.forEach((item) => {
        item.children.forEach((item_c) => {
          if (data) {
            item_c.show = item_c.name.indexOf(data) >= 0
          } else {
            item_c.show = true
          }
        })
      })
    }
  },
  methods: {
    getData() {
      this.getHead()
    },
    getHead() {
      this.headLoding = true
      setTimeout(() => {
        this.headLoding = false
        this.heads = [
          { name: '汽车产量_年度数据', value: 1 },
          { name: '汽车产量_当期值_月度数总数', value: 2 },
          { name: '汽车产量_累计增长_月度数总数', value: 3 },
          { name: '汽车产量_累计值_月度数总数', value: 4 },
          { name: '汽车产量_累计增长_月度数总数', value: 5 },
          { name: '汽车产销率_比上年同期', value: 6 },
          { name: '汽车整车制造工业生产者', value: 7 }
        ]
        this.activeHead = this.heads[0].value
      }, 500)
    },
    initChart() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.myChart = echarts.init(document.getElementById('lineChart'))
        this.chartOption.xAxis.data = ChartData.map((item) => item[0])
        this.chartOption.series.data = ChartData.map((item) => item[1])
        this.myChart.setOption(this.chartOption, true)
      }, 1000)
    }
  },
  mounted() {
    this.getHead()
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
        width: 140px;
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

        .icon {
          display: inline-block;
          vertical-align: top;
          width: 16px;
          height: 28px;
          background-color: red;
          margin-right: 16px;
          line-height: 22px;
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
      }

      .right-main-table {
        width: 100%;
        height: 96px;
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