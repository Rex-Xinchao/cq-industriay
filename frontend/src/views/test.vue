<template>
  <div class="test-main">
    <div class="main-body" style="height: 118px">
      <div class="logo"></div>
      <div class="com-info">
        <div class="com-title">
          重庆长安汽车股份有限公司
          <span class="type-tag" :class="`type_${1}`">{{ typeMap[1] }}</span>
        </div>
        <div class="com-tags">
          <span>续存（在营、开业、在册）</span>
          <span>汽车</span>
          <span>汽车制造</span>
        </div>
        <div class="com-address">重庆市江北区建新东路260号</div>
      </div>
    </div>
    <div class="main-body com-main" style="height: auto">
      <h1 class="com-title">行业财务基准对比</h1>
      <div class="filter-main">
        <span :class="{ active: type === 1 }" @click="type = 1">成长能力</span>
        <span :class="{ active: type === 2 }" @click="type = 2">盈利能力</span>
        <span :class="{ active: type === 3 }" @click="type = 3">偿还能力</span>
        <span :class="{ active: type === 4 }" @click="type = 4">运营能力</span>
      </div>
      <div class="slider-main">
        <div class="line time-line">
          <el-date-picker
            v-model="dateTime"
            type="year"
            :clearable="false"
            placeholder="请选择年份"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div class="line" v-for="(item, index) in sliderData" :key="index">
          <span>{{ item.name }}：</span>
          <el-slider
            class="slider"
            v-model="item.value"
            :marks="item.marks"
            :disabled="true"
            :show-tooltip="false"
            :title="item.number + '%'"
          ></el-slider>
        </div>
      </div>
    </div>
    <div class="main-body com-main" style="height: 480px">
      <h1 class="com-title">产业布局</h1>
      <h1 class="industrial-main">
        <div class="left">
          <div class="head-div">产业链内产业布局</div>
          <div class="body-div">
            <div class="column" style="height: 85%">
              <div class="tab">
                <div class="name" style="background-color: #727b95">汽车生产设备</div>
              </div>
              <div class="tab">
                <div class="name">汽车设计</div>
                <div class="children">
                  <div class="child-com" title="北京长安汽车工程技术有限公司">
                    <span>子公司</span>
                    北京长安汽车工程技术有限公司
                  </div>
                  <div class="child-com" title="重庆长安汽车软件科技有限公司">
                    <span>子公司</span>
                    重庆长安汽车软件科技有限公司
                  </div>
                </div>
              </div>
              <div class="tab">
                <div class="name">汽车零配件与设备</div>
                <div class="children">
                  <div class="child-com" title="重庆长安金陵汽车零部件有限公司">
                    <span>子公司</span>
                    重庆长安金陵汽车零部件有限公司
                  </div>
                </div>
              </div>
            </div>
            <div class="relation_1"></div>
            <div class="column">
              <div class="tab" style="margin-top: 70px">
                <div class="name">汽车</div>
                <div class="children">
                  <div class="child-com" title="重庆长安新能源汽车有限公司">
                    <span>子公司</span>
                    重庆长安新能源汽车有限公司
                  </div>
                  <div class="child-com" title="重庆车和美科技有限公司">
                    <span>子公司</span>
                    重庆车和美科技有限公司
                  </div>
                  <div class="child-com" title="合肥长安汽车有限公司">
                    <span>子公司</span>
                    合肥长安汽车有限公司
                  </div>
                  <div class="show-more">
                    <a>查看更多</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="relation_2"></div>
            <div class="column">
              <div class="tab">
                <div class="name" style="background-color: #727b95">陆运</div>
              </div>
              <div class="tab">
                <div class="name" style="background-color: #727b95">汽油</div>
              </div>
              <div class="tab">
                <div class="name">汽车租凭</div>
                <div class="children">
                  <div class="child-com" title="杭州长安直行科技有限公司">
                    <span>子公司</span>
                    杭州长安直行科技有限公司
                  </div>
                </div>
              </div>
              <div class="tab">
                <div class="name">汽车贸易</div>
                <div class="children">
                  <div class="child-com" title="杭州长安直行科技有限公司">
                    <span>子公司</span>
                    杭州长安直行科技有限公司
                  </div>
                </div>
                <div class="children">
                  <div class="child-com" title="重庆长安汽车国际销售服务有限公司">
                    <span>子公司</span>
                    重庆长安汽车国际销售服务有限公司
                  </div>
                </div>
                <div class="children">
                  <div class="child-com" title="长安汽车投资（深圳）有限公司">
                    <span>子公司</span>
                    长安汽车投资（深圳）有限公司
                  </div>
                  <div class="show-more">
                    <a>查看更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="head-div">其他产业布局</div>
          <div class="body-div">
            <div class="column" style="width: 100%">
              <div class="tab">
                <div class="name" style="background: #e9ae6c">资产管理（非信托类）</div>
                <div class="children">
                  <div class="child-com" title="镇江德茂海润股权投资基金合伙企业（有限合伙）">
                    <span>子公司</span>
                    镇江德茂海润股权投资基金合伙企业（有限合伙）
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
    <div class="main-body com-main" style="height: 300px">
      <h1 class="com-title">贷款投向行业</h1>
      <div class="chart-main">
        <div id="pie-chart"></div>
        <div id="bar-chart"></div>
      </div>
    </div>
    <div class="main-body news-main com-main">
      <h1 class="com-title">
        企业负面舆情
        <time-select class="time-select"></time-select>
      </h1>
      <div class="filter-main">
        <div class="tag-list">
          <span>产量冻结</span>
          <span>出售资产</span>
          <span>机构减持</span>
          <span>个股下跌</span>
          <span>大盘下跌</span>
          <span>利润减少</span>
          <span>董事辞职</span>
        </div>
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
  </div>
