<template>
  <div class="main" id="newsTable">
    <div class="item-menu">
      <h1 class="main-title">行业舆情</h1>
    </div>
    <div class="main-body">
      <newsList class="news-list"></newsList>
    </div>
  </div>
</template>
<script>
import newsList from '@/components/analysis/information/news'
export default {
  components: { newsList }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
.main {
  min-height: calc(100% - 48px);
  .main-body {
    width: 100%;
    height: auto !important;

    .news-list {
      background-color: white;
      box-sizing: border-box;
      border-radius: 2px;
      box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);
    }
  }
}
</style>