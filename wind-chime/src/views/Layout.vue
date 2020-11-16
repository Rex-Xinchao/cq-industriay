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
        <div class="tool-main" id="tool" :style="{ bottom: `${bottom}px` }">
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
// <script>
import headCom from '@components/public/head'
import siderCom from '@components/public/siderbar'
export default {
  data() {
    return {
      bottom: 100
    }
  },
  components: {
    headCom,
    siderCom
  },
  methods: {
    handleScroll(e) {
      this.bottom = 100 - document.documentElement.scrollTop
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true) // 监听（绑定）滚轮滚动事件
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true) //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>
<style lang="scss" scoped>
.tool-main {
  position: absolute;
  right: 40px;
  height: 100px;
  width: 40px;

  .item {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #4070FF;
    margin-bottom: 20px;
    cursor: pointer;

    &:last-of-type {
      width: 40px;
      height: 40px;
      background-color: #41CC8B;
    }
  }
}
</style>
