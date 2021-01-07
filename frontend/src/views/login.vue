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
          :placeholder="`请输入${type === 1 ? '企业' : type === 2 ? '自然人' : type === 3 ? '行业' : '区域'}关键词`"
        ></el-autocomplete>
        <el-button class="btn" type="primary" size="medium" @click="search">搜索</el-button>
        <div class="advanced-search">高级搜索</div>
      </div>
      <div class="login-history" v-if="list.length">
        <div class="title">热点搜索：</div>
        <div class="list">
          <span v-for="item in list" :key="item.code" @click="setKey(item)" style="cursor: pointer">
            {{ item.name }}
          </span>
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
        <div class="item" style="cursor: pointer" @click="pageTo('/pillar/index', false)"></div>
        <div class="item" style="cursor: pointer" @click="pageTo('/stockCustom/all', false)"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
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
      type: 3,
      index: 1,
      list: [
        {
          name: '新能源车整车制造（国标4级）',
          code: 'AC003005',
          type: 1
        }
      ],
      suggestions: []
    }
  },
  mixins: [pageTo],
  watch: {
    type(data) {
      this.keyword = null
      this.$refs.autocomplete._data.suggestions = []
      if (data === 3) {
        this.list = [
          {
            name: '新能源车整车制造（国标）',
            code: 'AC003005',
            type: 1
          }
        ]
      } else if (data === 1) {
        this.list = [
          {
            name: '重庆长安汽车股份有限公司',
            code: 'TEST_1001'
          }
        ]
      } else if (data === 4) {
        this.list = [
          {
            name: '重庆',
            code: 'GS955525'
          }
        ]
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
    querySearchAsync(queryString, cb) {
      if (!queryString) return cb([])
      this.suggestions = []
      if (this.type === 1) {
        this.suggestions = [{ value: '重庆长安汽车股份有限公司', code: 'TEST_1001' }]
        cb(this.suggestions)
      }
      if (this.type === 2) {
        this.suggestions = []
        cb(this.suggestions)
      }
      if (this.type === 3) {
        getIndustry({ keyword: queryString, limit: 50 })
          .then((res) => {
            this.suggestions = res.result.map((item) => {
              return {
                value: `${item.name}${item.type === 1 ? `（国标${item.level}级）` : ''}`,
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
      }
      if (this.type === 4) {
        this.suggestions = [{ value: '重庆', code: 'GS955525' }]
        cb(this.suggestions)
      }
    },
    search() {
      if (!this.keyword) {
        this.$message.error('关键处不能为空')
        return
      }
      if (this.type === 1) {
        this.pageTo('/test', { id: this.keyword })
      } else if (this.type === 2) {
        this.pageTo('/test', { id: this.keyword })
      } else if (this.type === 3) {
        let { type, value, code } = { ...this.suggestions.find((item) => item.value === this.keyword) }
        this.pageTo('/analysis/env', { type, code, name: value })
      } else if (this.type === 4) {
        this.pageTo('/finance/status', {
          regionCode: this.suggestions.find((item) => item.value === this.keyword).code,
          name: this.keyword
        })
      }
    },
    setKey(item) {
      this.keyword = item.name
      this.suggestions = [{ value: item.name, code: item.code, type: item.type }]
      if (this.type === 1) {
        this.pageTo('/test', { id: this.keyword })
      } else if (this.type === 2) {
        this.pageTo('/test', { id: this.keyword })
      } else if (this.type === 3) {
        let { type, value, code } = { ...this.suggestions.find((item) => item.value === this.keyword) }
        this.pageTo('/analysis/env', { type, code, name: value })
      } else if (this.type === 4) {
        this.pageTo('/finance/status', {
          regionCode: this.suggestions.find((item) => item.value === this.keyword).code,
          name: this.keyword
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