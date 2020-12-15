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
          <el-select v-model="form.region" placeholder="请选择省份">
            <el-option v-for="item in regions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="filter-label">产业链：</div>
        <div class="filter-value">
          <el-select v-model="form.type" placeholder="请选择产业链">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </div>
      </div>
      <div class="chart-main" id="chart"></div>
    </div>
  </div>
</template>
<script>
import { getIndustry } from '@/api/pillar'
import ViewChart from '@/mixins/viewChart'
export default {
  data() {
    return {
      loading: false,
      name: null,
      form: {
        region: '',
        type: ''
      },
      regions: [
        { label: '重庆市', value: 1 },
        { label: '四川省', value: 2 },
        { label: '陕西省', value: 3 },
        { label: '贵州省', value: 4 }
      ]
    }
  },
  mixins: [ViewChart],
  watch: {
    form: {
      deep: true,
      handler() {
        this.getData()
      }
    }
  },
  methods: {
    backTo() {
      this.$router.go(-1)
    },
    getData() {
      this.loading = true
      getIndustry({
        id: this.$route.query.id,
        region: this.form.region,
        type: this.form.type
      })
        .then((res) => {
          this.loading = false
          let map = {}
          res.result.forEach((item) => {
            item.productCode = item.industryCode
            item.name = item.industryName
            item.children = item.children || []
            map[item.industryCode] = item
          })
          res.result.forEach((item) => {
            if (item.parentCode) {
              map[item.parentCode].children.push(item)
            }
          })
          let startCode = res.result.filter((item) => !item.parentCode)[0]
          this.name = startCode.industryName
          this.start(startCode, [])
        })
        .catch((err) => {
          this.loading = false
          this.start({}, [])
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';
.main {
  height: calc(100% - 40px);
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
</style>