</template>
<script>
const echarts = require('echarts')
import scroll from '@/mixins/scroll'
import { testList } from '@/api/analysis'
import timeSelect from '../components/public/time-select.vue'
const sliderData = [
  {
    rpt: 2019,
    name: '毛利润增长率',
    value: 6.66876878,
    type: 1
  },
  { rpt: 2019, name: '净利润增长率', value: 4.415, type: 1 },
  { rpt: 2019, name: '所有者权益增长率', value: -4.80760671, type: 1 },
  { rpt: 2019, name: '营业收入增长率', value: 6.48127729, type: 1 },
  { rpt: 2019, name: '总资产增长率', value: 4.41571301, type: 1 },
  { rpt: 2019, name: '净利率', value: -3.7526, type: 2 },
  { rpt: 2019, name: '毛利率', value: 14.679, type: 2 },
  { rpt: 2019, name: '平均净资产收益率(ROE)', value: -5.88127499, type: 2 },
  { rpt: 2019, name: '平均资产收益率(ROA)', value: -2.77242281, type: 2 },
  { rpt: 2019, name: '税息折旧及摊销前利润率', value: -1.1192, type: 2 },
  { rpt: 2019, name: '息税前利润率', value: -6.8436, type: 2 },
  { rpt: 2019, name: '营业利润率', value: -3.0468, type: 2 },
  { rpt: 2019, name: '流动比率', value: 100.7583, type: 3 },
  { rpt: 2019, name: '权益乘数', value: 222.1899, type: 3 },
  { rpt: 2019, name: '速动比率', value: 81.509, type: 3 },
  { rpt: 2019, name: '现金比率', value: 25.3601, type: 3 },
  { rpt: 2019, name: '债务权益比', value: 2.5999, type: 3 },
  { rpt: 2019, name: '资产负债率', value: 54.9934, type: 3 },
  { rpt: 2019, name: '存货周转率', value: 14.52636878, type: 4 },
  { rpt: 2019, name: '固定资产周转率', value: 2.51165206, type: 4 },
  { rpt: 2019, name: '应付账款周转率', value: 1.97288758, type: 4 },
  { rpt: 2019, name: '应收账款周转率', value: 2.84572215, type: 4 }
]

