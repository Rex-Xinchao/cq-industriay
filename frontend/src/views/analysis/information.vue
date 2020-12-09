<template>
  <div class="main" id="newsTable">
    <h1 class="main-title">行业舆情</h1>
    <div class="main-body">
      <newsList></newsList>
    </div>
  </div>
</template>
<script>
import newsList from '@/components/analysis/information/news'
export default {
  data() {
    return {}
  },
  components: { newsList }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.main {
  min-height: calc(100% - 40px);
}
.main-body {
  width: 100%;
  height: auto !important;
  box-sizing: border-box;
  background-color: white;
}
</style>