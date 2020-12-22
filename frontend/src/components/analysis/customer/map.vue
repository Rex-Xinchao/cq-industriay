<template>
  <div class="map-com">
    <div class="chart-main" id="map"></div>
    <area-search></area-search>
    <el-breadcrumb class="breadcrumb" v-show="activeType !== 'all'">
      <el-breadcrumb-item><span style="cursor: pointer" @click="resetActive">三省一市</span></el-breadcrumb-item>
      <el-breadcrumb-item style="font-size: 16px">
        <strong>{{ activeName }}</strong>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-dialog
      modal-append-to-body
      class="map-com_dialog"
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="1000px"
      :before-close="handleClose"
    >
      <span>
        <el-form :inline="true" :model="dialogForm" class="dialog-form">
          <el-form-item label="资质：">
            <el-select class="select" v-model="dialogForm.qualify" multiple placeholder="请选择资质">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="成立时间：">
            <el-date-picker
              class="time-picker"
              v-model="dialogForm.time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="注册资本：">
            <el-slider class="slider" v-model="dialogForm.amountRange" range :max="3000"></el-slider>
          </el-form-item>
          <el-form-item label="营收规模：">
            <el-slider class="slider" v-model="dialogForm.amountRange2" range :max="3000"></el-slider>
          </el-form-item>
        </el-form>
        <div class="btn-box">
          <el-button type="primary" class="fr" style="margin-left: 12px" @click="search">查询</el-button>
          <el-button class="fr" @click="reset">重置</el-button>
        </div>
        <el-table v-loading="dialogLoading" class="table-main table-head-grey" :data="dialogTable" height="396">
          <el-table-column prop="name" label="公司名称" align="left"></el-table-column>
          <el-table-column prop="year" label="经营年限" align="left"></el-table-column>
          <el-table-column prop="money" label="注册资本" align="right"></el-table-column>
          <el-table-column label="公司标记" align="right">
            <template slot-scope="scope">
              <span class="sign-tag_com">非上市</span>
              <span class="sign-tag_com">发债</span>
            </template>
          </el-table-column>
          <el-table-column prop="amount" label="经营规模" align="right"></el-table-column>
          <el-table-column prop="report" label="报告期" align="right"></el-table-column>
        </el-table>
      </span>
    </el-dialog>
  </div>
</template>
<script>
const echarts = require('echarts')
import 'echarts/map/js/china.js'
import qc from '@/libs/map/chongqing'
import sc from '@/libs/map/sichuan'
import gz from '@/libs/map/guizhou'
import sx from '@/libs/map/shanxi'
import resize from '@/mixins/resize'
export default {
  data() {
    return {
      activeType: 'all',
      activeName: null,
      keyword: null,
      mapOption: {
        tooltip: {
          trigger: 'item',
          formatter: (data) => {
            if (!data.value) return
            return `${data.name}<br/> ${data.value} 家`
          }
        },
        visualMap: {
          orient: 'horizontal',
          right: '0',
          bottom: '10',
          itemWidth: '12',
          min: 800,
          max: 10000,
          inRange: {
            color: ['#92FEA7', '#6785F9', '#862DFF']
          },
          text: ['高', '公司数量：低'],
          calculable: true
        },
        series: [
          {
            type: 'map',
            mapType: 'china',
            roam: false,
            zoom: 3,
            center: [106, 32],
            label: {
              show: true
            },
            itemStyle: {
              areaColor: '#F5F6F7'
            },
            emphasis: {
              itemStyle: {}
            },
            textFixed: {
              Alaska: [20, -20]
            },
            data: [
              { name: '重庆', value: 854 },
              { name: '陕西', value: 2058 },
              { name: '四川', value: 5842 },
              { name: '贵州', value: 9843 }
            ]
          }
        ]
      },
      dialogVisible: false,
      dialogTitle: '重庆市',
      dialogForm: {
        time: [],
        qualify: [],
        amountRange: [0, 100],
        amountRange2: [0, 100]
      },
      options: [
        { label: 'AAA', value: 1 },
        { label: 'BBB', value: 2 },
        { label: 'CCC', value: 3 },
        { label: 'DDD', value: 4 }
      ],
      dialogLoading: false,
      dialogTable: [{}]
    }
  },
  mixins: [resize],
  methods: {
    resetActive() {
      this.activeType = 'all'
      this.activeName = null
      this.drawChart()
    },
    drawChart() {
      if (this.activeType === 'all') {
        this.mapOption.series[0].map = null
        this.mapOption.series[0].mapType = 'china'
        this.mapOption.series[0].zoom = 3
        this.mapOption.series[0].center = [106, 32]
      } else {
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
        }
        this.mapOption.series[0].map = 'map'
        this.mapOption.series[0].zoom = null
        this.mapOption.series[0].center = null
      }
      if (!this.myChart) {
        this.myChart = echarts.init(document.getElementById('map'))
        let timer = null
        this.myChart.on('dblclick', (params) => {
          timer && clearTimeout(timer)
          if (this.activeType === 'all') {
            if (['重庆', '陕西', '贵州', '四川'].includes(params.name)) {
              switch (params.name) {
                case '重庆':
                  this.activeType = 'qc'
                  this.activeName = '重庆'
                  break
                case '陕西':
                  this.activeType = 'sx'
                  this.activeName = '陕西'
                  break
                case '贵州':
                  this.activeType = 'gz'
                  this.activeName = '贵州'
                  break
                case '四川':
                  this.activeType = 'sc'
                  this.activeName = '四川'
                  break
              }
              this.drawChart()
            }
          }
        })
        this.myChart.on('click', (params) => {
          timer && clearTimeout(timer)
          timer = setTimeout(() => {
            this.handleOpen(params.name, params.value)
          }, 500)
        })
      }
      this.myChart.setOption(this.mapOption, true)
      this.myChart.resize()
    },
    handleOpen(name, value) {
      this.dialogVisible = true
      this.dialogTitle = `${name} （${value}家）`
      this.search()
    },
    handleClose() {
      this.dialogVisible = false
      this.dialogTitle = null
      this.reset()
    },
    search() {
      this.dialogLoading = true
      setTimeout(() => {
        this.dialogLoading = false
      }, 1000)
    },
    reset() {
      this.dialogForm.time = []
      this.dialogForm.qualify = []
      this.dialogForm.amountRange = [0, 100]
      this.dialogForm.amountRange2 = [0, 100]
      this.search()
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
.map-com {
  position: relative;
  .chart-main {
    width: calc(100% - 20px);
    height: 100%;
  }
  .area-search {
    position: absolute;
    top: 28px;
    left: 20px;
  }

  .breadcrumb {
    position: absolute;
    top: 68px;
    left: 20px;
  }
}
.sign-tag_com {
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  background: #f4f6fa;
  border-radius: 3px;
  padding: 2px 6px;

  & + .sign-tag_com {
    margin-left: 8px;
  }
}
</style>