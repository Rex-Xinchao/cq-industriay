<template>
  <div class="login-main">
    <div class="login-head">
      <div class="login-logo"></div>
      <div class="login-btn">登录</div>
    </div>
    <div class="login-body">
      <div class="login-logo_2"></div>
      <ul class="login-menu">
        <li :class="{ active: type === 1 }" @click="type = 1">企业</li>
        <li :class="{ active: type === 2 }" @click="type = 2">自然人</li>
        <li :class="{ active: type === 3 }" @click="type = 3">行业</li>
        <li :class="{ active: type === 4 }" @click="type = 4">区域经济</li>
      </ul>
      <div class="login-search">
        <el-autocomplete
          ref="autocomplete"
          class="input search-main"
          v-model="keyword"
          :fetch-suggestions="querySearchAsync"
          size="medium"
          placeholder="请输入企业关键词"
        ></el-autocomplete>
        <el-button class="btn" type="primary" size="medium" @click="search">搜索</el-button>
        <div class="advanced-search">高级搜索</div>
      </div>
      <div class="login-history" v-if="list.length">
        <div class="title">热点搜索：</div>
        <div class="list">
          <span v-for="item in list" :key="item">{{ item }}</span>
        </div>
      </div>
      <div class="login-notice">
        <span class="notice-txt"></span>
        <ul ref="notice">
          <li>
            <span class="notice-main">风铃智评最新版本上线</span>
            <span class="notice-time">2020年12月20日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新2</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评最新版本上线</span>
            <span class="notice-time">2020年12月20日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新2</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
        </ul>
        <span class="notice-tool">
          <i class="up" @click="up"></i>
          <i class="down" @click="down"></i>
        </span>
      </div>
      <div class="login-tab">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item" style="cursor: pointer" @click="pageTo('/pillar/index')"></div>
        <div class="item" style="cursor: pointer" @click="pageTo('/stockCustom/all')"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: null,
      type: 3,
      index: 1,
      list: ['新能源汽车', '电子芯片', '零售行业', '养殖业', '建筑装饰', '房地产开发', '医药', '有色冶炼加工'],
      suggestions: []
    }
  },
  watch: {
    type(data) {
      this.keyword = null
      this.$refs.autocomplete._data.suggestions = []
      if (data === 3) {
        this.list = ['新能源汽车', '电子芯片', '零售行业', '养殖业', '建筑装饰', '房地产开发', '医药', '有色冶炼加工']
      } else {
        this.list = []
      }
    }
  },
  methods: {
    up() {
      let marginTop = this.$refs.notice.style.marginTop || '0px'
      marginTop = Number(marginTop.split('px')[0]) + 30
      if (this.index === 1) {
        marginTop = -30 * (3 - 1)
        this.index = 3
      } else {
        this.index -= 1
      }
      this.$refs.notice.style.marginTop = marginTop + 'px'
    },
    down() {
      let marginTop = this.$refs.notice.style.marginTop || '0px'
      marginTop = Number(marginTop.split('px')[0]) - 30
      if (this.index === 3) {
        marginTop = -30 * (3 - 1)
        this.index -= 1
      } else {
        this.index += 1
      }
      this.$refs.notice.style.marginTop = marginTop + 'px'
    },
    pageTo(path) {
      this.$router.push(path)
    },
    querySearchAsync(queryString, cb) {
      if (!queryString) return cb([])
      this.suggestions = []
      if (this.type === 1) {
        this.suggestions = [{ value: '长安汽车' }]
      }
      if (this.type === 2) {
        this.suggestions = []
      }
      if (this.type === 3) {
        this.suggestions = [{ value: '新能源车整车制造（国标）', code: 'AC003005' }]
      }
      if (this.type === 4) {
        this.suggestions = [{ value: '重庆', code: 'AC003005' }]
      }
      cb(this.suggestions)
    },
    search() {
      if (!this.keyword) {
        this.$message.error('关键处不能为空')
        return
      }
      if (this.type === 1) {
        this.$router.push({
          path: '/test',
          query: {
            id: this.keyword
          }
        })
      } else if (this.type === 2) {
        this.$router.push({
          path: '/test',
          query: {
            id: this.keyword
          }
        })
      } else if (this.type === 3) {
        this.$router.push({
          path: '/analysis/env',
          query: {
            code: this.suggestions.find((item) => item.value === this.keyword).code,
            name: this.keyword
          }
        })
      } else if (this.type === 4) {
        this.$router.push({
          path: '/finance/status',
          query: {
            regionCode: this.suggestions.find((item) => item.value === this.keyword).code,
            name: this.keyword
          }
        })
      }
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/login';
</style>