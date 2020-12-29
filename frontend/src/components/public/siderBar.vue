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
        v-for="(child, index) in item.children"
        :index="`/${item.page}/${child.page}`"
        :key="`/${item.page}/${child.page}`"
      >
        <i
          class="icon-img icon-sub"
          :class="`icon-${child.page} ${$route.path === '/' + item.page + '/' + child.page ? 'active' : ''}`"
        ></i>
        {{ child.name }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import pageTo from '@/mixins/pageTo'
export default {
  data() {
    const vm = this
    return {
      activeName: vm.$route.path,
      menu: [
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
            {
              page: 'grow',
              name: '成长能力'
            },
            {
              page: 'profit',
              name: '盈利能力'
            },
            {
              page: 'repay',
              name: '偿还能力'
            },
            {
              page: 'business',
              name: '运营能力'
            },
            {
              page: 'product',
              name: '业务指标'
            },
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
              name: '存量客户图像'
            }
          ]
        }
      ]
    }
  },
  mixins: [pageTo],
  methods: {
    onSelectChange(path) {
      if (path === this.$route.path) return
      this.pageTo(path, true)
    }
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
  &.icon-env {
    background-image: url(~@/assets/imgs/siderbar/env.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/env-active.svg);
    }
  }
  &.icon-prospect {
    background-image: url(~@/assets/imgs/siderbar/prospect.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/prospect-active.svg);
    }
  }
  &.icon-policy {
    background-image: url(~@/assets/imgs/siderbar/policy.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/policy-active.svg);
    }
  }
  &.icon-compete {
    background-image: url(~@/assets/imgs/siderbar/compete.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/compete-active.svg);
    }
  }
  &.icon-risk {
    background-image: url(~@/assets/imgs/siderbar/risk.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/risk-active.svg);
    }
  }
  &.icon-customer {
    background-image: url(~@/assets/imgs/siderbar/customer.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/customer-active.svg);
    }
  }
  &.icon-information {
    background-image: url(~@/assets/imgs/siderbar/information.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/information-active.svg);
    }
  }
  &.icon-grow {
    background-image: url(~@/assets/imgs/siderbar/grow.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/grow-active.svg);
    }
  }
  &.icon-profit {
    background-image: url(~@/assets/imgs/siderbar/profit.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/profit-active.svg);
    }
  }
  &.icon-repay {
    background-image: url(~@/assets/imgs/siderbar/repay.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/repay-active.svg);
    }
  }
  &.icon-business {
    background-image: url(~@/assets/imgs/siderbar/business.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/business-active.svg);
    }
  }
  &.icon-finance {
    background-image: url(~@/assets/imgs/siderbar/finance.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/finance-active.svg);
    }
  }
  &.icon-boom {
    background-image: url(~@/assets/imgs/siderbar/boomChart.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/boomChart-active.svg);
    }
  }
  &.icon-risk {
    background-image: url(~@/assets/imgs/siderbar/riskChart.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/riskChart-active.svg);
    }
  }
  &.icon-index {
    background-image: url(~@/assets/imgs/siderbar/stockCustom.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/stockCustom-active.svg);
    }
  }
  &.icon-status {
    background-image: url(~@/assets/imgs/siderbar/status.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/status_active.svg);
    }
  }
  &.icon-incomes {
    background-image: url(~@/assets/imgs/siderbar/incomes.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/incomes_active.svg);
    }
  }
  &.icon-product {
    background-image: url(~@/assets/imgs/siderbar/icon-product.svg);
    &.active {
      background-image: url(~@/assets/imgs/siderbar/icon-product_active.svg);
    }
  }
}
</style>
<style lang="scss">
@import '~@/assets/styles/common/sider';
</style>