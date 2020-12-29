<template>
  <el-container class="layout">
    <el-header style="height: 60px">
      <head-com></head-com>
    </el-header>
    <el-container style="height: calc(100% - 60px); position: relative">
      <el-aside width="200px" v-if="showSiderbar">
        <sider-com></sider-com>
        <div class="tool-main">
          <div class="item" @click="pageTo('/stockCustom/all', false, true)">
            <i class="icon-img icon-all"></i>
            全行客户
          </div>
          <div class="item" @click="pageTo('/pillar/index', false, true)">
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
import siderCom from '@components/public/siderBar'
import pageTo from '@/mixins/chart'
export default {
  computed: {
    showSiderbar() {
      return !['/stockCustom/all', '/pillar/index', '/pillar/chart'].includes(this.$route.path)
    }
  },
  mixins: [pageTo],
  components: {
    headCom,
    footCom,
    siderCom
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/layout';
</style>
