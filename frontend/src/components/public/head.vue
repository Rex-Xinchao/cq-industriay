<template>
  <div class="head">
    <div class="log_main"></div>
    <div class="log_bar"></div>
    <div class="log_sub"></div>
    <div class="user-right">
      <el-autocomplete
        ref="autocomplete"
        class="search-main"
        v-model="keyword"
        :fetch-suggestions="querySearchAsync"
        size="medium"
        placeholder="请输入关键词"
        @select="pageTo"
      ></el-autocomplete>
      <div class="user-info">用户A</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: null,
      suggestions: []
    }
  },
  methods: {
    querySearchAsync(queryString, cb) {
      if (!queryString) return cb([])
      this.suggestions = [{ value: '新能源车整车制造（国标）', code: 'AF000001' }]
      cb(this.suggestions)
    },
    pageTo(data) {
      if (!this.keyword) return
      this.$router.push({
        path: '/analysis/env',
        query: {
          code: this.suggestions.find((item) => item.value === this.keyword).code,
          name: this.keyword
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  height: 100%;
  line-height: 60px;
  box-sizing: border-box;
  background-color: white;
  z-index: 1000;

  .log_main {
    display: inline-block;
    width: 122px;
    height: 32px;
    vertical-align: middle;
    background-image: url(~@/assets/imgs/logo_2.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .log_bar {
    display: inline-block;
    width: 1px;
    height: 24px;
    background-color: #cccccc;
    margin: 0 4px;
    vertical-align: middle;
  }

  .log_sub {
    display: inline-block;
    width: 124px;
    height: 32px;
    vertical-align: middle;
    background-image: url(~@/assets/imgs/logo_1.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .user-right {
    float: right;
    padding-right: 40px;

    .search-main {
      width: 240px;
    }
    .user-info {
      display: inline-block;
      width: auto;

      &::before {
        content: 'C';
        display: inline-block;
        margin: 0 10px 0 40px;
        width: 34px;
        height: 34px;
        border-radius: 17px;
        background-color: #cccccc;
        font-size: 26px;
        color: white;
        vertical-align: middle;
        line-height: 34px;
        text-align: center;
      }
    }
  }
}
</style>