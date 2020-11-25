<template>
  <el-container id="layout">
    <el-header height="60px">
      <head-com></head-com>
    </el-header>
    <el-container style="height: calc(100% - 60px)">
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
  computed: {
    showSiderbar() {
      return !['/stockCustom/all'].includes(this.$route.path)
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
.tool-main {
  width: 200px;
  height: 50px;
  padding-top: 10px;
  box-sizing: border-box;
  border-top: 1px solid #eeeeee;

  .item {
    font-size: 14px;
    display: inline-block;
    width: 50%;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
  }

  .icon-pillar {
    vertical-align: top;
    width: 16px;
    height: 20px;
    background-position-y: 2px;
    margin: 0 4px 0 8px;
    background-image: url(~@/assets/imgs/siderbar/main.svg);
  }

  .icon-all {
    vertical-align: top;
    width: 16px;
    height: 20px;
    background-position-y: 2px;
    margin: 0 4px 0 8px;
    background-image: url(~@/assets/imgs/siderbar/all.svg);
  }
}
</style>
