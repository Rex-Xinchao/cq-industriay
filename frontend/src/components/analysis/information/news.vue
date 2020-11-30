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
          tim: '2020-11-26 10:29:18',
          url: 'https://www.zhitongcaijing.com/content/detail/368310.html',
          auth: '智通财经',
          title: 'Needham：特斯拉(TSLA.US)将面临更大的竞争压力 予“减持“评级',
          summary:
            '智通财经APP获悉，随着电动车制造行业的崛起，市场领头羊特斯拉(TSLA.US)今年迄今的股价涨幅达到586%。当然，投资者期待特斯拉在未来几年能实现扩张，以证明其估值是合理的，但是Needham分析师Rajvindra Gill怀疑该公司是否能胜任这项任务，部分原因是通用汽车加大了对其电动汽车领域的关注。据悉，通用汽车预计，其电动汽车的市场价格区间将为3万美元至超十万美元。Jill表示，这看起来像是直接针对特斯拉的所有关键产品线，从Model 3到Model S。尽管特斯拉近四个季度利润强劲以及交付量达到创纪录水平，但由于价格竞争压力，运营成本的增加以支撑上海Giga工厂和欧洲工厂，Model Y召回问题以及其历史盈利能力问题，该分析师后市看空该股。此外，Gill预计特斯拉在扩大Model Y和Cybertruck的制造规模时，将会遇到阻碍，公司美元足够的盈利杠杆来证明其高市盈率是合理的。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.99,
          newsId: '454403',
          joinStatus: false,
          companys: [
            {
              secu: 'TSLA_NQ_EQ',
              csfId: 'CSF0000201106',
              mkt: 'US',
              pos: 1,
              weight: 0.725,
              relevance: 2,
              name: '特斯拉',
              relationshipType: 1,
              relationships: []
            },
            {
              secu: 'GM_NY_EQ',
              csfId: 'CSF3066938346',
              mkt: 'US',
              pos: 1,
              weight: 0.632,
              relevance: 0,
              name: '通用汽车',
              relationshipType: 3,
              relationships: []
            }
          ],
          people: [],
          events: [
            { itemCode: 'FB008', itemName: '减持评级', negativeEvent: true, eventGrade: 2, eventEntityList: [] },
            {
              itemCode: 'AA005022',
              itemName: '面临困境',
              negativeEvent: true,
              eventGrade: 3,
              eventEntityList: [{ type: 'company', code: 'CSF0000201106', name: '特斯拉' }]
            }
          ],
          products: [{ itemCode: 'AC003', itemName: '汽车制造' }],
          industries: [{ itemCode: 'AC005', itemName: '汽车' }],
          regions: [],
          concepts: [
            { itemCode: 'CP0031', itemName: '新能源汽车' },
            { itemCode: 'CP0202', itemName: '特斯拉' }
          ]
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 10:28:48',
          url: 'http://news.gqsoso.com/dongtai/202011/2632760.html',
          auth: '钢企网',
          title: '归母净利大幅下跌 太平洋证券评级连三年连降',
          summary:
            '然而，太平洋证券股份有限公司(下称太平洋证券,601099.SZ)是唯一一家营业收入和归母净利润双降的券商，营业收入跌幅甚至超过当期归母净利润，从而引发了市场的关注。根据中国证监会公布的证券公司分类评价结果显示，2017年至2020年，太平洋证券的评级分别为A、BB、B、CCC。归母净利润大幅下跌相比较于2019年，2020年太平洋证券交出的业绩答卷很是惨淡。数据显示，2016至2019年，太平洋证券的归母净利润分别为6.68亿元、1.16亿元、-13.22亿元、4.63亿元，2018年甚至出现亏损，如同坐上“过山车”。中国证监会公布的2020年证券公司分类结果显示，太平洋证券的评级已降至CCC，在98家参评券商中排名90位开外。具体来看，2020年9月，广东证监局向太平洋证券下发的警示函显示，作为广东中钰科技在全国股转系统挂牌公开转让并负责公司持续督导工作的主办券商，太平洋证券持续督导期间中钰科技存在信息披露违法违规的情况。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.993,
          newsId: '453700',
          joinStatus: false,
          companys: [
            {
              secu: '688199_SH_EQ',
              csfId: 'CSF0000001765',
              mkt: 'A',
              pos: 2,
              weight: 0.759,
              relevance: 0,
              name: '久日新材',
              relationshipType: 3,
              relationships: []
            },
            {
              secu: '601099_SH_EQ',
              csfId: 'CSF0000002679',
              mkt: 'A',
              pos: 2,
              weight: 0.916,
              relevance: 2,
              name: '太平洋',
              relationshipType: 1,
              relationships: []
            }
          ],
          people: [],
          events: [],
          products: [{ itemCode: 'FN007007', itemName: '券商自营业务' }],
          industries: [{ itemCode: 'FN032', itemName: '资本市场服务' }],
          regions: [],
          concepts: [{ itemCode: 'CP0252', itemName: '科创板概念' }]
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 10:15:41',
          url: 'http://www.cngold.com.cn/20201126d1703n348834882.html',
          auth: '中金网',
          title: '“得diao丝者得天下”？用户怒了！小米：涉事者已离职',
          summary:
            '2020年第三季度，小米智能手机全球出货量4660万台，市场份额达到13.5%。三星重夺冠军宝座，华为跌幅最大，同比下降24%，据悉，这是2014年以来华为出货量首次下跌，而填补华为空缺的正是小米，小米此次超越苹果占据全球智能手机市场份额第三名，同时这也是苹果自加入榜单以来第一次跌出前三名。年初至今股价涨幅超140%小米集团于2018年7月9日在香港主板上市,发行价为17港元/股。中金公司研报表示，小米三季度业绩超过预期是由于其智能手机全球销量强劲以及中国市场手机平均售价ASP的增长。中金认为，小米已经为2021智能手机的出货量和互联网服务的大幅增资做好了准备，建议投资者关注小米手机的市场份额，这是影响小米股价的关键因素。但花旗表示，如果荣耀继续留在这一市场，该行将不得不降低对小米利润的预期。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.98,
          newsId: '449885',
          joinStatus: false,
          companys: [
            {
              secu: '',
              csfId: 'CSF202268510',
              mkt: 'N',
              pos: 2,
              weight: 0.968,
              relevance: 1,
              name: '华为投资控股有限公司',
              relationshipType: 1,
              relationships: []
            },
            {
              secu: '01810_HK_EQ',
              csfId: 'CSF239514904',
              mkt: 'HK',
              pos: 1,
              weight: 0.812,
              relevance: 2,
              name: '小米集团－W',
              relationshipType: 3,
              relationships: []
            }
          ],
          people: [
            {
              name: '雷军',
              pcode: 'P13022710016722',
              pos: 0,
              weight: 0.877,
              relationshipType: null,
              relationships: []
            }
          ],
          events: [],
          products: [{ itemCode: 'HW00100708', itemName: '手机' }],
          industries: [{ itemCode: 'CP003', itemName: '电脑与外围设备' }],
          regions: [],
          concepts: [{ itemCode: 'CP0041', itemName: '电商' }]
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 10:03:42',
          url: 'http://stock.10jqka.com.cn/20201126/c624981406.shtml',
          auth: '同花顺财经',
          title: '中国6G研发去年已开始 部分A股上市公司已有布局',
          summary:
            '6G研发已经开始了。从去年正式启动6G研发开始，经过一年的努力，国内的6G研发已然取得较大的进步，除了清华大学外，11月初全球首颗6G试验卫星“电子科技大学号”(星时代-12/天雁05)搭载长征六号遥三运载火箭在太原卫星发射中心成功升空，宣示了国内的6G研究已经取得了突破性进展。同月，日本电报电话公司NTT宣布与索尼与英特尔已在6G网络研发上合作，预计将于2030年前后推出这一网络技术。11月，中国联通（600050）网络技术研究院宣布正大力研究6G太赫兹通信技术，并于今年5月与中兴通讯（000063）签署了6G联合战略合作协议。意华股份（002897）曾公告为华为等客户提供6G网络需求的300/400G连接器。奥士康（002913）为配合无线通信有望科创板上市的紫光展锐去年11月宣布，已启动6G相关技术的预研和储备，对太赫兹通信、轨道角动量、甚大规模天线系统、甚高通量编解码、天地一体通信网等潜在6G关键技术进行了探索，并制定了6G技术原型研发推进规划。',
          stockReview: 0,
          newsSentiment: 1,
          newsSentiWeight: 0.951,
          newsId: '452500',
          joinStatus: false,
          companys: [
            {
              secu: '',
              csfId: 'CSF202268510',
              mkt: 'N',
              pos: 2,
              weight: 0.932,
              relevance: 0,
              name: '华为投资控股有限公司',
              relationshipType: 1,
              relationships: []
            }
          ],
          people: [],
          events: [],
          products: [],
          industries: [{ itemCode: 'EC004', itemName: '电子制造' }],
          regions: [
            { itemCode: 'CSF_CN_110000', itemName: '北京市' },
            { itemCode: 'CSF_DK', itemName: '丹麦' },
            { itemCode: 'CSF_US', itemName: '美国' }
          ],
          concepts: [
            { itemCode: 'CP0088', itemName: '5G' },
            { itemCode: 'CP0244', itemName: '华为概念' },
            { itemCode: 'CP0275', itemName: '新基建' }
          ]
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 10:02:57',
          url:
            'https://finance.sina.cn/stock/relnews/hk/2020-11-26/detail-iiznctke3333912.d.html?vt=4&cid=76524&node_id=76524',
          auth: '新浪财经\n\t\t\t\t\t腾讯自选股',
          title: '6年后重返全球第三，小米能“站”多久？',
          summary:
            '首先是雷军极为看重的印度市场,小米依旧是保持出货量第一,市占率达到26．1%。与此同时,小米此次能够超越苹果,一部分也得归功于苹果新机的缺席。前有华为受困,后有苹果新机缺席,于小米而言,2020年Q3季度是其登顶前三的一个绝好机会。就目前来看,小米能否保持第三名的关键在于华为和苹果——华为能否继续维持第二。荣耀被出售之后,它的一切都将脱离于华为,就短时间内来看,即使有着Mate 40系列新机的加成,华为的整体出货量应该也会受到部分影响,些微的下降是避免不了的。整体来看,第四季度苹果超越小米,重新上位的可能性还是大的,最大的变数或许在于华为。',
          stockReview: 0,
          newsSentiment: 1,
          newsSentiWeight: 0.868,
          newsId: '451976',
          joinStatus: false,
          companys: [
            {
              secu: '',
              csfId: 'CSF202268510',
              mkt: 'N',
              pos: 2,
              weight: 0.735,
              relevance: 2,
              name: '华为投资控股有限公司',
              relationshipType: 1,
              relationships: []
            },
            {
              secu: '01810_HK_EQ',
              csfId: 'CSF239514904',
              mkt: 'HK',
              pos: 1,
              weight: 0.835,
              relevance: 2,
              name: '小米集团－W',
              relationshipType: 3,
              relationships: []
            }
          ],
          people: [
            {
              name: '雷军',
              pcode: 'P13022710016722',
              pos: 0,
              weight: 0.855,
              relationshipType: null,
              relationships: []
            }
          ],
          events: [],
          products: [{ itemCode: 'HW00100708', itemName: '手机' }],
          industries: [{ itemCode: 'CP003', itemName: '电脑与外围设备' }],
          regions: [],
          concepts: [{ itemCode: 'CP0244', itemName: '华为概念' }]
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
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 10:00:02',
          url: 'http://house.cnfol.com/fangchanyaowen/20201126/28549676.shtml',
          auth: '中金在线',
          title: '迪马股份：东银控股所持9.16亿股股份被司法轮候冻结',
          summary:
            '中国网地产讯 11月25日，迪马股份发布公告称，迪马股份第一大股东东银控股持有公司股份被司法轮候冻结。司法轮候冻结数量为9.16亿股，其中中国民生银行股份有限公司盐城分行申请轮候冻结3000万股，中国民生银行股份有限公司重庆分行申请轮候冻结8.85亿股。上述股份均为无限售流通股，轮候冻结。冻结期限为三年，自转为正式冻结之日起计算。东银控股此次司法轮候冻结股数9.16亿股，其中重庆市第五中级人民法院(2020)渝05执保252号冻结股份占其直接持股总数的3.39%，占公司股份总数(25.62亿股)的1.17%。重庆市第五中级人民法院(2020)渝05执保258号冻结股份占其直接持股总数的100%，占公司股份总数的34.57%。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.997,
          newsId: '452077',
          joinStatus: false,
          companys: [
            {
              secu: '600565_SH_EQ',
              csfId: 'CSF0000002481',
              mkt: 'A',
              pos: 2,
              weight: 0.751,
              relevance: 2,
              name: '迪马股份',
              relationshipType: 2,
              relationships: [{ type: 'SHAREHOLDER', code: 'CSF0000096019', name: '成都荣元圣和置业有限公司' }]
            },
            {
              secu: '',
              csfId: 'CSF30669491120',
              mkt: 'N',
              pos: 2,
              weight: 0.708,
              relevance: 0,
              name: '重庆市第五中级人民法院',
              relationshipType: 3,
              relationships: []
            }
          ],
          people: [],
          events: [
            {
              itemCode: 'CB002001',
              itemName: '冻结查封',
              negativeEvent: true,
              eventGrade: 3,
              eventEntityList: [{ type: 'company', code: 'CSF0000002481', name: '迪马股份' }]
            }
          ],
          products: [],
          industries: [],
          regions: [],
          concepts: []
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 09:51:00',
          url: 'http://news.cableabc.com/xny/20201126043763.html',
          auth: '电缆网',
          title: '特斯拉在美召回9537辆车 暂无相关事故或人员伤亡报告',
          summary:
            '官网信息显示，Model X车型在挡风玻璃后面的车顶前部和车顶中央分别配备装饰性贴花。特斯拉在9月份向美国国家公路交通安全管理局提交的文件中表示，它在9月份获悉了一起涉及2016款Model X 车辆的事故，该事故促使公司调查背后的根本原因和频率，发现该状况可能会对后面的驾驶员造成道路危险。特斯拉表示，将检查召回的车辆并进行保留测试。如果测试失败，特斯拉将应用底漆来纠正这种情况。这些被召回的车上螺栓将前上控制臂和转向节连接在一起，而这些螺栓可能未正确拧紧。特斯拉表示，最近发现有三辆车的上控制臂分离。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.995,
          newsId: '451579',
          joinStatus: false,
          companys: [
            {
              secu: 'TSLA_NQ_EQ',
              csfId: 'CSF0000201106',
              mkt: 'US',
              pos: 2,
              weight: 0.645,
              relevance: 2,
              name: '特斯拉',
              relationshipType: 1,
              relationships: []
            }
          ],
          people: [],
          events: [
            { itemCode: 'EA020', itemName: '汽车召回', negativeEvent: true, eventGrade: 3, eventEntityList: [] },
            { itemCode: 'GE001', itemName: '安全事故', negativeEvent: true, eventGrade: 3, eventEntityList: [] }
          ],
          products: [{ itemCode: 'TR005001', itemName: '公路' }],
          industries: [{ itemCode: 'TR010', itemName: '交通基本设施' }],
          regions: [],
          concepts: [{ itemCode: 'CP0202', itemName: '特斯拉' }]
        },
        {
          dt: '2020-11-26',
          tim: '2020-11-26 09:44:23',
          url: 'https://consumer.gucheng.com/202011/3979331.shtml',
          auth: '股城网',
          title: '特斯拉申请召回近万台车 存在螺栓未拧紧问题',
          summary:
            '今年以来，特斯拉因为多次降价而频频登上各大媒体头条，但近日特斯拉又成为消费者关注的焦点，这次并不是车型降价，而是一则关于特斯拉申请召回近万台车的报道引起关注，下面看看到底是怎么回事。特斯拉车型特斯拉汽车又出问题了。根据美国国家公路交通安全管理局最新消息，特斯拉在美国申请召回近万台车，包含Model X和Model Y在内，召回数量高达9537辆车，主要召回原因是车顶贴花缺少底漆和螺栓未拧紧。特斯拉汽车被称为“高档”新能源汽车，但近年来，关于特斯拉汽车被召回的报道也并不少，车辆出毛病被召回本来无可厚非，但特斯拉的惯性“甩锅”态度，却被车主们纷纷吐槽。希望以后能把这个“习惯”改正过来，让消费者更安心、更满意。',
          stockReview: 0,
          newsSentiment: 2,
          newsSentiWeight: 0.997,
          newsId: '450979',
          joinStatus: false,
          companys: [
            {
              secu: 'TSLA_NQ_EQ',
              csfId: 'CSF0000201106',
              mkt: 'US',
              pos: 2,
              weight: 0.735,
              relevance: 2,
              name: '特斯拉',
              relationshipType: 1,
              relationships: []
            }
          ],
          people: [],
          events: [],
          products: [
            { itemCode: 'AC003', itemName: '汽车制造' },
            { itemCode: 'AC003005', itemName: '新能源汽车' },
            { itemCode: 'FA00703006', itemName: '紧固件' }
          ],
          industries: [
            { itemCode: 'AC005', itemName: '汽车' },
            { itemCode: 'FA007', itemName: '工业机械' }
          ],
          regions: [{ itemCode: 'CSF_US', itemName: '美国' }],
          concepts: [
            { itemCode: 'CP0031', itemName: '新能源汽车' },
            { itemCode: 'CP0202', itemName: '特斯拉' }
          ]
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