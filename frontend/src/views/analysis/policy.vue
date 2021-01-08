<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        政策导向
        <span class="sign">{{ industry }}</span>
      </h1>
    </div>
    <div class="main-body">
      <div class="bg">
        <el-form :inline="true" :model="form" class="filter-bar">
          <el-form-item label="时间：">
            <time-select v-model="form.dateTime" :options="options" startValue="3Y"></time-select>
          </el-form-item>
          <el-form-item label="区域：">
            <el-select v-model="form.region" placeholder="请选择区域">
              <el-option v-for="item in regions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布机构：" v-if="false">
            <el-select v-model="form.org" placeholder="请选择结构">
              <el-option v-for="item in orgs" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <div class="legend fr">
            <div class="positive"><span>正面导向</span></div>
            <div class="nagetive"><span>正面导向</span></div>
          </div>
        </el-form>
        <ul class="information-main" v-loading="loading">
          <li class="line" v-for="item in infos" :key="item.name">
            <div class="line-time">
              <span class="time" v-if="item.rpt" v-html="item.rpt"></span>
            </div>
            <div class="line-main">
              <p class="name">
                <span class="area-tag">{{ item.region }}</span>
                {{ item.org }}
              </p>
              <p class="summary">{{ item.title }}</p>
              <div class="news" v-for="(news, index) in item.contentList" :key="index">
                <span class="type-tag" :class="news.emotion > 0 ? 'positive' : 'nagetive'">{{ news.typeName }}</span>
                <span class="product-tag">{{ news.industryName }}</span>
                <p class="content">
                  {{ news.content }}
                </p>
              </div>
              <p class="url">
                URL：
                <a @click="copy(item.url)">{{ item.url }}</a>
              </p>
            </div>
          </li>
          <no-data-show :show="noData"></no-data-show>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { formatDate } from '@/libs/utils'
import { policyList } from '@/api/analysis'
export default {
  data() {
    return {
      loading: false,
      noData: false,
      infos: [],
      form: {
        dateTime: [],
        region: null,
        org: null
      },
      regions: [
        { label: '全部', value: null },
        { label: '重庆市', value: 'CSF_CN_500000' },
        { label: '四川省', value: 'CSF_CN_510000' },
        { label: '陕西省', value: 'CSF_CN_610000' },
        { label: '贵州省', value: 'CSF_CN_520000' }
      ],
      orgs: [
        { label: '全部', value: null },
        { label: '工信部', value: 1 },
        { label: '发改委', value: 2 },
        { label: '科技部', value: 3 }
      ],
      options: [
        {
          value: '3Y',
          label: '近3年'
        },
        {
          value: '1Y',
          label: '今年'
        },
        {
          value: '1YL',
          label: '去年'
        },
        {
          value: 'udf',
          label: '自定义'
        },
        {
          value: 'udf_show',
          label: '自定义'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['industry'])
  },
  watch: {
    form: {
      immediate: true,
      deep: true,
      handler() {
        this.getData()
      }
    }
  },
  methods: {
    getData() {
      this.loading = true
      let params = {
        region: this.form.region,
        org: this.form.org,
        st: this.form.dateTime[0],
        et: this.form.dateTime[1]
      }
      policyList(params)
        .then((res) => {
          this.loading = false
          this.infos = res.result
          this.noData = res.result.length === 0
        })
        .catch((err) => {
          this.loading = false
          this.noData = true
          this.infos = []
        })
    },
    copy(url) {
      const oInput = document.createElement('input')
      oInput.value = url
      document.body.appendChild(oInput)
      oInput.select() // 选择对象
      document.execCommand('Copy') // 执行浏览器复制命令
      this.$message.success('复制成功')
      oInput.remove()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/policy';
.main {
  min-height: calc(100% - 48px);

  .main-body {
    width: 100%;
    box-sizing: border-box;
    height: auto !important;
    min-height: calc(100% - 48px);
    border-radius: 2px;
    box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);
  }
}
</style>