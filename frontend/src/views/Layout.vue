<template>
  <el-container class="layout">
    <el-header style="height: 60px">
      <head-com></head-com>
    </el-header>
    <el-container style="height: calc(100% - 60px); position: relative">
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
  components: {
    headCom,
    footCom
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/layout';
</style>
