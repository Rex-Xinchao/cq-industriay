<template>
  <div class="main growth-main">
    <div class="item-menu">
      <h1 class="main-title">
        地区经济状况：
        <area-search v-model="area" class="area-search" :showBtn="false" :startCode="start"></area-search>
      </h1>
      <el-tabs class="crumbs" v-model="activeType" @tab-click="scrollTo(activeType)">
        <el-tab-pane label="GDP及产业结构" name="tag_1"></el-tab-pane>
        <el-tab-pane label="工业与投资" name="tag_2"></el-tab-pane>
        <el-tab-pane label="进出口" name="tag_3"></el-tab-pane>
        <el-tab-pane label="消费收入和人口" name="tag_4"></el-tab-pane>
        <el-tab-pane label="存贷款" name="tag_5"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="item-box">
      <div id="tag_1" class="item_100 item-table">
        <h1 class="main-title">
          GDP及产业结构
          <span class="sub-title_fr">全省</span>
        </h1>
        <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData_1" style="width: 100%">
          <el-table-column prop="name" label="指标" align="left">
            <template slot-scope="scope">
              <ceil-subject :dataMap="scope.row" :unit="scope.row.unit" :name="scope.row.name">
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in keys_1"
            :key="index"
            :prop="item"
            :label="item"
            align="right"
          ></el-table-column>
        </el-table>
      </div>
      <div id="tag_2" class="item_100 item-table">
        <h1 class="main-title">
          工业与投资
          <span class="sub-title_fr">全省</span>
        </h1>
        <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData_2" style="width: 100%">
          <el-table-column prop="name" label="指标" align="left">
            <template slot-scope="scope">
              <ceil-subject :dataMap="scope.row" :unit="scope.row.unit" :name="scope.row.name">
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in keys_2"
            :key="index"
            :prop="item"
            :label="item"
            align="right"
          ></el-table-column>
        </el-table>
      </div>
      <div id="tag_3" class="item_100 item-table">
        <h1 class="main-title">
          进出口
          <span class="sub-title_fr">全省</span>
        </h1>
        <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData_3" style="width: 100%">
          <el-table-column prop="name" label="指标" align="left">
            <template slot-scope="scope">
              <ceil-subject :dataMap="scope.row" :unit="scope.row.unit" :name="scope.row.name">
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in keys_3"
            :key="index"
            :prop="item"
            :label="item"
            align="right"
          ></el-table-column>
        </el-table>
      </div>
      <div id="tag_4" class="item_100 item-table">
        <h1 class="main-title">
          消费收入和人口
          <span class="sub-title_fr">全省</span>
        </h1>
        <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData_4" style="width: 100%">
          <el-table-column prop="name" label="指标" align="left">
            <template slot-scope="scope">
              <ceil-subject :dataMap="scope.row" :unit="scope.row.unit" :name="scope.row.name">
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in keys_4"
            :key="index"
            :prop="item"
            :label="item"
            align="right"
          ></el-table-column>
        </el-table>
      </div>
      <div id="tag_5" class="item_100 item-table item_last">
        <h1 class="main-title">
          存贷款
          <span class="sub-title_fr">全省</span>
        </h1>
        <el-table v-loading="loading" class="table-main table-head-grey" :data="tableData_5" style="width: 100%">
          <el-table-column prop="name" label="指标" align="left">
            <template slot-scope="scope">
              <ceil-subject :dataMap="scope.row" :unit="scope.row.unit" :name="scope.row.name">
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in keys_5"
            :key="index"
            :prop="item"
            :label="item"
            align="right"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import ceilSubject from '@/components/public/ceil-subject'
import { getStatusTable } from '@/api/finance'
export default {
  data() {
    return {
      start: {
        label: '重庆',
        value: 'GS955525'
      },
      area: null,
      activeType: 'tag_1',
      loading: false,
      tableData_1: [],
      keys_1: [],
      tableData_2: [],
      keys_2: [],
      tableData_3: [],
      keys_3: [],
      tableData_4: [],
      keys_4: [],
      tableData_5: [],
      keys_5: [],
      idList: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5']
    }
  },
  components: { ceilSubject },
  watch: {
    area() {
      this.getData()
    }
  },
  methods: {
    getData() {
      this.loading = true
      let list = []
      for (let i = 1; i < 6; i++) {
        list.push(getStatusTable({ type: i, area: this.area }))
      }
      Promise.all(list)
        .then((res) => {
          this.loading = false
          this.keys_1 = null
          this.keys_2 = null
          this.keys_3 = null
          this.keys_4 = null
          this.keys_5 = null
          res.forEach((item, index) => {
            item.result = item.result || []
            item.result.forEach((obj) => {
              for (let key in obj) {
                if (obj[key] && typeof obj[key] === 'number') {
                  obj[key] = obj[key].toFixed(2)
                } else {
                  obj[key] = obj[key] || '--'
                }
              }
              if (!this[`keys_${index + 1}`]) {
                this[`keys_${index + 1}`] = []
                for (let key in obj) {
                  if (!['name', 'unit'].includes(key)) {
                    this[`keys_${index + 1}`].push(key)
                  }
                }
              }
            })
          })
          this.tableData_1 = res[0].result
          this.tableData_2 = res[1].result
          this.tableData_3 = res[2].result
          this.tableData_4 = res[3].result
          this.tableData_5 = res[4].result
        })
        .catch((e) => {
          this.loading = false
          this.tableData_1 = []
          this.tableData_2 = []
          this.tableData_3 = []
          this.tableData_4 = []
          this.tableData_5 = []
        })
    },
    scrollTo(id) {
      let top = document.getElementById(id).offsetTop - 120
      const target = document.querySelector('.el-main')
      if (!target.scrollTo) {
        // 兼容ie
        target.scrollLeft = 0
        target.scrollTop = top
      } else {
        target.scrollTo(0, top)
      }
    },
    handleScroll() {
      let scrollTop = getScroll(document.querySelector('.el-main'), true)
      for (let i = this.idList.length - 1; i >= 0; i--) {
        let id = this.idList[i]
        let top = document.getElementById(id) && document.getElementById(id).offsetTop - 120 - 240
        if (top && scrollTop >= top) {
          this.activeType = id
          break
        }
      }

      function getScroll(target, top) {
        const prop = top ? 'pageYOffset' : 'pageXOffset'
        const method = top ? 'scrollTop' : 'scrollLeft'

        let ret = target[prop]

        if (typeof ret !== 'number') {
          ret = target[method]
        }
        return ret
      }
    }
  },
  mounted() {
    document.querySelector('.el-main').addEventListener('scroll', this.handleScroll, false)
  },
  destroyed() {
    document.querySelector('.el-main').removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/common/component';
@import '~@/assets/styles/finance';
</style>