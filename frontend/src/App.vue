<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    handleScroll() {
      let target = document.getElementsByClassName('el-main')[0]
      if (!target) return
      if (!target.scrollTo) {
        // 兼容ie
        target.scrollLeft = 0
        target.scrollTop = 0
      } else {
        target.scrollTo(0, 0)
      }
    },
    handleRouterQuery() {
      let code = this.$route.query && this.$route.query.code
      let name = this.$route.query && this.$route.query.name
      let regionCode = this.$route.query && this.$route.query.regionCode
      if (code && name) {
        this.$store.dispatch('setIndustry', { code, name })
      }
      if (regionCode && name) {
        this.$store.dispatch('setRegion', { code: regionCode, name: name })
      }
    }
  },
  updated() {
    this.handleScroll()
    this.handleRouterQuery()
  }
}
</script>
<style lang="scss">
@import '~@/assets/styles/common/theme';
@import '~@/assets/styles/common/inherit';
</style>
