<template>
  <div class="news-main">
    <div class="filter-main">
      <el-form :inline="true">
        <el-form-item label="事件：">
          <el-select v-model="events" multiple collapse-tags placeholder="请选择事件">
            <el-option
              v-for="item in eventOptions"
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
            <a style="font-size: 16px" :title="item.title" @click="pageTo(item.url)" v-html="item.title"></a>
            <span
              :class="
                item.newsSentiment === 1 ? 'positive-tag' : item.newsSentiment === 2 ? 'negative-tag' : 'neutral-tag'
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
            <span class="source" @click="pageTo(item.url)">
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
export default {
  data() {
    return {
      tableId: 'newsTable',
      noData: false,
      loading: false,
      height: 500,
      tableData: [
        {
          dt: '2020-11-26',
          tim: '2020-11-26 10:35:46',
          url: 'https://www.tmtpost.com/4860732.html',
          auth: '钛媒体',
          title: '在未成年人保护中，那些技术解决不了的事才是最重要的',
          summary:
            '能顺利在第一次打电话中完成以上步骤的家长并不多，很多家长不知道孩子的游戏账号叫什么，不知道孩子是从什么时候开始玩的，不知道孩子是在电商平台充值的，甚至不知道这个游戏其实不是腾讯的游戏。有一些申请显然微妙到很难用已有经验去分辨——退款申请的未成年人只有九岁，账号则是4年前建立的，玩的游戏是《斗地主》，遇到这种单子，张晓京就只能多打电话向家长了解情况。她语气平淡地说出自己的诉求，说到最后才带了点情绪：“我的孩子沉迷游戏，我该去找谁负责，你们知道你们的游戏有多少孩子在玩吗。其中，「成长守护平台」和「健康系统」是守在成人游戏世界的两道关卡——家长主动把孩子账号绑定到成长守护平台，基本不会出现孩子过度游戏时长和大额充值的事。疫情也催熟了这些问题——当孩子声称用手机上网课，和家长共用设备时，如何精准识别这段时间是孩子在使用账号。问卷填写过程能帮助家长还原支付失控过程，给予不同场景下的教育技巧，获取管理孩子账号、与孩子平等沟通等问题的解决方案。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.733,
          newsId: '453744',
          joinStatus: false,
          companys: [
            {
              secu: '00700_HK_EQ',
              csfId: 'CSF0000000275',
              mkt: 'HK',
              pos: 2,
              weight: 0.567,
              relevance: 2,
              name: '腾讯控股',
              relationshipType: 1,
              relationships: []
            },
            {
              secu: '',
              csfId: 'CSF0000036422',
              mkt: 'N',
              pos: 0,
              weight: 0.953,
              relevance: 1,
              name: '支付宝（中国）网络技术有限公司',
              relationshipType: 2,
              relationships: [{ type: 'INVESTMENT', code: 'CSF0000050716', name: '蚂蚁科技集团股份有限公司' }]
            }
          ],
          people: [],
          events: [],
          products: [],
          industries: [],
          regions: [{ itemCode: 'CSF_CN_510100', itemName: '成都市' }],
          concepts: [{ itemCode: 'CP0231', itemName: '腾讯概念' }]
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 10:01:53',
          url: 'https://new.qq.com/omn/20201124/20201124A0D8JX00.html',
          auth: '腾讯网',
          title: '小孩子游戏充值、父母申请退费时，腾讯客服是这么干的',
          summary:
            '”“那如果是家长自己充的钱，后悔了，冒充孩子找你们退钱怎么办。”为了当好一个实习客服，我一边听，一边勤勤恳恳地记下客服工作中可能会面临的问题，把要点用括号写在后面：家长说的金额跟查询的金额对不上家长把自己充的钱说成是孩子充的（选择相信）家长不识字无法操作家长说方言，听不懂也说不明白（可怕。下一秒，电话接通了，娜娜立马换了一副表情，“您好，这里是腾讯后台的客服。一位家长在之前的沟通里说，“游戏害死了祖国的花朵，你们不要再危害更多的家庭了”，这句话伴随着工单传到了娜娜面前，看起来她即将迎来一场暴风骤雨。我还目睹了一次投诉，孩子用妈妈的微信账号登录游戏，用爸爸绑定的卡消费，一共花了2000多块钱。电话那头的妈妈一边催促着退款，一边激动地讲述着家里奶奶的病情，“饭也不吃，觉也不睡，吊针也白打了”，妈妈足足讲了十多分钟。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.956,
          newsId: '452752',
          joinStatus: false,
          companys: [
            {
              secu: '00700_HK_EQ',
              csfId: 'CSF0000000275',
              mkt: 'HK',
              pos: 2,
              weight: 0.861,
              relevance: 2,
              name: '腾讯控股',
              relationshipType: 1,
              relationships: []
            },
            {
              secu: '',
              csfId: 'CSF0000036422',
              mkt: 'N',
              pos: 0,
              weight: 0.975,
              relevance: 1,
              name: '支付宝（中国）网络技术有限公司',
              relationshipType: 2,
              relationships: [{ type: 'INVESTMENT', code: 'CSF0000050716', name: '蚂蚁科技集团股份有限公司' }]
            }
          ],
          people: [],
          events: [],
          products: [],
          industries: [],
          regions: [],
          concepts: []
        }
      ],
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
          label: '事件1',
          value: 1
        }
      ]
    }
  },
  mixins: [scroll],
  methods: {
    pageTo() {},
    search() {
      console.log(111)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/newsList';
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