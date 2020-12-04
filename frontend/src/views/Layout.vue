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
        <div class="item_last">
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
.siderbar-item {
  width: 60px;
  height: 60px;
  text-align: center;
  margin: 24px auto 38px auto;
  cursor: pointer;

  &:hover {
    background-color: #f4f6f9;
  }

  i {
    display: block;
    width: 36px;
    height: 36px;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: #25211f;
    line-height: 16px;
  }

  &:nth-of-type(1) {
    i {
      background-image: url(~@/assets/imgs/siderbar/analysisMain.svg);
    }
  }
  &:nth-of-type(2) {
    i {
      background-image: url(~@/assets/imgs/siderbar/baseMain.svg);
    }
  }
  &:nth-of-type(3) {
    i {
      background-image: url(~@/assets/imgs/siderbar/baseMain.svg);
    }
  }
  &:nth-of-type(4) {
    i {
      background-image: url(~@/assets/imgs/siderbar/stockMain.svg);
    }
  }
}

.item_last {
  position: absolute;
  width: 70px;
  bottom: 0;
  .siderbar-item {
    padding: 6px 0;
    box-sizing: border-box;

    i {
      display: block;
      width: 28px;
      height: 28px;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0 auto;
    }

    .icon-pillar {
      width: 28px;
      height: 28px;
      background-image: url(~@/assets/imgs/siderbar/main.svg);
    }

    .icon-all {
      width: 28px;
      height: 28px;
      background-image: url(~@/assets/imgs/siderbar/all.svg);
    }
  }
}

.sider-sub {
  position: absolute;
  width: 150px;
  height: 100%;
  top: 0;
  left: 70px;
  background-color: white;
  z-index: 200000;
  box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.03);
  padding: 8px 12px;

  .icon {
    border: 1px solid #d9d9d9;
    color: #595959;
    cursor: pointer;
    line-height: 22px;
    padding: 0 2px;
    background-color: white;
  }

  ul {
    display: block;
    width: 100%;
    margin-top: 38px;

    li {
      display: block;
      width: 100%;
      line-height: 36px;
      font-size: 14px;
      font-weight: 400;
      color: #94979b;
      text-align: center;
      cursor: pointer;

      &:hover {
        color: #25211f;
      }

      &.active {
        color: #25211f;
      }
    }
  }
}

.footer {
  font-size: 12px;
  text-align: center;
  padding-bottom: 24px;
  background-color: #f4f6f9;
}
</style>
