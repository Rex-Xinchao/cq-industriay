<template>
  <div class="main">
    <h1 class="main-title">
      行业环境
      <span class="sign">{{ industry }}</span>
    </h1>
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
            class="menu"
            @select="getHead"
            :default-openeds="['up', 'mid', 'down']"
          >
            <el-submenu v-for="(item, index) in menu" :index="item.code" :key="`${item.code}`">
              <template slot="title">
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item
                v-for="(child, index) in item.children"
                :index="child.code"
                :key="`${index}_child`"
                v-show="child.show"
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
        <toggle-chart ref="chart" :activeName="activeHeadName"></toggle-chart>
      </div>
    </div>
  </div>
</template>
<script>
import resize from '@/mixins/resize'
import toggleChart from '@/components/analysis/env/toggle'
import { menuData, headData } from '@/mockData/env'
import { mapGetters } from 'vuex'
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
        down: '下游'
      }
    }
  },
  mixins: [resize],
  components: { toggleChart },
  computed: {
    ...mapGetters(['industry']),
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
    },
    activeMenu() {
      this.getHead()
    }
  },
  methods: {
    initMenu() {
      this.menuLoding = false
      setTimeout(() => {
        this.menuLoding = false
        this.menu = menuData.map((item) => {
          item.name = this.nameMap[item.code] || this.industry
          item.children.forEach((child) => (child.show = true))
          return item
        })
        this.activeMenu = this.menu[0].children[0].code
      }, 100)
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
    getHead() {
      this.headLoding = true
      setTimeout(() => {
        this.headLoding = false
        this.heads = headData
        this.activeHead = this.heads[0].value
      }, 500)
    }
  },
  mounted() {
    this.initMenu()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
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

      .menu {
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
      border-radius: 4px;

      span {
        display: inline-block;
        vertical-align: top;
        width: 240px;
        height: 22px;
        line-height: 22px;
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 12px;
        margin-bottom: 16px;
        font-size: 12px;
        cursor: pointer;

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
</style>
<style lang="scss">
.left {
  .siderbar {
    .menu {
      .el-submenu__title {
        height: 32px;
        line-height: 32px;
      }
    }
  }
}
</style>