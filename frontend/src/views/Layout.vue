<template>
  <el-container id="layout">
    <el-header height="60px">
      <head-com></head-com>
    </el-header>
    <el-container style="height: calc(100% - 60px); position: relative">
      <el-aside width="70px" v-if="showSiderbar">
        <div class="siderbar-item" v-for="item in menu" :key="item.page" @click="show(item)">
          <i></i>
          <span>{{ item.name }}</span>
        </div>
        <div class="siderbar_footer">
          <div class="siderbar-item" @click="pageTo('/stockCustom/all', '_blank')">
            <i class="icon-all"></i>
            <span>全行客户</span>
          </div>
          <div class="siderbar-item" @click="pageTo('/pillar/index', '_blank')">
            <i class="icon-pillar"></i>
            <span>支柱产业</span>
          </div>
        </div>
      </el-aside>
      <div class="sider-sub" v-if="showSub">
        <i class="icon el-icon-s-fold fr" @click="showSub = false"></i>
        <ul>
          <li
            v-for="item in subMenu"
            :key="item.page"
            :class="{ active: `/${path_f}/${item.page}` === $route.path }"
            @click="pageTo(`/${path_f}/${item.page}`)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <el-main style="overflow: auto; background-color: #f4f6f9">
        <router-view></router-view>
        <div class="footer">@copyright 重庆银行互联网金融部｜登录IP：172.16.238.219 上次登录时间：2020-11-25</div>
      </el-main>
    </el-container>
  </el-container>
</template>
// <script>
import headCom from '@components/public/head'
export default {
  data() {
    return {
      showSub: false,
      path_f: null,
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
        },
        {
          name: '区域经济',
          imgName: 'financeMain',
          page: 'finance',
          children: [
            {
              page: 'status',
              name: '区域经济状况'
            },
            {
              page: 'incomes',
              name: '财政收支及债务'
            }
          ]
        }
      ],
      subMenu: []
    }
  },
  computed: {
    showSiderbar() {
      return !['/stockCustom/all', '/pillar/index', '/pillar/chart'].includes(this.$route.path)
    }
  },
  components: {
    headCom
  },
  methods: {
    show(data) {
      this.path_f = data.page
      this.subMenu = data.children
      this.showSub = true
    },
    pageTo(path, type = '_self') {
      if (path === this.$route.path) return
      if (type === '_blank') {
        let url = this.$router.resolve({
          path: path
        })
        window.open(url.href)
      } else {
        this.$router.push(path)
      }
    }
  },
  mounted() {
    document.onclick = (e) => {
      let hide = true
      e.path.forEach((item) => {
        let className = (item && item.className) || ''
        if (typeof className !== 'string') className = ''
        if (className.includes('el-aside') || className.includes('sider-sub')) {
          hide = false
        }
      })
      if (hide) {
        this.showSub = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/layout';
</style>
