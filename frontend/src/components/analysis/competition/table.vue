<template>
  <div class="com-main data-table-main">
    <div class="operation-bar">
      <span class="bar-item" :class="{ active: type === 1 }" @click="type = 1">龙头企业</span>
      <span class="bar-item" :class="{ active: type === 2 }" @click="type = 2">资质企业</span>
      <span class="bar-item last" :class="{ active: type === 3 }" @click="type = 3">工商企业</span>
      <el-radio-group v-model="radio" style="margin-left: 20px" v-if="type === 3">
        <el-radio :label="1">全部</el-radio>
        <el-radio :label="2">2年以上</el-radio>
      </el-radio-group>
      <span class="button-export fr" @click="exportFile">
        <i class="icon-img"></i>
        导出
      </span>
      <el-popover ref="popover" placement="bottom" width="108" trigger="click">
        <div class="popover-main">
          <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="item in filters" :label="item" :key="item">{{ item }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <span class="button-cfg fr" slot="reference" v-show="type === 2">
          <i class="icon-img"></i>
          筛选资质
        </span>
      </el-popover>
    </div>
    <div v-loading="loading">
      <el-table v-show="type === 1" class="table-main" :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" label="排名" align="center"></el-table-column>
        <el-table-column label="公司名称" width="280" align="left">
          <template slot-scope="scope">
            <span class="type-tag" :class="`type_${scope.row.comType}`">{{ typeMap[scope.row.comType] }}</span>
            <span class="name" :title="scope.row.comName">{{ scope.row.comName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="province" label="省份" width="80" align="center"></el-table-column>
        <el-table-column prop="region" label="地区" width="80" align="center"></el-table-column>
        <el-table-column label="市场" width="80" align="center">
          <template slot-scope="scope">
            {{ mktType[scope.row.mkt] || '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="leading.income" label="业务收入" width="180" sortable align="left">
          <template slot-scope="scope">
            <span class="bar" :style="{ width: 100 * (scope.row.leading.income / sum.income) + 'px' }"></span>
            <span class="amount">{{ scope.row.leading.income }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="leading.grossMargin" label="业务线毛利" width="180" sortable align="left">
          <template slot-scope="scope">
            <span class="bar" :style="{ width: 100 * (scope.row.leading.grossMargin / sum.grossMargin) + 'px' }"></span>
            <span class="amount">{{ scope.row.leading.grossMargin }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="leading.growth" label="业务线毛利增速" sortable align="center">
          <template slot-scope="scope">
            {{ scope.row.leading.growth ? `${scope.row.leading.growth}%` : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="leading.gpr" label="业务线毛利率" sortable align="center">
          <template slot-scope="scope">
            {{ scope.row.leading.gpr ? `${scope.row.leading.gpr}%` : '--' }}
          </template>
        </el-table-column>
      </el-table>
      <el-table v-show="type === 2" class="table-main" :data="tableData" style="width: 100%">
        <el-table-column label="公司名称" width="280" align="left">
          <template slot-scope="scope">
            <span class="type-tag" :class="`type_${scope.row.comType}`">{{ typeMap[scope.row.comType] }}</span>
            <span class="name" :title="scope.row.comName">{{ scope.row.comName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="province" label="省份" width="80" align="center"></el-table-column>
        <el-table-column prop="region" label="地区" width="80" align="center"></el-table-column>
        <el-table-column label="高新技术" align="center">
          <template slot-scope="scope">
            <span
              class="el-icon-circle-check"
              style="color: #00b362"
              v-if="scope.row.qualificationCodes.includes('Code1')"
            ></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column label="专精特新企业" style="color: #00b362" align="center">
          <template slot-scope="scope">
            <span class="el-icon-circle-check" v-if="scope.row.qualificationCodes.includes('Code2')"></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column label="科技型中小" style="color: #00b362" align="center">
          <template slot-scope="scope">
            <span class="el-icon-circle-check" v-if="scope.row.qualificationCodes.includes('Code3')"></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column label="示范认证企业" style="color: #00b362" align="center">
          <template slot-scope="scope">
            <span class="el-icon-circle-check" v-if="scope.row.qualificationCodes.includes('Code4')"></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column label="参与起草标准" style="color: #00b362" align="center">
          <template slot-scope="scope">
            <span class="el-icon-circle-check" v-if="scope.row.qualificationCodes.includes('Code5')"></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column label="创新大赛获奖" style="color: #00b362" align="center">
          <template slot-scope="scope">
            <span class="el-icon-circle-check" v-if="scope.row.qualificationCodes.includes('Code6')"></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column label="企业技术中心" style="color: #00b362" align="center">
          <template slot-scope="scope">
            <span class="el-icon-circle-check" v-if="scope.row.qualificationCodes.includes('Code7')"></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
      </el-table>
      <el-table v-show="type === 3" class="table-main" :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" label="排名" align="center"></el-table-column>
        <el-table-column label="公司名称" width="280" align="left">
          <template slot-scope="scope">
            <span class="type-tag" :class="`type_${scope.row.comType}`">{{ typeMap[scope.row.comType] }}</span>
            <span class="name" :title="scope.row.comName">{{ scope.row.comName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="province" label="省份" align="center"></el-table-column>
        <el-table-column prop="region" label="地区" align="center"></el-table-column>
        <el-table-column label="市场" align="center">
          <template slot-scope="scope">
            {{ mktType[scope.row.mkt] || '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="gs.registered" label="注册资本" sortable align="left">
          <template slot-scope="scope">
            <span class="bar" :style="{ width: 100 * (scope.row.gs.registered / sum.registered) + 'px' }"></span>
            <span class="amount">{{ scope.row.gs.registered }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
import { numberFormat } from '@/libs/utils'
import { tableData } from '@/mockData/competition'
export default {
  name: '',
  data() {
    let vm = this
    return {
      sum: {},
      amountRange: [0, 500],
      timeRange: [0, 30],
      radio: 1,
      type: 1,
      number_1: 6,
      number_2: 6,
      number_3: 120,
      tableData: [],
      loading: false,
      typeMap: {
        1: '授信客户',
        2: '行内客户'
      },
      mktType: {
        0: '非上市',
        1: '上市',
        2: '三板',
        3: '发债'
      },
      checkList: [],
      filters: [
        '高新技术',
        '专精特新企业',
        '科技型中小',
        '示范认证企业',
        '参与起草标准',
        '创新大赛获奖',
        '企业技术中心'
      ]
    }
  },
  props: {
    area: String
  },
  watch: {
    area: {
      immediate: true,
      handler() {
        this.init()
      }
    },
    type(data) {
      if (data === 3) {
        if (this.radio !== 1) {
          this.radio = 1
        } else {
          this.init()
        }
      }
      this.init()
    },
    radio() {
      this.init()
    },
    checkList() {
      this.init()
    }
  },
  methods: {
    numberFormat,
    save() {
      this.$refs.popover.doClose()
      this.init()
    },
    init() {
      this.loading = true
      this.tableData = []
      setTimeout(() => {
        this.loading = false
        this.tableData = tableData
        this.sum = {}
        tableData.forEach((item) => {
          if (this.type === 1) {
            this.sum.income = this.sum.income || 0
            this.sum.grossMargin = this.sum.grossMargin || 0
            this.sum.income += item.leading.income
            this.sum.grossMargin += item.leading.grossMargin
          } else if (this.type === 3) {
            this.sum.registered = this.sum.registered || 0
            this.sum.registered += item.gs.registered
          }
        })
      }, 1000)
    },
    exportFile() {
      this.$message.info('功能开发中')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/component';
.data-table-main {
  .table-main {
    width: 100%;
    margin-top: 20px;
    flex: 1;

    .type-tag {
      display: inline-block;
      border-radius: 2px;
      width: 60px;
      color: white;
      box-sizing: border-box;
      text-align: center;
      height: 22px;
      background: rgba(0, 0, 0, 0);
      vertical-align: top;
      &.type_1 {
        background: linear-gradient(50deg, #eabc93 0%, #e2a570 100%);
      }
      &.type_2 {
        background: linear-gradient(50deg, #b3b2c9 0%, #9b9dc4 100%);
      }
    }

    .name {
      display: inline-block;
      width: 180px;
      line-height: 22px;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: top;
      text-align: left;
      text-indent: 1em;
    }

    .bar {
      display: inline-block;
      height: 18px;
      margin: 2px 0;
      box-sizing: border-box;
      background: linear-gradient(116deg, #4d7aff 0%, #9cb9ff 100%);
      border-radius: 2px;
    }

    .amount {
      display: inline-block;
      width: 60px;
      line-height: 22px;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: top;
      text-align: left;
      text-indent: 1em;
    }
  }
  .save-btn {
    margin-top: 12px;
  }
}
.last {
  border-radius: 0px 4px 4px 0px;
  border-right: 1px solid #d9d9d9;
}
.button-export,
.button-cfg {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  cursor: pointer;
}
</style>
<style lang="scss">
.el-table thead th {
  background: #eff0f3;
}
.popover-main {
  .demonstration {
    display: inline-block;
    font-size: 14px;
    color: #8492a6;
    vertical-align: top;
    line-height: 44px;
  }

  .slider {
    display: inline-block;
    width: calc(100% - 88px);
  }
}
</style>
