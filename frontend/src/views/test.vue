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
    <div class="main-body com-main" style="height: 560px">
      <h1 class="com-title">行业财务基准对比</h1>
      <div class="filter-main">
        <span :class="{ active: type === 1 }" @click="type = 1">出售资产</span>
        <span :class="{ active: type === 2 }" @click="type = 2">产量冻结</span>
        <span :class="{ active: type === 3 }" @click="type = 3">机构减持</span>
        <span :class="{ active: type === 4 }" @click="type = 4">董事辞职</span>
      </div>
      <div class="slider-main">
        <div class="line time-line">
          <time-select></time-select>
        </div>
        <div class="line">
          <span>营业收入增长率 ：</span>
          <el-slider class="slider" v-model="value1" :marks="marks"></el-slider>
        </div>
        <div class="line">
          <span>毛利润增长率 ：</span>
          <el-slider class="slider" v-model="value2" :marks="marks"></el-slider>
        </div>
        <div class="line">
          <span>净利润增长率 ：</span>
          <el-slider class="slider" v-model="value3" :marks="marks"></el-slider>
        </div>
        <div class="line">
          <span>总资产增长率 ：</span>
          <el-slider class="slider" v-model="value4" :marks="marks"></el-slider>
        </div>
      </div>
    </div>
    <div class="main-body com-main" style="height: 480px">
      <h1 class="com-title">产业布局</h1>
      <h1 class="industrial-main">
        <div class="left">
          <div class="head-div">产业链内产业布局</div>
          <div class="body-div">
            <div class="column">
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
            <div class="relation"></div>
            <div class="column">
              <div class="tab" style="margin-top: 80px">
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
            <div class="relation"></div>
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
          <span>出售资产</span>
          <span>产量冻结</span>
          <span>机构减持</span>
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
import { newsList } from '@/api/analysis'
import timeSelect from '../components/public/time-select.vue'
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
      value1: 30,
      value2: 30,
      value3: 30,
      value4: 30,
      marks: {
        18: {
          style: {
            color: '#94979B'
          },
          label: '优秀23%'
        },
        36: {
          style: {
            color: '#94979B'
          },
          label: '良好19%'
        },
        54: {
          style: {
            color: '#94979B'
          },
          label: '平均12%'
        },
        72: {
          style: {
            color: '#94979B'
          },
          label: '较低8%'
        },
        90: {
          style: {
            color: '#94979B'
          },
          label: '较差3%'
        }
      },
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
          top: '45%',
          left: '42%'
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
      newsList(params)
        .then((res) => {
          this.loading = false
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
    background-color: #cccccc;
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
        width: 140px;
        font-size: 14px;
        vertical-align: top;
        line-height: 40px;
      }

      .slider {
        display: inline-block;
        width: calc(100% - 140px);
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
        height: 100%;
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
      .relation {
        width: 35px;
        height: 100%;
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
        padding: 20px 0;
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