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
          <span class="fr sub-title">全省</span>
        </h1>
        <el-table
          v-loading="loading"
          class="table-main table-head-grey"
          :data="tableData"
          style="width: 100%"
          height="394px"
        >
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center"></el-table-column>
          <el-table-column prop="2019" label="2019" align="center"></el-table-column>
          <el-table-column prop="2018" label="2018" align="center"></el-table-column>
        </el-table>
      </div>
      <div id="tag_2" class="item_100 item-table">
        <h1 class="main-title">
          工业与投资
          <span class="fr sub-title">全省</span>
        </h1>
        <el-table
          v-loading="loading"
          class="table-main table-head-grey"
          :data="tableData"
          style="width: 100%"
          height="394px"
        >
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center"></el-table-column>
          <el-table-column prop="2019" label="2019" align="center"></el-table-column>
          <el-table-column prop="2018" label="2018" align="center"></el-table-column>
        </el-table>
      </div>
      <div id="tag_3" class="item_100 item-table">
        <h1 class="main-title">
          进出口
          <span class="fr sub-title">全省</span>
        </h1>
        <el-table
          v-loading="loading"
          class="table-main table-head-grey"
          :data="tableData"
          style="width: 100%"
          height="394px"
        >
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center"></el-table-column>
          <el-table-column prop="2019" label="2019" align="center"></el-table-column>
          <el-table-column prop="2018" label="2018" align="center"></el-table-column>
        </el-table>
      </div>
      <div id="tag_4" class="item_100 item-table">
        <h1 class="main-title">
          消费收入和人口
          <span class="fr sub-title">全省</span>
        </h1>
        <el-table
          v-loading="loading"
          class="table-main table-head-grey"
          :data="tableData"
          style="width: 100%"
          height="394px"
        >
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center"></el-table-column>
          <el-table-column prop="2019" label="2019" align="center"></el-table-column>
          <el-table-column prop="2018" label="2018" align="center"></el-table-column>
        </el-table>
      </div>
      <div id="tag_5" class="item_100 item-table item_last">
        <h1 class="main-title">
          存贷款
          <span class="fr sub-title">全省</span>
        </h1>
        <el-table
          v-loading="loading"
          class="table-main table-head-grey"
          :data="tableData"
          style="width: 100%"
          height="394px"
        >
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center"></el-table-column>
          <el-table-column prop="2019" label="2019" align="center"></el-table-column>
          <el-table-column prop="2018" label="2018" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import ceilSubject from '@/components/public/ceil-subject'
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
      tableData: [
        {
          name: '工业增加值（亿元）',
          2020: 1000,
          2019: 1000,
          2018: 1000
        }
      ],
      idList: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5']
    }
  },
  components: { ceilSubject },
  watch: {
    area: {
      immediate: true,
      handler(data) {
        this.getData()
      }
    }
  },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
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