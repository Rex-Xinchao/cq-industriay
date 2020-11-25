<template>
  <div class="main">
    <h1 class="main-title">
      政策导向
      <span class="sign">{{ industry }}</span>
    </h1>
    <div class="main-body">
      <el-form :inline="true" :model="form" class="filter-bar">
        <el-form-item label="时间：">
          <time-select v-model="form.dateTime"></time-select>
        </el-form-item>
        <el-form-item label="区域：">
          <el-select v-model="form.region" placeholder="请选择区域">
            <el-option v-for="item in regions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布机构：">
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
            <span class="time" v-if="item.time" v-html="item.time"></span>
          </div>
          <div class="line-main">
            <p class="name">
              <span class="area-tag">{{ item.area }}</span>
              {{ item.title }}
            </p>
            <p class="summary">{{ item.summary }}</p>
            <div class="news" v-for="(news, index) in item.newsList" :key="index">
              <span class="type-tag" :class="news.type > 0 ? 'positive' : 'nagetive'">{{ news.typeName }}</span>
              <span class="product-tag">{{ news.product }}</span>
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
      </ul>
    </div>
  </div>
</template>
<script>
import { infos } from '@/mockData/policy'
import { formatDate } from '@/libs/utils'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      infos: [],
      form: {
        dateTime: [],
        region: null,
        org: null
      },
      regions: [
        { label: '重庆', value: 1 },
        { label: '四川', value: 2 },
        { label: '陕西', value: 3 },
        { label: '成都', value: 4 }
      ],
      orgs: []
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
      setTimeout(() => {
        this.loading = false
        this.infos = infos
      }, 1000)
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
@import '~@/assets/styles/view';
.main-body {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  height: auto !important;
  min-height: calc(100% - 48px);

  .legend {
    font-size: 14px;
    font-weight: 400;
    color: #9ea2ae;
    line-height: 20px;
    padding-top: 6px;

    div {
      display: inline-block;
      margin-right: 12px;
      &::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 4px;
        margin-top: 2px;
        vertical-align: top;
        margin-top: 3px;
      }

      span {
        display: inline-block;
        vertical-align: top;
      }
    }

    .positive::before {
      background: linear-gradient(135deg, #f17c78 0%, #ea444e 100%);
    }

    .nagetive::before {
      background: linear-gradient(130deg, #64e163 0%, #08a24c 100%);
    }
  }

  .information-main {
    width: 100%;
    height: auto;
    min-height: 300px;
    display: block;
    margin-top: 30px;

    .line {
      display: block;
      height: auto;
      text-align: left;
      margin-bottom: 4px;

      .line-time {
        display: inline-block;
        vertical-align: top;
        width: 120px;
        height: 100%;
        color: #909090;
        box-sizing: border-box;
        position: relative;
        text-align: center;

        .time {
          font-size: 14px;
        }

        &::after {
          display: block;
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 6px;
          background-color: #999999;
          top: 8px;
          right: -3px;
        }
      }

      .line-main {
        display: inline-block;
        width: calc(100% - 120px);
        border-left: 1px dashed #eeeeee;
        padding-left: 10px;
        box-sizing: border-box;

        p {
          margin: 0;
        }

        .name {
          font-size: 16px;
          font-weight: 600;
          color: #333333;
          line-height: 22px;
          margin-bottom: 6px;

          .area-tag {
            display: inline-block;
            background: linear-gradient(50deg, #6bace6 0%, #4487ea 100%);
            border-radius: 2px;
            line-height: 22px;
            color: white;
            padding: 0 8px;
            margin-right: 10px;
          }
        }

        .summary {
          display: block;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          line-height: 20px;
          box-sizing: border-box;
          margin-bottom: 8px;
          margin-left: 64px;
        }

        .url {
          display: block;
          font-size: 14px;
          font-weight: 400;
          color: #1f263e;
          line-height: 20px;
          box-sizing: border-box;
          margin: 6px 0 24px 64px;

          a {
            color: #3a84ff;
            cursor: pointer;
          }
        }

        .news {
          display: block;
          padding: 12px;
          box-sizing: border-box;
          background: #f4f6f9;
          border-radius: 2px;
          margin-left: 64px;

          .type-tag {
            display: inline-block;
            border-radius: 1px;
            padding: 2px 8px;
            font-size: 14px;
            color: white;
            margin-right: 8px;

            &.positive {
              background: linear-gradient(135deg, #f17c78 0%, #ea444e 100%);
            }

            &.nagetive {
              background: linear-gradient(127deg, #62b969 0%, #08a24c 100%);
            }
          }

          .product-tag {
            display: inline-block;
            font-size: 14px;
            border-radius: 1px;
            padding: 2px 8px;
            border: 1px solid #d9d9d9;
            margin-right: 8px;
            color: #333333;
          }

          .content {
            margin-top: 4px;
            font-size: 14px;
            font-weight: 400;
            color: #94979b;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>