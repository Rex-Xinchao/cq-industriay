<template>
  <div class="main growth-main">
    <div class="item-box">
      <div class="item_100 item-tab item-menu">
        <h1 class="main-title">
          财政收支及债务：
          <el-select v-model="region" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </h1>
        <el-tabs
          style="width: calc(100% - 40px); height: 60px; line-height: 60px; padding: 0 20px; background: white"
          v-model="activeType"
          @tab-click="scrollTo(activeType)"
        >
          <el-tab-pane label="一般公共预算收支" name="tag_1"></el-tab-pane>
          <el-tab-pane label="政府性基金收支" name="tag_2"></el-tab-pane>
          <el-tab-pane label="国有资本经营收支" name="tag_3"></el-tab-pane>
          <el-tab-pane label="地方债务" name="tag_4"></el-tab-pane>
        </el-tabs>
      </div>
      <div id="tag_1" class="item_100 item-table">
        <h1 class="main-title">一般公共预算收支</h1>
        <el-table class="table-main table-head-grey" :data="tableData" style="width: 100%" height="394px">
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center">></el-table-column>
          <el-table-column prop="2019" label="2019" align="center">></el-table-column>
          <el-table-column prop="2018" label="2018" align="center">></el-table-column>
        </el-table>
      </div>
      <div id="tag_2" class="item_100 item-table">
        <h1 class="main-title">政府性基金收支</h1>
        <el-table class="table-main table-head-grey" :data="tableData" style="width: 100%" height="394px">
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center">></el-table-column>
          <el-table-column prop="2019" label="2019" align="center">></el-table-column>
          <el-table-column prop="2018" label="2018" align="center">></el-table-column>
        </el-table>
      </div>
      <div id="tag_3" class="item_100 item-table">
        <h1 class="main-title">国有资本经营收支</h1>
        <el-table class="table-main table-head-grey" :data="tableData" style="width: 100%" height="394px">
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center">></el-table-column>
          <el-table-column prop="2019" label="2019" align="center">></el-table-column>
          <el-table-column prop="2018" label="2018" align="center">></el-table-column>
        </el-table>
      </div>
      <div id="tag_4" class="item_100 item-table">
        <h1 class="main-title">地方债务</h1>
        <el-table class="table-main table-head-grey" :data="tableData" style="width: 100%" height="394px">
          <el-table-column prop="name" label="指标" align="center">
            <template slot-scope="scope">
              <ceil-subject>
                <i class="icon-img icon-bar"></i>
              </ceil-subject>
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="2020" label="2020" align="center">></el-table-column>
          <el-table-column prop="2019" label="2019" align="center">></el-table-column>
          <el-table-column prop="2018" label="2018" align="center">></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import ceilSubject from '@/components/public/ceil-subject'
import baseTable from '@/components/base/table'
export default {
  data() {
    return {
      activeType: 'tag_1',
      loading: false,
      tableData: [],
      idList: ['tag_1', 'tag_2', 'tag_3', 'tag_4'],
      region: 1,
      options: [
        {
          label: '重庆',
          value: 1
        }
      ]
    }
  },
  methods: {
    scrollTo(id) {
      let top = document.getElementById(id).offsetTop - 128
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
        let top = document.getElementById(id) && document.getElementById(id).offsetTop - 128 - 60
        if (i === this.idList.length - 1) {
          top -= 240
        }
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
@import '~@/assets/styles/view';
@import '~@/assets/styles/component';
.item-menu {
  position: sticky;
  top: 0;
  z-index: 10000;
  background-color: #f4f6f9 !important;
  height: 108px !important;
  flex-direction: column;
  box-sizing: border-box;
}
.item-table {
  width: 100%;
  height: 480px !important;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  .main-title {
    height: 30px;
    line-height: 30px;
    padding: 0;
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 400;
    color: #000a12;
  }
}
</style>
<style lang="scss">
.growth-main {
  .el-tabs__nav-wrap::after {
    background-color: white !important;
  }
}
</style>