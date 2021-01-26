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
              <b>{{ num_1 }}</b>
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
              <b>{{ num_2 }}</b>
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
              <b>{{ num_3 }}</b>
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
              <b>{{ num_4 }}</b>
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
      :id="tableId"
    >
      <el-table-column prop="comName" label="公司名称" align="left"></el-table-column>
      <el-table-column prop="buName" label="管护机构" width="80" align="left"></el-table-column>
      <el-table-column label="贷款余额（元）" align="right">
        <template slot-scope="scope">
          <template v-if="scope.row.loanBalance">{{ converUnit(scope.row.loanBalance.amount) }}</template>
          <template v-else>--</template>
        </template>
      </el-table-column>
      <el-table-column label="最大逾期天数" align="right">
        <template slot-scope="scope">
          {{ scope.row.overdueDay ? scope.row.overdueDay + '天' : '--' }}
        </template>
      </el-table-column>
      <el-table-column label="裁判文书" align="right">
        <template slot-scope="scope">
          <template v-if="!scope.row.judgements">--</template>
          <span v-else class="active-text" @click="showDialog(1, scope.row)">
            {{ scope.row.judgements + '起' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="被执行情况" align="right">
        <template slot-scope="scope">
          <template v-if="!scope.row.enforcements">--</template>
          <span v-else class="active-text" @click="showDialog(2, scope.row)">
            {{ scope.row.enforcements + '起' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="失信被执行情况" align="right">
        <template slot-scope="scope">
          <template v-if="!scope.row.disEnforcements">--</template>
          <span v-else class="active-text" @click="showDialog(3, scope.row)">
            {{ scope.row.disEnforcements + '起' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="股权冻结情况" align="right">
        <template slot-scope="scope">
          <template v-if="!scope.row.freezes">--</template>
          <span v-else class="active-text" @click="showDialog(4, scope.row)">详情</span>
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
      <el-table
        class="table-main table-head-grey"
        id="dialogTable"
        :data="dialogData"
        height="396"
        v-loading="loading_table"
      >
        <el-table-column
          v-for="item in tableConf"
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          :align="item.align || 'left'"
        ></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { industry_risk, judgement, enforcement, dishonest_enforcement, shares_freeze } from '@/api/custom'
import { converUnit } from '@/libs/utils'
export default {
  data() {
    return {
      tableId: 'riskTable',
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
      tableData: [],
      dialogData: [],
      tableConf: [],
      dialogTitle: null,
      dialogVisible: false,
      dialogType: null,
      dialogCode: null,
      num_1: 0,
      num_2: 0,
      num_3: 0,
      num_4: 0,
      page: {
        pageNo: 0,
        pageSize: 50
      },
      tableEnd: false,
      dialogPage: {
        pageNo: 0,
        pageSize: 50
      },
      dialogTableEnd: false
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
        this.getDate()
      }
    }
  },
  methods: {
    converUnit,
    handleScroll: function () {
      // 设备/屏幕高度
      let scrollObj = null // 滚动区域
      if (this.dialogVisible) {
        scrollObj = document.querySelector('#dialogTable>.el-table__body-wrapper')
      } else {
        scrollObj = document.querySelector('#riskTable>.el-table__body-wrapper')
      }
      if (!scrollObj) return
      let scrollTop = scrollObj.scrollTop // div 到头部的距离
      let scrollHeight = scrollObj.scrollHeight // 滚动条的总高度
      let clientHeight = scrollObj.clientHeight
      //滚动条到底部的条件
      if (scrollTop && scrollTop + clientHeight >= scrollHeight) {
        if (this.dialogVisible) {
          if (!this.loading && !this.dialogTableEnd) {
            this.dialogPage.pageNo = this.dialogPage.pageNo + 1
            this[`getTypeData_${this.dialogType}`](this.dialogCode)
          }
        } else {
          if (!this.loading && !this.tableEnd) {
            this.page.pageNo = this.page.pageNo + 1
            this.getDate()
          }
        }
      }
    },
    getDate() {
      this.loading = true
      industry_risk({
        industryCode: '',
        buCode: '',
        page: this.page.pageNo,
        size: this.page.pageSize
      })
        .then((res) => {
          this.loading = false
          this.tableData.push(...res.customers)
          this.tableEnd = res.total <= this.tableData.length
          this.noData = this.tableData.length === 0
          this.num_1 = res.judgements
          this.num_2 = res.enforcements
          this.num_3 = res.disEnforcements
          this.num_4 = res.freezes
        })
        .catch((err) => {
          this.loading = false
          this.noData = true
          this.tableData = []
          this.num_1 = 0
          this.num_2 = 0
          this.num_3 = 0
          this.num_4 = 0
        })
    },
    handleClose() {
      this.dialogData = []
      this.dialogVisible = false
      this.dialogTableEnd = false
      this.dialogTitle = null
      this.dialogType = null
      this.dialogCode = null
      this.dialogPage.pageNo = 0
    },
    showDialog(type = 1, data) {
      let typeNameList = ['裁判文书', '被执行情况', '失信被执行情况', '股权冻结情况']
      this.tableConf = null
      this.dialogTitle = `${data.comName} ${typeNameList[type - 1]}`
      this.dialogVisible = true
      this.dialogType = type
      this.dialogCode = data.comCode
      this[`getTypeData_${type}`](data.comCode)
    },
    getTypeData_1(csfId) {
      this.tableConf = [
        {
          label: '案号',
          prop: 'caseNumber'
        },
        {
          label: '案件类型',
          prop: 'caseType'
        },
        {
          label: '法院',
          prop: 'court'
        },
        {
          label: '标题',
          prop: 'title'
        },
        {
          label: '原告',
          prop: 'plaintiff'
        },
        {
          label: '被告',
          prop: 'defendant'
        },
        {
          label: '案由',
          prop: 'reason'
        },
        {
          label: '发布时间',
          prop: 'releaseTime'
        }
      ]
      this.loading_table = true
      judgement({ companyId: csfId, page: this.dialogPage.pageNo, size: this.dialogPage.pageSize })
        .then((res) => {
          this.dialogData.push(...res.result)
          this.dialogTableEnd = res.total <= this.dialogData.length
          this.loading_table = false
        })
        .catch((err) => {
          this.dialogData = []
          this.loading_table = false
          this.dialogTableEnd = true
        })
    },
    getTypeData_2(csfId) {
      this.tableConf = [
        {
          label: '被执行人',
          prop: 'companyName'
        },
        {
          label: '案号',
          prop: 'caseNumber'
        },
        {
          label: '执行法院',
          prop: 'court'
        },
        {
          label: '执行标的（元）',
          prop: 'executionSubject',
          align: 'right'
        },
        {
          label: '立案时间',
          prop: 'filingTime'
        }
      ]
      this.loading_table = true
      enforcement({ companyId: csfId, page: this.dialogPage.pageNo, size: this.dialogPage.pageSize })
        .then((res) => {
          this.dialogData.push(...res.result)
          this.dialogTableEnd = res.total <= this.dialogData.length
          this.loading_table = false
        })
        .catch((err) => {
          this.dialogData = []
          this.loading_table = false
          this.dialogTableEnd = true
        })
    },
    getTypeData_3(csfId) {
      this.tableConf = [
        {
          label: '失信被执行人',
          prop: 'companyName'
        },
        {
          label: '执行依据文号',
          prop: 'caseNumber'
        },
        {
          label: '所属法院',
          prop: 'court'
        },
        {
          label: '生效法律文书确认义务',
          prop: 'caseContent'
        },
        {
          label: '履行情况',
          prop: 'impleProcess'
        },
        {
          label: '失信行为',
          prop: 'dishonestBehavior'
        },
        {
          label: '发布时间',
          prop: 'releaseTime'
        }
      ]
      this.loading_table = true
      dishonest_enforcement({ companyId: csfId, page: this.dialogPage.pageNo, size: this.dialogPage.pageSize })
        .then((res) => {
          this.dialogData.push(...res.result)
          this.dialogTableEnd = res.total <= this.dialogData.length
          this.loading_table = false
        })
        .catch((err) => {
          this.dialogData = []
          this.loading_table = false
          this.dialogTableEnd = true
        })
    },
    getTypeData_4(csfId) {
      this.tableConf = [
        {
          label: '股权被冻结方',
          prop: 'companyName1'
        },
        {
          label: '冻结股权标的企业',
          prop: 'companyName2'
        },
        {
          label: '执行法院',
          prop: 'court'
        },
        {
          label: '执行裁定文书号',
          prop: 'caseNumber1'
        },
        {
          label: '执行事项',
          prop: 'item'
        },
        {
          label: '冻结股权金额',
          prop: 'money',
          align: 'right'
        }
      ]
      this.loading_table = true
      shares_freeze({ companyId: csfId, page: this.dialogPage.pageNo, size: this.dialogPage.pageSize })
        .then((res) => {
          this.dialogData.push(...res.result)
          this.dialogTableEnd = res.total <= this.dialogData.length
          this.loading_table = false
        })
        .catch((err) => {
          this.dialogData = []
          this.loading_table = false
          this.dialogTableEnd = true
        })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true) // 监听（绑定）滚轮滚动事件
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true) //  离开页面清除（移除）滚轮滚动事件
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
