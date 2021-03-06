<template>
  <div class="main">
    <h1 class="main-title">
      <a class="backTo" @click="backTo">&lt;返回</a>
      {{ name }}产业链
    </h1>
    <div class="chart" id="chart-body" v-loading="loading">
      <div class="filter">
        <div class="filter-label">省份：</div>
        <div class="filter-value">
          <el-select ref="regionSelect" v-model="form.region" placeholder="请选择省份">
            <el-option v-for="item in regions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="filter-label">支柱产业链：</div>
        <div class="filter-value">
          <el-select ref="idSelect" v-model="form.id" placeholder="请选择产业链">
            <el-option
              v-for="item in idMap[form.region]"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="chart-main" id="chart" @click="clearDrop"></div>
      <div ref="tooltip" class="chart-tooltip" @mouseleave="hideTip">
        <template v-if="current && current.samCodes && current.samCodes.length">
          <div style="margin-bottom: 16px">
            <h1 v-show="current.samCodes.length > 1" style="margin-bottom: 4px">请选择细分产业节点</h1>
            <el-radio
              v-show="current.samCodes.length > 1"
              v-model="currentSam"
              v-for="item in current.samCodes"
              :label="item.samCode"
              :key="item.samCode"
            >
              {{ item.samName }}
            </el-radio>
          </div>
          <h1>行业分析</h1>
          <span @click="onItemClick('/analysis/env')">行业环境</span>
          <span @click="onItemClick('/analysis/prospect')">行业前景</span>
          <span @click="onItemClick('/analysis/policy')">政策导向</span>
          <span @click="onItemClick('/analysis/compete')">竞争格局</span>
          <span @click="onItemClick('/analysis/risk')">行业风险</span>
          <span @click="onItemClick('/analysis/customer')">行业获客</span>
          <span @click="onItemClick('/analysis/information')">行业舆情</span>
          <h1>行业基准</h1>
          <span @click="onItemClick('/base/ability', 1)">成长能力</span>
          <span @click="onItemClick('/base/ability', 2)">盈利能力</span>
          <span @click="onItemClick('/base/ability', 3)">偿还能力</span>
          <span @click="onItemClick('/base/ability', 4)">运营能力</span>
          <span @click="onItemClick('/base/ability', 5)">业务指标</span>
          <span @click="onItemClick('/base/finance')">龙头财务</span>
          <h1>产业分析</h1>
          <span @click="onItemClick('/industrial/boom')">景气图谱</span>
          <span @click="onItemClick('/industrial/risk')">风险图谱</span>
          <h1>存量客户</h1>
          <span @click="onItemClick('/stockCustom/index')">存量客户画像</span>
        </template>
        <div v-else style="text-align: center" :style="{ 'line-height': this.tooltip.height + 'px' }">暂无数据</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getIndustry, industryList } from '@/api/pillar'
