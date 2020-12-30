<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        行业环境
        <span class="sign">{{ industry }}</span>
      </h1>
    </div>
    <div class="main-body">
      <div class="left" :style="{ width: showSiderbar ? '262px' : '44px' }">
        <div class="siderbar" v-if="showSiderbar">
          <h1>
            &nbsp;
            <i class="icon el-icon-s-fold fr" @click="showSiderbar = false"></i>
          </h1>
          <el-input class="search-main radius_sm" placeholder="请输入指标关键词" v-model="keyword" clearable></el-input>
          <el-menu
            text-color="#94979B"
            active-text-color="#25211F"
            :default-active="activeMenu"
            class="env-com_menu"
            @select="getHead"
            :default-openeds="['up', 'mid', 'down']"
          >
            <el-submenu v-for="(item, index) in menu" :index="item.code" :key="`${item.code}`">
              <template slot="title">
                <span class="menu-item" :title="item.name">{{ item.name }}</span>
              </template>
              <el-menu-item
                v-for="(child, index) in item.children"
                :index="child.code"
                :key="`${index}_child`"
                v-show="child.show"
                :disabled="child.disabled"
              >
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <i v-else class="icon el-icon-s-unfold" @click="showSiderbar = true"></i>
      </div>
      <div class="right" :style="{ width: showSiderbar ? 'calc(100% - 262px)' : 'calc(100% - 44px)' }">
        <div v-loading="headLoding" class="right-head">
          <span
            class="select-item"
            v-for="item in heads"
            :key="item.value"
            :title="item.name"
            :class="{ active: activeHead === item.value }"
            @click="activeHead = item.value"
          >
            {{ item.name }}
          </span>
        </div>
        <toggle-chart :envData="envData" ref="chart" :activeName="activeHeadName"></toggle-chart>
      </div>
    </div>
  </div>
</template>
<script>
import resize from '@/mixins/resize'
import toggleChart from '@/components/analysis/env/toggle'
import { menuData, headData } from '@/mockData/env'
import { mapGetters } from 'vuex'
import { envMenu, envChart } from '@/api/analysis'
export default {
  data() {
    const vm = this
    return {
      showSiderbar: true,
      keyword: null,
      menuLoding: false,
      activeMenu: null,
      menu: [],
      headLoding: false,
      activeHead: 1,
      heads: [],
      loading: false,
      dateTime: [],
      nameMap: {
        up: '上游',
        down: '下游',
        mid: '中游'
      },
      envData: {}
    }
  },
  mixins: [resize],
  components: { toggleChart },
  computed: {
    ...mapGetters(['industry', 'industryCode']),
    activeHeadName() {
      if (!this.activeHead) return null
      let obj = this.heads.find((item) => item.value === this.activeHead)
      if (!obj) return null
      return obj.name
    }
  },
  watch: {
    showSiderbar() {
      this.$nextTick(() => {
        this.$refs.chart.reseize()
      })
    },
    keyword(data) {
      this.filterMenu(data)
    }
  },
  methods: {
    initMenu() {
      this.menuLoding = false
      envMenu({ code: this.industryCode })
        .then((res) => {
          this.menuLoding = false
          this.menu = res.result.map((item) => {
            item.name = this.nameMap[item.code] || this.industry
            item.children.forEach((child) => (child.show = true))
            return item
          })
          this.activeMenu = this.menu[0].children[0].code
          this.getHead(this.activeMenu)
        })
        .catch((err) => {
          this.menuLoding = false
        })
    },
    filterMenu(data) {
      this.menu.forEach((item) => {
        item.children.forEach((item_c) => {
          if (data) {
            item_c.show = item_c.name.indexOf(data) >= 0
          } else {
            item_c.show = true
          }
        })
      })
    },
    getHead(data) {
      this.headLoding = true
      envChart({ code: data })
        .then((res) => {
          this.headLoding = false
          this.heads = res.names || []
          this.activeHead = this.heads[0].value
          this.envData = res
          this.$refs.chart.drawChart()
          this.$refs.chart.getTableData()
        })
        .catch((err) => {
          this.headLoding = false
          this.heads = []
          this.envData = {}
        })
    }
  },
  mounted() {
    this.initMenu()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
.main {
  height: calc(100% - 48px);
  .main-body {
    .left {
      display: inline-block;
      vertical-align: top;
      height: 100%;
      padding-right: 20px;
      box-sizing: border-box;
      .siderbar {
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 2px;
        box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);

        h1 {
          font-size: 16px;
          font-weight: 400;
          color: #000a12;
          line-height: 22px;
          padding: 0;
          margin: 0 0 12px 0;
        }

        .search-main {
          border-radius: 2px;
          margin: 0 0 12px 0;
        }

        .env-com_menu {
          width: 100%;
          height: calc(100% - 64px);
          border: none;
        }
      }

      .icon {
        border: 1px solid #d9d9d9;
        color: #595959;
        cursor: pointer;
        line-height: 22px;
        padding: 0 2px;
        background-color: white;
      }

      .el-icon-s-unfold {
        margin-top: 20px;
      }

      .menu-item {
        display: inline-block;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .right {
      display: inline-block;
      vertical-align: top;
      height: 100%;

      .right-head {
        width: 100%;
        height: 92px;
        padding: 16px 20px;
        background-color: white;
        box-sizing: border-box;
        margin-bottom: 20px;
        border-radius: 2px;
        box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);

        span {
          display: inline-block;
          vertical-align: top;
          width: 240px;
          height: 22px;
          line-height: 22px;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0 12px;
          margin-bottom: 16px;
          font-size: 12px;
          cursor: pointer;
          border-radius: 2px;

          &.active {
            background: #3a84ff;
            color: white;
          }
        }

        @media screen and (max-width: 1440px) {
          span {
            width: auto;
            padding: 0 16px;
          }
        }
      }

      .right-main {
        width: 100%;
        height: calc(100% - 112px);
        background-color: white;
        border-radius: 4px;
        padding: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>