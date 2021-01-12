<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
    </h1>
    <div class="com-cards">
      <div class="card">
        <div class="card-main">
          <span class="icon icon_1"></span>
          <span class="line">
            <p>
              <b>25</b>
              家企业
            </p>
            <p>裁判文书</p>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card-main">
          <span class="icon icon_2"></span>
          <span class="line">
            <p>
              <b>25</b>
              家企业
            </p>
            <p>失信被执行人</p>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card-main">
          <span class="icon icon_3"></span>
          <span class="line">
            <p>
              <b>25</b>
              家企业
            </p>
            <p>被执行人</p>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card-main">
          <span class="icon icon_4"></span>
          <span class="line">
            <p>
              <b>25</b>
              家企业
            </p>
            <p>被执行人</p>
          </span>
        </div>
      </div>
    </div>
    <el-table
      v-loading="loading"
      class="com-table table-main table-head-grey"
      :data="tableData"
      style="width: 100%"
      height="324px"
    >
      <el-table-column prop="comName" label="公司名称"></el-table-column>
      <el-table-column prop="buName" label="管护机构" width="80"></el-table-column>
      <el-table-column label="贷款余额（万元）" align="right">
        <template slot-scope="scope">
          {{ scope.row.amount || '--' }}
        </template>
      </el-table-column>
      <el-table-column label="最大逾期天数" align="right">
        <template slot-scope="scope">
          {{ scope.row.overdueDay ? scope.row.overdueDay + '天' : '--' }}
        </template>
      </el-table-column>
      <el-table-column label="裁判文书" align="right">
        <template slot-scope="scope">
          <span class="active-text" @click="showDialog(1, scope.row)">
            {{ scope.row.reason ? scope.row.reason + '起' : '--' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="被执行情况" align="right">
        <template slot-scope="scope">
          <span class="active-text" @click="showDialog(2, scope.row)">
            {{ scope.row.reason ? scope.row.reason + '起' : '--' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="失信被执行情况" align="right">
        <template slot-scope="scope">
          <span class="active-text" @click="showDialog(3, scope.row)">
            {{ scope.row.reason ? scope.row.reason + '起' : '--' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="股权冻结情况" align="right">
        <template slot-scope="scope">
          <span class="active-text" @click="showDialog(4, scope.row)">详情</span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      modal-append-to-body
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <el-table class="table-main table-head-grey" :data="dialogData" height="396" v-loading="loading_table">
        <el-table-column
          v-for="item in tableConf"
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          align="center"
        ></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTime: [],
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
      ],
      loading: false,
      loading_table: false,
      tableData: [{}],
      dialogData: [],
      tableConf: [],
      dialogTitle: null,
      dialogVisible: false
    }
  },
  props: {
    title: String,
    industryCode: {
      require: true,
      type: Array
    }
  },
  watch: {
    industryCode: {
      immediate: true,
      handler(data) {
        if (!data.length) return
      }
    }
  },
  methods: {
    handleClose() {
      this.dialogData = []
      this.dialogTitle = null
      this.dialogVisible = false
    },
    showDialog(type = 1, data) {
      let typeNameList = ['裁判文书', '被执行情况', '失信被执行情况', '股权冻结情况']
      this.tableConf = null
      this.dialogTitle = `${data.name} ${typeNameList[type - 1]}`
      this.dialogVisible = true
      this[`getTypeData_${type}`]()
    },
    getTypeData_1() {
      this.tableConf = [
        {
          label: '案号',
          prop: 'a'
        },
        {
          label: '案件类型',
          prop: 'b'
        },
        {
          label: '法院',
          prop: 'c'
        },
        {
          label: '标题',
          prop: 'd'
        },
        {
          label: '原告',
          prop: 'e'
        },
        {
          label: '被告',
          prop: 'f'
        },
        {
          label: '案由',
          prop: 'g'
        },
        {
          label: '发布时间',
          prop: 'h'
        }
      ]
      this.loading_table = true
      setTimeout(() => {
        this.dialogData = []
        this.loading_table = false
      }, 500)
    },
    getTypeData_2() {
      this.tableConf = [
        {
          label: '被执行人',
          prop: 'a'
        },
        {
          label: '案号',
          prop: 'b'
        },
        {
          label: '执行法院',
          prop: 'c'
        },
        {
          label: '执行标的（元）',
          prop: 'd'
        },
        {
          label: '立案时间',
          prop: 'e'
        }
      ]
      this.loading_table = true
      setTimeout(() => {
        this.dialogData = []
        this.loading_table = false
      }, 500)
    },
    getTypeData_3() {
      this.tableConf = [
        {
          label: '失信被执行人',
          prop: 'a'
        },
        {
          label: '执行依据文号',
          prop: 'b'
        },
        {
          label: '所属法院',
          prop: 'c'
        },
        {
          label: '生效法律文书确认义务',
          prop: 'd'
        },
        {
          label: '履行情况',
          prop: 'e'
        },
        {
          label: '失信行为',
          prop: 'f'
        },
        {
          label: '发布时间',
          prop: 'h'
        }
      ]
      this.loading_table = true
      setTimeout(() => {
        this.dialogData = []
        this.loading_table = false
      }, 500)
    },
    getTypeData_4() {
      this.tableConf = [
        {
          label: '股权被冻结方',
          prop: 'a'
        },
        {
          label: '冻结股权标的企业',
          prop: 'b'
        },
        {
          label: '执行法院',
          prop: 'c'
        },
        {
          label: '执行裁定文书号',
          prop: 'd'
        },
        {
          label: '执行事项',
          prop: 'e'
        },
        {
          label: '冻结股权金额',
          prop: 'f'
        }
      ]
      this.loading_table = true
      setTimeout(() => {
        this.dialogData = []
        this.loading_table = false
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';

.com-cards {
  padding-top: 16px;
  width: 100%;
  height: 76px;

  .card {
    display: inline-block;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    border-left: 1px solid #cccccc;
    padding-top: 16px;

    &:first-of-type {
      border: none;
    }

    .card-main {
      width: 160px;
      height: 40px;
      margin: 0 auto;
    }

    .icon {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
      background-size: contain;

      &.icon_1 {
        background-image: url(~@/assets/imgs/stockCustom/external_risk_table_1.png);
      }
      &.icon_2 {
        background-image: url(~@/assets/imgs/stockCustom/external_risk_table_2.png);
      }
      &.icon_3 {
        background-image: url(~@/assets/imgs/stockCustom/external_risk_table_3.png);
      }
      &.icon_4 {
        background-image: url(~@/assets/imgs/stockCustom/external_risk_table_4.png);
      }
    }

    .line {
      display: inline-block;
      width: 120px;
      padding-left: 20px;
      box-sizing: border-box;

      p {
        margin: 0;
        b {
          font-size: 28px;
          font-weight: bold;
          color: #1b253a;
          line-height: 36px;
        }
        &:nth-of-type(1) {
          font-size: 12px;
          font-weight: 400;
          color: #1b253a;
          line-height: 16px;
        }

        &:nth-of-type(2) {
          font-size: 12px;
          font-weight: 400;
          color: #94979b;
          line-height: 16px;
        }
      }
    }
  }
}
.com-table {
  padding-top: 16px;
}
.active-text {
  cursor: pointer;
  color: #3a84ff;
}
</style>
