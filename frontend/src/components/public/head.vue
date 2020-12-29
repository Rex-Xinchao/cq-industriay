<template>
  <div class="head">
    <div class="log_main" @click="pageTo('/login')"></div>
    <div class="log_bar"></div>
    <div class="log_sub" @click="pageTo('/login')"></div>
    <div class="user-right">
      <el-autocomplete
        ref="autocomplete"
        class="search-main"
        v-model="keyword"
        :fetch-suggestions="querySearchAsync"
        size="medium"
        placeholder="请输入关键词"
        @select="onSelectChange"
      ></el-autocomplete>
      <div class="user-info">用户A</div>
    </div>
  </div>
</template>
<script>
import { getIndustry } from '@/api/index'
import pageTo from '@/mixins/pageTo'
export default {
  data() {
    return {
      keyword: null,
      suggestions: []
    }
  },
  mixins: [pageTo],
  methods: {
    querySearchAsync(queryString, cb) {
      if (!queryString) return cb([])
      getIndustry({ keyword: queryString })
        .then((res) => {
          this.suggestions = res.result.map((item) => {
            return {
              value: `${item.name}${item.type === 1 ? '（国标）' : ''}`,
              code: item.code,
              type: item.type
            }
          })
          cb(this.suggestions)
        })
        .catch((err) => {
          this.suggestions = [{ value: '新能源车整车制造（国标）', code: 'AC003005', type: 1 }]
          cb(this.suggestions)
        })
    },
    onSelectChange(data) {
      if (!this.keyword) return
      let { code, value, type } = { ...this.suggestions.find((item) => item.value === this.keyword) }
      this.pageTo('/analysis/env', { code, name: value, type })
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
    cursor: pointer;
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
    cursor: pointer;
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