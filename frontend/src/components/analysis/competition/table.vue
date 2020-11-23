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
      <span class="button-cfg fr">
        <i class="icon-img"></i>
        导出
      </span>
      <el-popover ref="popover" placement="bottom" width="220" trigger="click">
        <div class="popover-main">
          <p>逾期客户筛选</p>
          <div class="block">
            <span class="demonstration">金额</span>
            <el-slider class="slider" style="margin-left: 46px" v-model="amountRange" range :max="3000"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">逾期天数</span>
            <el-slider class="slider" style="margin-left: 18px" v-model="timeRange" range :max="100"></el-slider>
          </div>
          <el-button class="save-btn fr" type="primary" @click="save">保存</el-button>
        </div>
        <span class="button-cfg fr" slot="reference">
          <i class="icon-img"></i>
          筛选
        </span>
      </el-popover>
    </div>
    <div v-loading="loading">
      <el-table v-show="type === 1" class="table-main" :data="tableData_1" style="width: 100%">
        <el-table-column type="index" width="50" label="排名" align="center"></el-table-column>
        <el-table-column label="公司名称" width="280" align="left">
          <template slot-scope="scope">
            <span class="type-tag" :class="`type_${scope.row.type}`">{{ typeMap[scope.row.type] }}</span>
            <span class="name" :title="scope.row.name">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="per" label="省份" width="80" align="center"></el-table-column>
        <el-table-column prop="area" label="地区" width="80" align="center"></el-table-column>
        <el-table-column prop="market" label="市场" width="80" align="center"></el-table-column>
        <el-table-column label="业务收入" width="180" sortable align="left">
          <template slot-scope="scope">
            <span class="bar" :style="{ width: 100 * (scope.row.amount / sum) + 'px' }"></span>
            <span class="amount">{{ scope.row.amount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="业务线毛利" width="180" sortable align="left">
          <template slot-scope="scope">
            <span class="bar" :style="{ width: 100 * (scope.row.amount / sum) + 'px' }"></span>
            <span class="amount">{{ scope.row.amount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="a" label="业务线毛利增速" sortable align="center"></el-table-column>
        <el-table-column prop="b" label="业务线毛利率" sortable align="center"></el-table-column>
      </el-table>
      <el-table v-show="type === 2" class="table-main" :data="tableData_2" style="width: 100%">
        <el-table-column label="公司名称" width="280" align="left">
          <template slot-scope="scope">
            <span class="type-tag" :class="`type_${scope.row.type}`">{{ typeMap[scope.row.type] }}</span>
            <span class="name" :title="scope.row.name">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="per" label="省份" align="center"></el-table-column>
        <el-table-column prop="area" label="地区" align="center"></el-table-column>
        <el-table-column label="高新技术" align="center">
          <template slot-scope="scope">
            <span class="el-icon-circle-check" v-if="scope.row.isScope"></span>
            <span v-else>--</span>
          </template>
        </el-table-column>
        <el-table-column label="专精特新企业" align="center">
          <template slot-scope="scope">
            <span>--</span>
          </template>
        </el-table-column>
        <el-table-column label="科技型中小" align="center">
          <template slot-scope="scope">
            <span>--</span>
          </template>
        </el-table-column>
        <el-table-column label="示范认证企业" align="center">
          <template slot-scope="scope">
            <span>--</span>
          </template>
        </el-table-column>
        <el-table-column label="参与起草标准" align="center">
          <template slot-scope="scope">
            <span>--</span>
          </template>
        </el-table-column>
        <el-table-column label="创新大赛获奖" align="center">
          <template slot-scope="scope">
            <span>--</span>
          </template>
        </el-table-column>
        <el-table-column label="企业技术中心" align="center">
          <template slot-scope="scope">
            <span>--</span>
          </template>
        </el-table-column>
      </el-table>
      <el-table v-show="type === 3" class="table-main" :data="tableData_3" style="width: 100%">
        <el-table-column type="index" width="50" label="排名" align="center"></el-table-column>
        <el-table-column label="公司名称" width="280" align="left">
          <template slot-scope="scope">
            <span class="type-tag" :class="`type_${scope.row.type}`">{{ typeMap[scope.row.type] }}</span>
            <span class="name" :title="scope.row.name">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="per" label="省份" align="center"></el-table-column>
        <el-table-column prop="area" label="地区" align="center"></el-table-column>
        <el-table-column prop="market" label="市场" align="center"></el-table-column>
        <el-table-column label="注册资本" sortable align="left">
          <template slot-scope="scope">
            <span class="bar" :style="{ width: 100 * (scope.row.amount / sum) + 'px' }"></span>
            <span class="amount">{{ scope.row.amount }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
      sum: 0,
      amountRange: [0, 500],
      timeRange: [0, 30],
      radio: 1,
      type: 1,
      number_1: 6,
      number_2: 6,
      number_3: 120,
      tableData_1: [],
      tableData_2: [],
      tableData_3: [],
      loading: false,
      typeMap: {
        1: '授信客户',
        2: '行内客户'
      }
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
    }
  },
  methods: {
    numberFormat,
    save() {
      this.$refs.popover.doClose()
      this.init()
    },
    init() {
      console.log(this.type)
      this.loading = true
      this.tableData_1 = []
      this.tableData_2 = []
      this.tableData_3 = []
      setTimeout(() => {
        this.loading = false
        this.sum = 5682
        let tablItem = `tableData_${this.type}`
        if (this.type === 1) {
          this[tablItem] = [
            {
              type: 1,
              name: 'XXXX公司名称',
              a: '10%',
              b: '10%',
              per: '1',
              area: '1',
              market: '1',
              amount: 5682
            }
          ]
        } else if (this.type === 2) {
          this[tablItem] = [
            {
              type: 1,
              name: 'XXXX公司名称',
              per: '1',
              area: '1',
              isScope: true
            }
          ]
        } else {
          this[tablItem] = [
            {
              type: 1,
              name: 'XXXX公司名称',
              per: '1',
              area: '1',
              market: '1',
              amount: 5682
            }
          ]
        }
      }, 1000)
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