import ViewChart from '@/mixins/viewChart'
import pageTo from '@/mixins/pageTo'
export default {
  data() {
    return {
      loading: false,
      name: null,
      form: {
        region: '',
        id: ''
      },
      regions: [
        { label: '重庆市', value: 'CSF_CN_500000' },
        { label: '四川省', value: 'CSF_CN_510000' },
        { label: '陕西省', value: 'CSF_CN_610000' },
        { label: '贵州省', value: 'CSF_CN_520000' }
      ],
      idMap: {
        CSF_CN_500000: [],
        CSF_CN_510000: [],
        CSF_CN_610000: [],
        CSF_CN_520000: []
      },
      tooltip: {
        width: 440,
        height: 360
      },
      treeNode: {
        width: 120,
        height: 40
      },
      current: null,
      currentSam: null,
      isInited: true
    }
  },
  watch: {
    'form.region': {
      deep: true,
      handler(data) {
        if (this.isInited) return
        this.form.id = this.idMap[data][0].value
        this.form.name = this.idMap[data][0].label
      }
    },
    'form.id': {
      deep: true,
      handler(data) {
        if (this.idMap[this.form.region]) {
          this.form.name = this.idMap[this.form.region].find((item) => item.value === data).label
        }
        this.showDepth_min = 2
        this.hideTip()
        this.getData()
      }
    }
  },
  mixins: [ViewChart, pageTo],
  methods: {
    showTip(event, data) {
      let top = 0
      let left = 0
      if (data.samCodes && data.samCodes[0]) {
        this.tooltip.height = 360
      } else {
        this.tooltip.height = 80
      }
      if (data.productCode === this.form.id) return
      this.current = data
      this.currentSam = data.samCodes && data.samCodes[0] ? data.samCodes[0].samCode || null : null
      left = event.pageX
      top = event.pageY - this.tooltip.height / 2 - 100
      this.$refs.tooltip.style.display = 'block'
      this.$refs.tooltip.style.top = top + 'px'
      this.$refs.tooltip.style.left = left + 'px'
    },
    hideTip() {
      this.$refs.tooltip.style.display = 'none'
    },
    onItemClick(path, abilityType) {
      let { name, code } = { ...this.current }
      let type = 2
      if (abilityType) {
        this.pageTo(path, { name, type, code: this.currentSam, abilityType: abilityType }, true)
      } else {
        this.pageTo(path, { name, type, code: this.currentSam }, true)
      }
    },
    backTo() {
      this.$router.go(-1)
    },
    getData() {
      this.loading = true
      getIndustry({
        region: this.form.region,
        id: this.form.id
      })
        .then((res) => {
          this.loading = false
          let map = {}
          map[this.form.id] = {
            productCode: this.form.id,
            name: this.form.name,
            parentCode: null,
            children: [],
            samCodes: []
          }
          res.result.forEach((item) => {
            item.productCode = item.code
            item.children = item.children || []
            map[item.code] = item
          })
          res.result.forEach((item) => {
            if (item.parentCode) {
              map[item.parentCode].children.push(item)
            } else if (item.code !== this.form.id) {
              item.parentCode = this.form.id
              map[item.parentCode].children.push(item)
            }
          })
          let startCode = map[this.form.id]
          this.name = startCode.name
          this.start(startCode, [])
          this.isInited = false
        })
        .catch((err) => {
          this.loading = false
          this.start({}, [])
          this.isInited = false
        })
    },
    initSelect() {
      industryList({})
        .then((res) => {
          res.result.forEach((item) => {
            this.idMap[item.regionCode] = []
            this.idMap[item.regionCode] = item.tree.map((node) => {
              return {
                label: node.name,
                value: String(node.id)
              }
            })
          })
          this.form.region = this.$route.query.region
          this.form.id = this.$route.query.id
          this.form.name = this.$route.query.name
        })
        .then((err) => {})
    },
    clearDrop() {
      this.$refs.regionSelect.handleClose()
      this.$refs.idSelect.handleClose()
    }
  },
  mounted() {
    this.initSelect()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
.main {
  height: calc(100% - 48px);
}
.backTo {
  font-size: 14px;
  font-weight: 400;
  color: #3a84ff;
  line-height: 20px;
  margin-right: 12px;
  cursor: pointer;
}
.chart {
  width: 100%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  position: relative;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);
}
.filter {
  position: absolute;
  top: 20px;
  left: 20px;

  .filter-value,
  .filter-label {
    display: inline-block;
  }

  .filter-label {
    height: 22px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.85);
    line-height: 22px;
    padding: 0 8px;
  }
}
.chart-tooltip {
  display: none;
  position: absolute;
  width: 500px;
  top: 0;
  left: 0;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08),
    0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  padding: 14px 20px;
  box-sizing: border-box;

  h1 {
    font-size: 14px;
    font-weight: 400;
    color: #25211f;
    line-height: 20px;
    margin: 0 0 16px 0;
  }

  span {
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
    font-weight: 400;
    color: #94979b;
    line-height: 18px;
    margin: 0 16px 12px 0;
    cursor: pointer;

    &:hover {
      color: #3a84ff;
    }
  }
}
</style>