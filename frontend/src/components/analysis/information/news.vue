<template>
  <div class="news-main">
    <div class="filter-main">
      <el-form :inline="true">
        <el-form-item label="情绪：">
          <el-select v-model="type" placeholder="请选择情绪">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="事件：">
          <el-select v-model="events" multiple collapse-tags placeholder="请选择事件">
            <el-option
              v-for="item in eventOptions.filter((item) => type === '' || item.type === type)"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签：">
          <el-select v-model="tags" :options="options" multiple collapse-tags :props="{ multiple: true }">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              <template>
                <span class="labelColor" :class="item.class"></span>
                {{ `${item.label}标签` }}
              </template>
            </el-option>
          </el-select>
        </el-form-item>
        <el-tooltip placement="bottom" effect="light">
          <div slot="content">
            <ul class="labels-introduce">
              <li>
                <span class="labelColor label_com"></span>
                公司标签
              </li>
              <li>
                <span class="labelColor label_peo"></span>
                人物标签
              </li>
              <li>
                <span class="labelColor label_inds"></span>
                行业标签
              </li>
              <li>
                <span class="labelColor label_pro"></span>
                产品标签
              </li>
              <li>
                <span class="labelColor label_event"></span>
                事件标签
              </li>
            </ul>
          </div>
          <span class="labels-icon-title fr">
            图例标签
            <i class="el-icon-info"></i>
          </span>
        </el-tooltip>
      </el-form>
    </div>
    <div v-loading="loading" class="news-list-main_loading" :style="{ 'min-height': height }">
      <no-data-show :show="noData" msg="暂无相关资讯"></no-data-show>
      <ul v-if="!noData" class="news-list-main">
        <li v-for="(item, index) in tableData" :key="index">
          <h1 class="title">
            <span style="font-size: 16px" :title="item.title" v-html="item.title"></span>
            <span
              :class="
                item.newsSentiment == 1 ? 'positive-tag' : item.newsSentiment == 2 ? 'negative-tag' : 'neutral-tag'
              "
            >
              <i class="icon"></i>
              {{ `${(item.newsSentiWeight * 100).toFixed(2)}%` }}
            </span>
          </h1>
          <p class="news-list_content" style="font-size: 16px; -webkit-line-clamp: 5" v-html="item.summary"></p>
          <tag-list :showTags="tags" :tagData="item"></tag-list>
          <div class="msg-bottom">
            <span class="time">{{ item.tim }}</span>
            <span class="source">
              来源：{{
                item.auth == '入库' ||
                item.auth == '抓取' ||
                item.auth == '预警' ||
                item.auth == '转载' ||
                item.auth == '原创' ||
                item.auth == '巨灵'
                  ? '--'
                  : item.auth
              }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import scroll from '@/mixins/scroll'
import { newsList } from '@/api/analysis'
export default {
  data() {
    return {
      tableId: 'newsTable',
      noData: false,
      loading: false,
      height: '500px',
      tableData: [],
      tags: ['company', 'people', 'industry', 'product', 'event'],
      events: [],
      options: [
        {
          value: 'company',
          label: '公司',
          class: 'label_com'
        },
        {
          value: 'people',
          label: '人物',
          class: 'label_peo'
        },
        {
          value: 'industry',
          label: '行业',
          class: 'label_inds'
        },
        {
          value: 'product',
          label: '产品',
          class: 'label_pro'
        },
        {
          value: 'event',
          label: '事件',
          class: 'label_event'
        }
      ],
      eventOptions: [
        {
          label: '事件',
          value: 1,
          type: 1
        }
      ],
      type: '',
      typeOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '正',
          value: 1
        },
        {
          label: '中',
          value: 0
        },
        {
          label: '负',
          value: -1
        }
      ]
    }
  },
  mixins: [scroll],
  methods: {
    pageTo(URL) {
      window.open(URL)
    },
    search() {
      this.loading = true
      let params = {}
      newsList(params)
        .then((res) => {
          console.log(res)
          this.loading = false
          this.tableData = res.result || []
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
          this.tableData = []
        })
    }
  },
  mounted() {
    this.search()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/newsList';
</style>
<style lang="scss">
$company: #207cff;
$people: #c59001;
$product: #00b8a5;
$industry: #555fdc;
$event: #ae4f2e;
.labels-introduce {
  > li {
    padding: 5px 10px;
  }
}

.labelColor {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  vertical-align: sub;
  margin-right: 5px;
}

.label_com {
  background: $company;
}

.label_inds {
  background: $industry;
}

.label_event {
  background: $event;
}

.label_pro {
  background: $product;
}

.label_peo {
  background: $people;
}
</style>