<template>
  <div class="main">
    <h1 class="main-title">
      政策导向
      <span class="sign">汽车行业</span>
    </h1>
    <div class="main-body">
      <el-form :inline="true" :model="form" class="filter-bar">
        <el-form-item label="">
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
      <div class="information-main"></div>
    </div>
  </div>
</template>
<script>
import { cards } from '@/mockData/prospect'
export default {
  data() {
    return {
      cards,
      form: {
        dateTime: [],
        region: null
      },
      regions: [],
      orgs: []
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
}
</style>