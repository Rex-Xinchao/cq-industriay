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
          class="input search-main"
          v-model="keyword"
          :fetch-suggestions="querySearchAsync"
          size="medium"
          placeholder="请输入关键词"
        ></el-autocomplete>
        <el-button class="btn" type="primary" size="medium">搜索</el-button>
        <div class="advanced-search">高级搜索</div>
      </div>
      <div class="login-history" v-if="list.length">
        <div class="title">热点搜索：</div>
        <div class="list">
          <span v-for="item in list" :key="item">{{ item }}</span>
        </div>
      </div>
      <div class="login-notice">
        <span class="notice-txt">公告</span>
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
        <div class="item">行业洞察</div>
        <div class="item">全行风险报告</div>
        <div class="item">找关系</div>
        <div class="item">预警中心</div>

        <div class="item" style="cursor: pointer" @click="pageTo('/pillar/index')">支柱产业</div>
        <div class="item" style="cursor: pointer" @click="pageTo('/stockCustom/all')">全行客户</div>
        <div class="item">城投专题</div>
        <div class="item">
          <p>房地产专题</p>
          <p>敬请期待</p>
        </div>
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
      list: ['新能源汽车', '电子芯片', '零售行业', '养殖业', '建筑装饰', '房地产开发', '医药', '有色冶炼加工']
    }
  },
  watch: {
    type(data) {
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
      cb([{ value: '汽车' }])
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/login';
</style>