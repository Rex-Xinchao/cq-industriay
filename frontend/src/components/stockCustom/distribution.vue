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
      <span class="bar-item" :class="{ active: type === 1 }" @click="handleType(1)">投放产业</span>
      <span class="bar-item" :class="{ active: type === 2 }" @click="handleType(2)">逾期贷款</span>

      <el-select v-if="type === 1" class="select" v-model="typeSelect">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select v-if="type === 1" class="select" v-model="classifySelect">
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
        <el-radio-group v-model="distributionType" @change="handledDistributionType">
          <el-radio :label="1">客户分布</el-radio>
          <el-radio :label="2">规模分布</el-radio>
        </el-radio-group>
      </div>
      <span v-if="distributionType === 1" class="text">投放规模：210亿</span>
      <el-select v-if="distributionType === 1" class="select" v-model="ratioSelect">
        <el-option v-for="item in ratioOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div v-loading="loading" style="width: 100%">
      <div v-if="distributionType === 1" class="information-main">
        <div class="chart-main" id="chart"></div>
        <el-table class="table-main" :data="tableData">
          <el-table-column prop="name" label="客户"></el-table-column>
          <el-table-column prop="org" label="所属行业"></el-table-column>
          <el-table-column label="投放规模（万元）">
            <template slot-scope="scope">{{ numberFormat(scope.row.amount, 0) }}</template>
          </el-table-column>
          <el-table-column label="占比">
            <template slot-scope="scope">
              {{ scope.row.time + '天' }}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-else class="information-main">
        <div class="map-main" id="map"></div>
        <div class="legend-main">
          <p class="title">
            全部非正常客户数：
            <span class="info-num">700家</span>
          </p>
          <p>
            <span class="name">关注类</span>
            <span class="progress">
              <span
                class="bar"
                style="background-color: #4a84ff"
                :style="{ width: `${numMap.one ? (numMap.one / numMap.total) * 100 : 0}%` }"
              ></span>
              {{ numMap.one }}家
            </span>
          </p>
          <p>
            <span class="name">次级类</span>
            <span class="progress">
              <span
                class="bar"
                style="background-color: #79d2de"
                :style="{ width: `${numMap.two ? (numMap.two / numMap.total) * 100 : 0}%` }"
              ></span>
              {{ numMap.two }}家
            </span>
          </p>
          <p>
            <span class="name">可疑类</span>
            <span class="progress">
              <span
                class="bar"
                style="background-color: #ffd37a"
                :style="{ width: `${numMap.three ? (numMap.three / numMap.total) * 100 : 0}%` }"
              ></span>
              {{ numMap.three }}家
            </span>
          </p>
          <p>
            <span class="name">损失类</span>
            <span class="progress">
              <span
                class="bar"
                style="background-color: #f57e4a"
                :style="{ width: `${numMap.four ? (numMap.four / numMap.total) * 100 : 0}%` }"
              ></span>
              {{ numMap.four }}家
            </span>
          </p>
        </div>
        <el-table class="table-main_min" :data="tableData">
          <el-table-column prop="name" label="客户"></el-table-column>
          <el-table-column prop="org" label="所属行业"></el-table-column>
          <el-table-column label="投放规模（万元）" width="180">
            <template slot-scope="scope">{{ numberFormat(scope.row.amount, 0) }}</template>
          </el-table-column>
          <el-table-column label="占比">
            <template slot-scope="scope">
              {{ scope.row.time + '天' }}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
import qc from '@/libs/map/chongqing'
import sc from '@/libs/map/sichuan'
import gz from '@/libs/map/guizhou'
import sx from '@/libs/map/shanxi'
import all from '@/libs/map/all'
import { numberFormat } from '@/libs/utils'
import resize from '@/mixins/resize'
export default {
  data() {
    return {
      loading: false,
      activeType: 'all',
      type: 1,
      typeSelect: '',
      typeOptions: [{ label: '全部产业', value: '' }],
      classifySelect: '',
      classifyOptions: [{ label: '全部分类', value: '' }],
      ratioSelect: '',
      ratioOptions: [{ label: '占行内全部投放', value: '' }],
      distributionType: 1,
      chartOption: {
        color: ['#3FAAFF', '#B4CEDC', '#62DB9B', '#58CCF4', '#7D7CFF', '#FBB447', '#EC8B66'],
        tooltip: {
          formatter: function (data) {
            return `${data.name}：${data.value}`
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
            data: [
              {
                name: 'nodeA',
                value: 10,
                children: [
                  {
                    name: 'nodeAa',
                    value: 4
                  },
                  {
                    name: 'nodeAb',
                    value: 6
                  }
                ]
              },
              {
                name: 'nodeB',
                value: 20,
                children: [
                  {
                    name: 'nodeBa',
                    value: 20,
                    children: [
                      {
                        name: 'nodeBa1',
                        value: 20
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      mapOption: {
        visualMap: {
          orient: 'horizontal',
          right: '0',
          bottom: '10',
          itemWidth: '12',
          min: 800,
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
      numMap: {
        total: 700,
        one: 100,
        two: 300,
        three: 200,
        four: 100
      }
    }
  },
  mixins: [resize],
  watch: {
    activeType: {
      immediate: true,
      handler() {
        this.handleType(this.type)
      }
    }
  },
  methods: {
    numberFormat,
    handleType(type) {
      this.type = type
      this.handledDistributionType(this.distributionType)
    },
    handledDistributionType(distributionType) {
      this.distributionType = distributionType
      this.loading = true
      setTimeout(() => {
        this.$nextTick(() => {
          if (this.distributionType === 1) {
            this.initChart()
          } else {
            this.initMap()
          }
          this.initTable()
        })
      }, 1000)
    },
    initChart() {
      this.myChart = echarts.init(document.getElementById('chart'))
      this.myChart.setOption(this.chartOption, true)
      this.myChart.resize()
      this.loading = false
    },
    initTable() {
      this.tableData = []
    },
    initMap() {
      switch (this.activeType) {
        case 'qc':
          echarts.registerMap('map', qc)
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
      this.mapChart = echarts.init(document.getElementById('map'))
      this.mapChart.setOption(this.mapOption, true)
      this.mapChart.resize()
      this.loading = false
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
    padding: 0 10px 10px 10px;
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
.filter {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  cursor: pointer;
}
</style>