const statusList = [
  { name: '应收账款周转率', list: [33.32584904, 8.87593085, 7.20833170076923, 1.9062937, 0.51471451] },
  { name: '应付账款周转率', list: [63.40495363, 2.703500465, 4.40367784076923, 1.2758592725, 0.41771102] },
  { name: '固定资产周转率', list: [13.5950055, 6.5747229925, 4.53313939846154, 2.1566207825, 0.52590605] },
  { name: '存货周转率', list: [18.57726748, 11.39752238, 8.7884838156, 5.61704646, 1.65475702] },
  { name: '营业利润率', list: [35.0813, 4.14205, -0.9690875, -3.1117, -28.3256] },
  { name: '息税前利润率', list: [13.0778, 4.223225, -4.35864166666667, -4.0002, -52.0764] },
  { name: '税息折旧及摊销前利润率', list: [18.447, 6.47345, 0.142925, 1.152975, -47.918] },
  { name: '平均资产收益率(ROA)', list: [5.34122026, 1.8850225325, -4.01345257807692, 0.05555971, -45.79721389] },
  { name: '平均净资产收益率(ROE)', list: [27.03688793, 8.36932146, -6.2802789576, 0.47116989, -93.39042162] },
  { name: '毛利率', list: [56.556, 16.6925, 15.8891136363636, 10.98175, 7.425] },
  { name: '净利率', list: [11.2406, 3.220725, -5.68085416666667, 0.26785, -79.6952] },
  { name: '资产合计', list: [849333279599.19, 50840709713.3875, 70359093242.4854, 7200234019.13, 1946530105.55] },
  { name: '营业总收入', list: [843324372577.26, 42844250150.9125, 58285666710.0585, 3739954119.2925, 152844045.25] },
  { name: '营业利润', list: [12973908002.2001, 284846333.3475, 295933438.246542, -726966522.975, -5722071285] },
  {
    name: '息税前利润(EBIT)',
    list: [35319679929.67, 330258687.8825, 772814149.396538, -1070977055.98, -11491523354.08]
  },
  {
    name: '税息折旧及摊销前利润(EBITDA)',
    list: [47935922623.06, 789771242.835, 2592540412.17231, -9866928.07250007, -10533275756.09]
  },
  { name: '税前利润', list: [40957792203.69, 386670692.8525, 1399239775.32115, -35398920.1925, -11781146135.59] },
  { name: '毛利润', list: [112736625486.56, 5138169270.0475, 7988069365.42423, 391847541.35, -224929083.31] },
  {
    name: '扣除非经常性损益后净利润',
    list: [30510588205.53, 215460923.47, 453859562.675385, -1045897082.205, -11132181217.79]
  },
  { name: '净利润', list: [35288906907.63, 370242810.3225, 1195294044.035, 6469789.1, -11191325134.77] },
  { name: '股东权益合计', list: [300839624341.71, 17042020163.295, 26202276861.1965, 2762454360.16, -1358911862.98] },
  { name: '负债合计', list: [548493655257.48, 36005532424.0625, 44156816381.2888, 5023523026.4575, 2357282093.91] },
  { name: '总负债增长率', list: [43.96637262, 3.507553275, -3.83040685038462, -11.5816957975, -35.95121199] },
  {
    name: '现金及现金等价物净增加额',
    list: [3605325137.81, 900420005.64, -28432567.1965385, -600564804.32, -7501357079]
  },
  {
    name: '投资活动产生的现金流量净额',
    list: [1686056675.5, 61081505.53, -3771430379.23808, -2583257356.93, -39264387323.87]
  },
  {
    name: '经营活动产生的现金流量净额',
    list: [46271852926.75, 2577234198.0425, 3179294900.42808, -234952965.49, -6377970073.56]
  },
  { name: '负债权益比', list: [1790.3763, 278.85995, 293.376019230769, 124.515, -243.2418] },
  {
    name: '筹资活动产生的现金流量净额',
    list: [14034822405.43, 38150387.4575, 570472762.828077, -681412955.1725, -3645544163.5]
  },
  { name: '总资产增长率', list: [29.36390898, 3.966657715, -6.41976855653846, -7.8389793925, -56.88301782] },
  { name: '营业收入增长率', list: [30.39259753, 7.0799441725, -7.16166806653846, -13.1016225, -79.77676621] },
  { name: '所有者权益增长率', list: [15.16947261, 5.66148711, -4.0820299184, -0.94964351, -63.66289745] },
  { name: '毛利润增长率', list: [265.31427723, 15.36141895, 9.52956160478261, -7.23823752, -68.38779483] },
  { name: '净利润增长率', list: [139.04720596, 104.01394051, 18.3168721309524, -24.65545519, -86.10519316] },
  { name: '资产负债率', list: [169.812, 76.42385, 70.9466076923077, 57.2793, 39.9938] },
  { name: '债务权益比', list: [466.207, 103.80335, 79.8044653846154, 3.0737, -85.0841] },
  { name: '现金比率', list: [79.5611, 40.909075, 30.9557692307692, 16.343325, 6.7717] },
  { name: '速动比率', list: [129.7502, 90.88165, 64.5083115384615, 37.825225, 7.1534] },
  { name: '权益乘数', list: [1890.3763, 378.85995, 393.376019230769, 224.515, -143.2418] },
  { name: '流动比率', list: [166.6249, 127.0219, 104.607080769231, 86.213825, 33.141] }
]
export default {
  components: { timeSelect },
  data() {
    return {
      tableId: 'newsTable',
      noData: false,
      loading: false,
      height: '500px',
      tableData: [],
      tags: ['company', 'people', 'industry', 'product', 'event'],
      dateTime: new Date().setFullYear(new Date().getFullYear() - 1),
      value1: 30,
      value2: 30,
      value3: 30,
      value4: 30,
      typeMap: {
        1: '授信客户',
        2: '行内客户'
      },
      type: 1,
      pieOptions: {
        title: {
          text: '投向行业分布',
          textStyle: {
            color: '#ccc',
            fontWeight: 'normal',
            fontSize: 14
          },
          top: 'middle',
          left: 'middle',
          textAlign: 'middle'
        },
        color: ['#147AD6', '#79D2DE', '#EC6666'],
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          show: false
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            data: [
              { value: 55, name: '汽车' },
              { value: 22, name: '房地产' },
              { value: 22, name: '餐饮' }
            ]
          }
        ]
      },
      lineOptions: {
        color: ['#147AD6', '#DCDEE3'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['贷款余额', '贷款额'],
          bottom: 0
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['汽车', '房地产', '餐饮'],
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#999999'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#F2F2F2'
            }
          }
        },
        series: [
          {
            name: '贷款余额',
            type: 'bar',
            stack: '总量',
            barWidth: '35%',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 302, 301]
          },
          {
            name: '贷款额',
            type: 'bar',
            stack: '总量',
            barWidth: '35%',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [120, 132, 101]
          }
        ]
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > new Date().getTime() - 3600 * 24 * 365 * 1000
        }
      },
      sliderData: []
    }
  },
  watch: {
    type: {
      immediate: true,
      handler(data) {
        this.sliderData = sliderData
          .filter((item) => item.type === data)
          .map((item) => {
            let status = statusList.find((status) => status.name === item.name).list
            let sumList = [15, 32.5, 50, 67.5, 85, 100]
            item.number = item.value
            let statusMapList = status
              .map((item, index) => {
                const namsList = ['优秀', '良好', '平均', '较低', '较差']
                return {
                  style: {
                    color: '#94979B'
                  },
                  label: `${namsList[index]}${item.toFixed(1)}%`,
                  value: item
                }
              })
              .sort((a, b) => {
                return b.value - a.value
              })
            item.marks = {
              15: {
                style: statusMapList[0].style,
                label: statusMapList[0].label
              },
              32.5: {
                style: statusMapList[1].style,
                label: statusMapList[1].label
              },
              50: {
                style: statusMapList[2].style,
                label: statusMapList[2].label
              },
              67.5: {
                style: statusMapList[3].style,
                label: statusMapList[3].label
              },
              85: {
                style: statusMapList[4].style,
                label: statusMapList[4].label
              }
            }
            let max = 99999
            let index = 0
            statusMapList.forEach((num, i) => {
              if (num.value > item.value && num.value < max) {
                max = num.value
                index = i
              }
            })
            let sum = sumList[index] || 0
            let min = statusMapList[index + 1].value || 0
            item.value = ((max - item.value) / (max - min)) * 17.5 + sum
            return item
          })
      }
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
      testList(params)
        .then((res) => {
          this.loading = false
          res.result.forEach((i) => {
            if (i.companys && i.companys.length > 1) {
              for (let g = 0; g < i.companys.length; g++) {
                for (let h = g + 1; h < i.companys.length; h++) {
                  if (i.companys[g].comcode === i.companys[h].comcode) {
                    if (typeof i.companys[g].secu === 'string') {
                      i.companys[g].secu = [i.companys[g].secu, i.companys[h].secu]
                    } else {
                      i.companys[g].secu.push(i.companys[h].secu)
                    }
                    i.companys.splice(h, 1)
                    h--
                  }
                }
              }
              i.companys = i.companys.sort((a, b) => {
                let start = a.relationshipType || 999
                let end = b.relationshipType || 999
                return start - end
              })
            }
            if (i.people && i.people.length > 0) {
              let _map = new Map()
              i.people = i.people.filter((n) => {
                //去重
                if (n.code) {
                  if (!_map.has(n.code)) {
                    _map.set(n.code, 1)
                    return n
                  }
                } else {
                  return n
                }
              })
              i.people = i.people.sort((a, b) => {
                let start = a.relationshipType || 999
                let end = b.relationshipType || 999
                return start - end
              })
            }
          })
          this.tableData = res.result || []
        })
        .catch((err) => {
          this.loading = false
          this.tableData = []
        })
    },
    drawChart() {
      this.myChart = echarts.init(document.getElementById('pie-chart'))
      this.myChart2 = echarts.init(document.getElementById('bar-chart'))
      this.myChart.setOption(this.pieOptions, true)
      this.myChart2.setOption(this.lineOptions, true)
    }
  },
  mounted() {
    this.search()
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
@import '~@/assets/styles/common/component';
@import '~@/assets/styles/common/newsList';
.test-main {
  padding: 0 100px;
  .time-select {
    left: 136px !important;
    top: 12px !important;
  }

  .filter-main {
    padding: 20px 0 !important;
    border-bottom: 1px dashed #cccccc;

    span {
      display: inline-block;
      line-height: 22px;
      padding: 0 8px;
      margin-right: 8px;
      border-radius: 4px;
      color: #000000;
      cursor: pointer;

      &.active {
        background: #3a84ff;
        color: white;
      }
    }
  }
  .tag-list {
    width: 100%;
    box-sizing: border-box;
    span {
      display: inline-block;
      background: linear-gradient(50deg, #e68b6b 0%, #e86b4a 100%);
      border-radius: 2px;
      line-height: 22px;
      padding: 0 8px;
      margin-right: 8px;
      color: white;
    }
  }
}
.main-body {
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);
  margin-bottom: 20px;
  box-sizing: border-box;

  .logo {
    display: inline-block;
    width: 76px;
    height: 76px;
    margin: 20px 24px;
    background-image: url(~@/assets/imgs/changan_logo.png);
    box-sizing: border-box;
  }

  .com-info {
    display: inline-block;
    width: calc(100% - 124px);
    vertical-align: top;
    margin: 20px 0;

    .com-title {
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      color: #1b253a;
      line-height: 28px;
      box-sizing: border-box;
      vertical-align: top;
      margin-bottom: 6px;

      .type-tag {
        display: inline-block;
        font-size: 12px;
        line-height: 22px;
        border-radius: 2px;
        width: 60px;
        color: white;
        box-sizing: border-box;
        text-align: center;
        height: 22px;
        background: rgba(0, 0, 0, 0);
        vertical-align: top;
        margin-top: 3px;
        &.type_1 {
          background: linear-gradient(50deg, #eabc93 0%, #e2a570 100%);
        }
        &.type_2 {
          background: linear-gradient(50deg, #b3b2c9 0%, #9b9dc4 100%);
        }
      }
    }
    .com-tags {
      width: 100%;
      box-sizing: border-box;
      vertical-align: top;
      width: calc(100% - 124px);
      line-height: 22px;
      margin-bottom: 6px;

      span {
        display: inline-block;
        padding: 0 8px;
        margin-right: 12px;

        background: #e7f0ff;
        border-radius: 3px;
        font-size: 12px;
        font-weight: 400;
        color: #3a84ff;

        &:first-of-type {
          background: #e4fde7;
          border-radius: 3px;
          color: #08a24c;
        }
      }
    }
    .com-address {
      width: 100%;
      box-sizing: border-box;
      vertical-align: top;
      font-size: 12px;
      font-weight: 400;
      color: #94979b;
      line-height: 18px;
    }
  }

  .slider-main {
    padding: 20px 0;

    .line {
      width: 100%;
      height: 50px;
      margin-bottom: 40px;

      & > span {
        display: inline-block;
        width: 180px;
        font-size: 14px;
        vertical-align: top;
        line-height: 40px;
      }

      .slider {
        display: inline-block;
        width: calc(100% - 140px);
        max-width: 600px;
      }
    }

    .time-line {
      height: 28px;
      margin-bottom: 20px;

      .time-select-main {
        float: left;
      }
    }
  }

  .industrial-main {
    width: 100%;
    height: calc(100% - 30px);
    padding: 0;
    margin: 0;

    .left,
    .right {
      display: inline-block;
      width: calc(70% - 20px);
      height: 100%;
      box-sizing: border-box;
      vertical-align: top;

      .head-div {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        background-color: #e7f0ff;
        color: #3a84ff;
      }

      .body-div {
        width: 100%;
        height: calc(100% - 40px);
        box-sizing: border-box;
        padding: 20px 0;
        display: flex;
      }

      .column {
        width: calc(33% - 20px);
        height: 100%;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;

        .tab {
          border-radius: 4px;
          border: 1px solid #cccccc;

          .name {
            width: 100%;
            line-height: 36px;
            background-color: #3a84ff;
            font-size: 14px;
            font-weight: bolder;
            color: white;
            text-indent: 2em;
          }

          .children {
            font-size: 14px;
            font-weight: normal;

            .child-com {
              width: 100%;
              padding: 6px 8px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              box-sizing: border-box;
              border-bottom: 1px solid #cccccc;
            }
            .show-more {
              width: 100%;
              padding: 6px 8px;
              text-align: center;
              color: #3a84ff;
              cursor: pointer;
            }

            span {
              display: inline-block;
              color: #3a84ff;
              background-color: #e4e6ff;
              padding: 0 8px;
              margin-right: 8px;
            }
          }
        }
      }
      .relation_1 {
        width: 35px;
        height: 100%;
        background-image: url(~@/assets/imgs/relation_1.png);
        background-repeat: no-repeat;
        background-position-y: 20px;
      }
      .relation_2 {
        width: 35px;
        height: 100%;
        background-image: url(~@/assets/imgs/relation_2.png);
        background-repeat: no-repeat;
        background-position-y: 20px;
      }
    }

    .right {
      width: 30%;
      .head-div {
        margin-left: 20px;
        background-color: #f8e6d2;
        color: #e9ae6c;
      }

      .body-div {
        margin-left: 20px;
        width: calc(100% - 20px);
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
}
#pie-chart,
#bar-chart {
  display: inline-block;
  width: 50%;
  height: 100%;
}
</style>
<style lang="scss">
.line {
  .el-slider__runway {
    background: linear-gradient(90deg, #229700 0%, #f2ec00 52%, #f12b11 100%) !important;
  }
  .el-slider__bar {
    background: rgba(0, 0, 0, 0) !important;
  }
}
</style>