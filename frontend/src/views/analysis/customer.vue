<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">行业获客</h1>
    </div>
    <div class="main-body">
      <map-chart class="map-chart"></map-chart>
      <el-button @click="handleOpen" type="primary" class="btn-show-more">推荐企业</el-button>
      <el-dialog
        modal-append-to-body
        title="推荐企业"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="handleClose"
      >
        <div class="operation-bar">
          <span class="bar-item" :class="{ active: type === 1 }" @click="type = 1">区域资质企业</span>
          <span class="bar-item" :class="{ active: type === 2 }" @click="type = 2">区域核心供应链</span>
          <span class="bar-item" :class="{ active: type === 3 }" @click="type = 3">区域园区企业</span>
          <i style="margin-left: 8px" class="icon-tip" :title="titles[type - 1]"></i>
        </div>
        <div v-loading="loading">
          <el-table v-show="type === 1" class="table-main table-head-grey" :data="tableData" height="396">
            <el-table-column prop="region" label="地域" align="center"></el-table-column>
            <el-table-column label="名称" align="left">
              <template slot-scope="scope">
                <span class="type-tag" :class="`type_${scope.row.comType}`">{{ typeMap[scope.row.comType] }}</span>
                <span class="name" :title="scope.row.comName">{{ scope.row.comName }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="num" label="资质数量" align="center">
              <template slot-scope="scope">
                <el-popover ref="popover" style="width: 120px" placement="bottom" trigger="hover">
                  <p class="popover-p">资质A</p>
                  <p class="popover-p">资质B</p>
                  <p class="popover-p">资质C</p>
                  <span class="icon-qualify" slot="reference">
                    <i class="el-icon-data-analysis"></i>
                    {{ scope.row.number }}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
          <el-table v-show="type === 2" class="table-main table-head-grey" :data="tableData" height="396">
            <el-table-column prop="region" label="地区" align="center"></el-table-column>
            <el-table-column label="供应商" align="left">
              <template slot-scope="scope">
                <span class="type-tag" :class="`type_${scope.row.comType}`">{{ typeMap[scope.row.comType] }}</span>
                <span class="name" :title="scope.row.comName">{{ scope.row.comName }}</span>
              </template>
            </el-table-column>
            <el-table-column align="left">
              <template slot="header" slot-scope="scope">
                <span style="display: inline-block; margin-right: 2px">核心企业</span>
                <el-popover ref="popover" style="width: 60px" placement="bottom" trigger="hover">
                  <p class="popover-p">上市</p>
                  <p class="popover-p">三板</p>
                  <p class="popover-p">发债</p>
                  <i class="icon-tip" slot="reference"></i>
                </el-popover>
              </template>
              <template slot-scope="scope">
                <span v-if="!scope.row.companys.length">--</span>
                <template v-else>
                  <p v-for="(item, index) in scope.row.companys" :key="index" class="ceil-line" :title="item.name">
                    {{ item.name }}
                  </p>
                </template>
              </template>
            </el-table-column>
          </el-table>
          <el-table v-show="type === 3" class="table-main table-head-grey" :data="tableData" height="396">
            <el-table-column prop="region" label="地区" align="center"></el-table-column>
            <el-table-column label="公司名称" align="left">
              <template slot-scope="scope">
                <span class="type-tag" :class="`type_${scope.row.comType}`">{{ typeMap[scope.row.comType] }}</span>
                <span class="name" :title="scope.row.comName">{{ scope.row.comName }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="area" label="园区" align="center"></el-table-column>
          </el-table>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import mapChart from '@/components/analysis/customer/map'
import resize from '@/mixins/resize'
import { tableData_1, tableData_2, tableData_3 } from '@/mockData/customer'
export default {
  data() {
    return {
      type: 1,
      loading: false,
      tableData: [],
      typeMap: {
        1: '授信客户',
        2: '行内客户'
      },
      dialogVisible: false,
      titles: ['政府部门认定的区域内资质企业', '上市、三板、发债企业在区域内的供应商', '区域内产业园区入驻的企业']
    }
  },
  components: { mapChart },
  watch: {
    type() {
      this.getData()
    }
  },
  methods: {
    getData() {
      this.loading = true
      this.tableData = []
      setTimeout(() => {
        this.loading = false
        if (this.type === 1) {
          this.tableData = tableData_1
        } else if (this.type === 2) {
          this.tableData = tableData_2
        } else {
          this.tableData = tableData_3
        }
      }, 1000)
    },
    handleOpen() {
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/common/table';
.main {
  height: calc(100% - 48px);
  .main-body {
    box-sizing: border-box;
    position: relative;

    .map-chart {
      display: inline-block;
      vertical-align: top;
      margin-right: 20px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .operation-bar {
      margin-bottom: 20px;
    }

    .btn-show-more {
      position: absolute;
      top: 48px;
      right: 8px;
      z-index: 1001;
    }

    .table-main {
      margin-top: 12px;
    }
  }
}
</style>