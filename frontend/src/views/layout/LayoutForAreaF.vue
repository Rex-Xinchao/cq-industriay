<template>
  <el-container class="layout">
    <el-header style="height: 60px">
      <head-com></head-com>
    </el-header>
    <el-container style="height: calc(100% - 60px); position: relative">
      <el-aside width="200px">
        <el-menu
          ref="menu"
          :default-active="activeName"
          class="sidebar"
          @select="pageTo"
          :default-openeds="['/finance', '/finance/status', '/finance/incomes']"
        >
          <el-submenu v-for="(item, index) in menu" :index="`/${item.page}`" :key="`/${item.page}`">
            <template slot="title">
              <i class="icon-img icon-main" :class="`icon-${item.imgName}`"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-submenu
              v-for="(child, index) in item.children"
              :index="`/${item.page}/${child.page}`"
              :key="`/${item.page}/${child.page}`"
            >
              <template slot="title">
                <i
                  class="icon-img icon-sub"
                  :class="`icon-${child.page} ${$route.path === '/' + item.page + '/' + child.page ? 'active' : ''}`"
                ></i>
                {{ child.name }}
              </template>
              <el-menu-item
                v-for="(grandChild, index) in child.children"
                :index="`/${item.page}/${child.page}?id=${grandChild.id}`"
                :key="`/${item.page}/${child.page}?id=${grandChild.id}`"
              >
                {{ grandChild.name }}
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        <div class="tool-main">
          <div class="item" @click="pageTo('/stockCustom/all', '_blank')">
            <i class="icon-img icon-all"></i>
            全行客户
          </div>
          <div class="item" @click="pageTo('/pillar/index', '_blank')">
            <i class="icon-img icon-pillar"></i>
            支柱产业
          </div>
        </div>
      </el-aside>
      <el-main style="overflow: auto; background-color: #f4f6f9">
        <router-view></router-view>
        <foot-com></foot-com>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import headCom from '@components/public/head'
import footCom from '@components/public/foot'
export default {
  data() {
    const vm = this
    return {
      activeName: `${vm.$route.path}${vm.$route.query.id ? '?id=' + vm.$route.query.id : '?id=tag_1'}`,
      menu: [
        {
          name: '区域经济',
          imgName: 'financeMain',
          page: 'finance',
          children: [
            {
              page: 'status',
              name: '区域经济状况',
              children: [
                {
                  name: 'GDP及产业结构',
                  id: 'tag_1'
                },
                {
                  name: '工业与投资',
                  id: 'tag_2'
                },
                {
                  name: '进出口',
                  id: 'tag_3'
                },
                {
                  name: '消费收入和人口',
                  id: 'tag_4'
                },
                {
                  name: '存贷款',
                  id: 'tag_5'
                }
              ]
            },
            {
              page: 'incomes',
              name: '财政收支及债务',
              children: [
                {
                  name: '一般公共预算收支',
                  id: 'tag_1'
                },
                {
                  name: '政府性基金收支',
                  id: 'tag_2'
                },
                {
                  name: '国有资本经营收支',
                  id: 'tag_3'
                },
                {
                  name: '地方债务',
                  id: 'tag_4'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    headCom,
    footCom
  },
  methods: {
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
    pageTo(route, type = '_self') {
      let [path, query] = route.split('?')
      if (path === this.$route.path) {
        let id = query && query.split('=')[1]
        if (!id) return
        this.scrollTo(id)
      } else {
        let { regionCode, name } = { ...this.$route.query }
        if (type === '_blank') {
          let url = this.$router.resolve({
            path: path,
            query: { regionCode, name }
          })
          window.open(url.href)
        } else {
          this.$router.push({
            path: path,
            query: { regionCode, name }
          })
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/layout';
.icon-main {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  &.icon-financeMain {
    background-image: url(~@/assets/imgs/siderbar/area.png);
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
