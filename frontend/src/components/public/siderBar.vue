<template>
  <el-menu
    ref="menu"
    :default-active="activeName"
    class="sidebar"
    @select="onSelectChange"
    :default-openeds="['/analysis', '/base', '/industrial', '/stockCustom']"
  >
    <el-submenu v-for="(item, index) in menu" :index="`/${item.page}`" :key="`/${item.page}`">
      <template slot="title">
        <i class="icon-img icon-main" :class="`icon-${item.imgName}`"></i>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        :class="`menu-${item.page}`"
        v-for="(child, index) in item.children"
        :index="`/${item.page}/${child.page}`"
        :key="index"
      >
        <i
          class="icon-img icon-sub"
          :class="{
            active: defaultActive === `/${item.page}/${child.page}`
          }"
        ></i>
        <span
          :class="{
            active: defaultActive === `/${item.page}/${child.page}`
          }"
        >
          {{ child.name }}
        </span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import pageTo from '@/mixins/pageTo'
import { mapGetters } from 'vuex'
export default {
  data() {
    const vm = this
    return {
      activeName: vm.defaultActive,
      menu: []
    }
  },
  mixins: [pageTo],
  computed: {
    ...mapGetters(['baseMenu']),
    defaultActive() {
      return `${this.$route.path}${this.$route.query.abilityType ? `?${this.$route.query.abilityType}` : ''}`
    }
  },
  watch: {
    baseMenu: {
      immediate: true,
      handler(data) {
        if (!data) return
        const baseMenu = data.map((item) => {
          return {
            page: item.page,
            name: item.name
          }
        })
        this.menu = [
          {
            name: '行业分析',
            imgName: 'analysisMain',
            page: 'analysis',
            children: [
              {
                page: 'env',
                name: '产业环境'
              },
              {
                page: 'prospect',
                name: '行业前景'
              },
              {
                page: 'policy',
                name: '政策导向'
              },
              {
                page: 'compete',
                name: '竞争格局'
              },
              {
                page: 'risk',
                name: '行业风险'
              },
              {
                page: 'customer',
                name: '行业货客'
              },
              {
                page: 'information',
                name: '行业舆情'
              }
            ]
          },
          {
            name: '行业基准',
            imgName: 'baseMain',
            page: 'base',
            children: [
              ...baseMenu,
              {
                page: 'finance',
                name: '龙头财务'
              }
            ]
          },
          {
            name: '产业链图谱',
            imgName: 'industrialMain',
            page: 'industrial',
            children: [
              {
                page: 'boom',
                name: '景气图谱'
              },
              {
                page: 'risk',
                name: '风险图谱'
              }
            ]
          },
          {
            name: '存量客户',
            imgName: 'stockMain',
            page: 'stockCustom',
            children: [
              {
                page: 'index',
                name: '存量客户画像'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    onSelectChange(path) {
      if (path === this.$route.path) return
      if (path.includes('/ability')) {
        let [p, type] = path.split('?')
        this.pageTo(p, { abilityType: type })
      } else {
        this.pageTo(path, true)
      }
    }
  },
  updated() {
    this.activeName = `${this.$route.path}${this.$route.query.abilityType ? `?${this.$route.query.abilityType}` : ''}`
  }
}
</script>
<style lang="scss" scoped>
.icon-main {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  &.icon-analysisMain {
    background-image: url(~@/assets/imgs/siderbar/analysisMain.svg);
  }
  &.icon-baseMain {
    background-image: url(~@/assets/imgs/siderbar/baseMain.svg);
  }
  &.icon-industrialMain {
    background-image: url(~@/assets/imgs/siderbar/industrialMain.svg);
  }
  &.icon-stockMain {
    background-image: url(~@/assets/imgs/siderbar/stockMain.svg);
  }
}
.icon-sub {
  width: 16px;
  height: 18px;
  margin-right: 8px;
}
.active {
  color: #409eff;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/styles/common/sider';
.menu-analysis {
  &:nth-of-type(1) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/env.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/env-active.svg);
      }
    }
  }
  &:nth-of-type(2) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/prospect.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/prospect-active.svg);
      }
    }
  }
  &:nth-of-type(3) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/policy.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/policy-active.svg);
      }
    }
  }
  &:nth-of-type(4) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/compete.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/compete-active.svg);
      }
    }
  }
  &:nth-of-type(5) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/risk.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/risk-active.svg);
      }
    }
  }
  &:nth-of-type(6) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/customer.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/customer-active.svg);
      }
    }
  }
  &:nth-of-type(7) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/information.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/information-active.svg);
      }
    }
  }
}
.menu-base {
  &:nth-of-type(1) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/icon-product.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/icon-product_active.svg);
      }
    }
  }
  &:nth-of-type(2) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/grow.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/grow-active.svg);
      }
    }
  }
  &:nth-of-type(3) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/profit.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/profit-active.svg);
      }
    }
  }
  &:nth-of-type(4) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/repay.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/repay-active.svg);
      }
    }
  }
  &:nth-of-type(5) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/business.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/business-active.svg);
      }
    }
  }
  &:last-of-type {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/finance.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/finance-active.svg);
      }
    }
  }
}
.menu-industrial {
  &:nth-of-type(1) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/boomChart.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/boomChart-active.svg);
      }
    }
  }
  &:nth-of-type(2) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/riskChart.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/riskChart-active.svg);
      }
    }
  }
}
.menu-stockCustom {
  &:nth-of-type(1) {
    .icon-sub {
      background-image: url(~@/assets/imgs/siderbar/stockCustom.svg);
      &.active {
        background-image: url(~@/assets/imgs/siderbar/stockCustom-active.svg);
      }
    }
  }
}
</style>
      