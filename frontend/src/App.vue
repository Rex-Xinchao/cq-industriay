<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  updated() {
    let target = document.getElementsByClassName('el-main')[0]
    if (!target.scrollTo) {
      // 兼容ie
      target.scrollLeft = 0
      target.scrollTop = 0
    } else {
      target.scrollTo(0, 0)
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/styles/common/theme';
@import '~@/assets/styles/common/inherit';
</style>
