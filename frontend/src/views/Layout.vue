<template>
  <el-container id="layout">
    <el-header height="60px">
      <head-com></head-com>
    </el-header>
    <el-container style="height: calc(100% - 60px); position: relative">
      <el-aside width="200px" v-if="showSiderbar">
        <sider-com></sider-com>
        <div class="tool-main">
          <div class="item" @click="pageTo('/stockCustom/all', '_blank')">
            <i class="icon-img icon-all"></i>
            全行客户
          </div>
          <div class="item" @click="pageTo('/stockCustom/index', '_blank')">
            <i class="icon-img icon-pillar"></i>
            支柱产业
          </div>
        </div>
      </el-aside>
      <el-main style="overflow: auto; background-color: #f4f6f9">
        <router-view></router-view>
        <div class="footer">@copyright 重庆银行互联网金融部｜登录IP：172.16.238.219 上次登录时间：2020-11-25</div>
      </el-main>
    </el-container>
  </el-container>
</template>
// <script>
import headCom from '@components/public/head'
import siderCom from '@components/public/siderBar'
export default {
  data() {
    return {}
  },
  computed: {
    showSiderbar() {
      return !['/stockCustom/all', '/pillar/index', '/pillar/chart'].includes(this.$route.path)
    }
  },
  components: {
    headCom,
    siderCom
  },
  methods: {
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
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/layout';
</style>
