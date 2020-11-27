<template>
  <div class="item">
    <div class="map-main" id="map"></div>
    <div class="search-box">
      <el-input class="search-main" placeholder="请输入区域关键词" v-model="keyword" clearable></el-input>
      <el-button class="search-btn" type="primary" @click="search">查询</el-button>
    </div>

    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="1000px" :before-close="handleClose">
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
          <el-button type="primary" style="float: right; margin-left: 12px">查询</el-button>
          <el-button style="float: right">重置</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>
<script>
const echarts = require('echarts')
import 'echarts/map/js/china.js'
import resize from '@/mixins/resize'
export default {
  data() {
    return {
      keyword: null,
      mapOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} 家'
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
      dialogTable: []
    }
  },
  mixins: [resize],
  methods: {
    drawChart() {
      if (!this.myChart) {
        this.myChart = echarts.init(document.getElementById('map'))
        this.myChart.on('click', (params) => {
          if (['重庆', '陕西', '贵州', '四川'].includes(params.name)) {
            this.handleOpen(params.name)
          }
        })
      }
      this.myChart.setOption(this.mapOption, true)
      this.myChart.resize()
    },
    handleOpen(name) {
      this.dialogVisible = true
      this.dialogTitle = name
    },
    handleClose() {},
    search() {}
  },
  mounted() {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
.item {
  position: relative;
  .map-main {
    width: calc(100% - 20px);
    height: 100%;
  }
  .search-box {
    position: absolute;
    top: 28px;
    left: 20px;

    .search-btn {
      margin-left: 6px;
    }
  }
}
</style>
<style lang="scss">
.search-box {
  .search-main {
    width: 240px;
    .el-input__inner {
      border-radius: 2px;
      background-color: white;
    }
  }
}
.dialog-form {
  display: inline-block;
  width: calc(100% - 200px);

  .el-form-item {
    width: calc(50% - 10px);
    box-sizing: border-box;
  }

  .el-form-item__label {
    line-height: 38px;
  }

  .el-form-item__content {
    width: calc(100% - 120px);
    padding: 0 8px;
  }

  .select {
    width: 100%;
    margin-top: 6px;
  }

  .time-picker {
    width: 100%;
    margin-top: 6px;
  }

  .slider {
    width: 100%;
  }
}
.btn-box {
  display: inline-block;
  vertical-align: bottom;
  width: 200px;
  padding-bottom: 18px;
}
</style>