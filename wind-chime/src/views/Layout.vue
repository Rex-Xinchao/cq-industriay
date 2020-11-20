<template>
  <el-container id="layout">
    <el-header height="60px">
      <head-com></head-com>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sider-com></sider-com>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
// <script>
import headCom from '@components/public/head'
import siderCom from '@components/public/siderbar'
export default {
  data() {
    return {}
  },
  components: {
    headCom,
    siderCom
  },
  methods: {}
}
</script>
