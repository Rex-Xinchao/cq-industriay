<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        龙头财务
        <span class="sign">{{ industry }}</span>
      </h1>
    </div>
    <div class="main-body">
      <div class="filter">
        <span class="filter-label">报告期：</span>
        <span class="filter-item" style="width: 328px">
          <el-date-picker
            style="width: 160px"
            v-model="dateTime"
            type="year"
            :clearable="false"
            placeholder="请选择年份"
            :picker-options="pickerOptions"
          ></el-date-picker>
          <el-select style="width: 160px; margin-left: 8px" v-model="timeType" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
        <span class="filter-label">指标：</span>
        <span class="filter-item">
          <el-select v-model="norm" collapse-tags multiple placeholder="请选择">
            <el-option
              v-for="item in norms"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="norm.includes('')"
            ></el-option>
          </el-select>
        </span>
        <span class="filter-label">市场：</span>
        <span class="filter-item">
          <el-select v-model="market" collapse-tags multiple placeholder="请选择">
            <el-option v-for="item in markets" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </span>
        <span class="filter-label fr">披露期：{{ `${new Date(dateTime).getFullYear()} ${timeType}` || '--' }}</span>
      </div>
      <el-table v-loading="loading" class="table-head-grey" :data="tableData" height="calc(100% - 120px)">
        <el-table-column prop="comName" label="龙头企业" align="center">
          <template slot-scope="scope">
            {{ scope.row.comName ? scope.row.comName : '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="market" label="市场" align="center">
          <template slot-scope="scope">
            {{ scope.row.market ? scope.row.market : '--' }}
          </template>
        </el-table-column>
        <el-table-column
          v-for="item in keyList"
          :prop="item.itemCode"
          :label="item.itemName"
          :key="item.itemCode"
          align="right"
          sortable
          width="250"
        ></el-table-column>
      </el-table>
      <el-pagination
        class="pagination fr"
        background
        layout="prev, pager, next"
        :total="page.total"
        @current-change="currentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { leading_financial } from '@/api/base'
import { converUnit } from '@/libs/utils'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      time: null,
      keyList: [],
      norm: [1, 2, 3, 4, 5],
      norms: [
        {
          label: '业务指标',
          value: 1
        },
        {
          label: '成长指标',
          value: 2
        },
        {
          label: '盈利指标',
          value: 3
        },
        {
          label: '偿债指标',
          value: 4
        },
        {
          label: '运营指标',
          value: 5
        }
      ],
      market: [],
      markets: [
        {
          label: 'A股',
          value: 1
        },
        {
          label: '三板',
          value: 2
        },
        {
          label: '发债',
          value: 3
        }
      ],
      loading: false,
      tableData: [],
      page: {
        total: 100,
        count: 1
      },
      dateTime: new Date().setFullYear(new Date().getFullYear() - 1),
      timeType: 'Q4',
      options: [
        {
          label: '年度',
          value: 'Q4'
        },
        {
          label: '半年度',
          value: 'Q2'
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return (
            time.getTime() > new Date().getTime() - 3600 * 24 * 365 * 1000 ||
            time.getTime() < new Date('2015').getTime()
          )
        }
      }
    }
  },
  computed: {
    ...mapGetters(['industryCode', 'industry', 'baseMenu'])
  },
  watch: {
    dateTime() {
      this.getData()
    },
    timeType() {
      this.getData()
    },
    norm() {
      this.getData()
    },
    market() {
      this.getData()
    }
  },
  methods: {
    converUnit,
    getData() {
      this.loading = true
      let params = {
        rpt: new Date(this.dateTime).getFullYear(),
        timeType: this.timeType,
        industryCode: this.industryCode,
        standardType: this.norm,
        mkt: this.market,
        page: this.page.count,
        size: 20
      }
      leading_financial(params)
        .then((res) => {
          this.loading = false
          this.tableData = res.result
          this.time = res.time
          // todo page && size && total
          let keyList = []
          this.baseMenu.forEach((item) => {
            if (this.norm.includes(Number(item.type))) {
              keyList = keyList.concat(item.items)
            }
          })
          this.keyList = keyList
        })
        .catch((err) => {
          this.loading = false
          this.tableData = []
          this.time = null
        })
    },
    currentChange(data) {
      this.page.count = data
      this.getData()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
.main {
  padding-top: 48px;
  height: calc(100% - 48px);
  .main-body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: white;
    padding: 0 16px;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);

    .filter {
      width: 100%;
      height: 28px;
      line-height: 28px;
      padding: 16px 0;

      .filter-label,
      .filter-item {
        display: inline-block;
        vertical-align: top;
      }

      .filter-item {
        margin-right: 16px;
        width: 160px;
      }

      .filter-label {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
      }

      .fr {
        font-size: 12px;
        font-weight: 400;
        color: #94979b;
      }
    }

    .table-main {
      width: 100%;
    }

    .pagination {
      margin-top: 16px;
    }
  }
}
</style>