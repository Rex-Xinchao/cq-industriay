<template>
  <div class="com-main risk-table-main">
    <h1 class="main-title">
      {{ title }}
      <div class="fr">
        <el-select class="select" v-model="typeSelect">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <time-select class="select" v-model="timeSelect"></time-select>
      </div>
    </h1>
    <ul class="tag-list">
      <li
        v-for="(item, index) in tags"
        :key="index"
        class="event-tag"
        :class="`tag-grade_${item.grade}`"
        @click="pageTo(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul class="company-list">
      <li class="company-main">
        <p class="line info-line">
          <span>客户A公司</span>
          <span>投放规模：12亿</span>
          <span>逾期金额：0</span>
          <span>逾期天数：0</span>
        </p>
        <p class="line tag-line">
          <span
            v-for="(item, index) in tags"
            :key="index"
            class="event-tag"
            :class="`tag-grade_${item.grade}`"
            @click="pageTo(item)"
          >
            {{ item.name }}
          </span>
        </p>
      </li>
      <li class="company-main">
        <p class="line info-line">
          <span>客户A公司</span>
          <span>投放规模：12亿</span>
          <span>逾期金额：0</span>
          <span>逾期天数：0</span>
        </p>
        <p class="line tag-line">
          <span
            v-for="(item, index) in tags"
            :key="index"
            class="event-tag"
            :class="`tag-grade_${item.grade}`"
            @click="pageTo(item)"
          >
            {{ item.name }}
          </span>
        </p>
      </li>
      <li class="company-main">
        <p class="line info-line">
          <span>客户A公司</span>
          <span>投放规模：12亿</span>
          <span>逾期金额：0</span>
          <span>逾期天数：0</span>
        </p>
        <p class="line tag-line">
          <span
            v-for="(item, index) in tags"
            :key="index"
            class="event-tag"
            :class="`tag-grade_${item.grade}`"
            @click="pageTo(item)"
          >
            {{ item.name }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import timeSelect from '../public/time-select.vue'
export default {
  components: { timeSelect },
  data() {
    return {
      timeSelect: 1,
      timeOptions: [
        { label: '近三月', value: 1 },
        { label: '近半年', value: 2 },
        { label: '近一年', value: 3 }
      ],
      typeSelect: 1,
      typeOptions: [{ label: '投资规模', value: 1 }],
      tags: [
        { name: '销户', grade: 1 },
        { name: '面临困难', grade: 1 },
        { name: '股东减持', grade: 2 },
        { name: '其他消息', grade: 2 },
        { name: '调查立案', grade: 3 }
      ]
    }
  },
  props: {
    title: String
  },
  methods: {
    pageTo(item) {
      // let url = ''
      //   window.open('')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/component';
@import '~@/assets/styles/eventTag';
.risk-table-main {
  .select {
    margin-left: 12px;
    float: right;
  }

  .tag-list {
    width: 100%;
    margin-top: 12px;
    border-bottom: 1px solid #eff0f1;
    padding: 8px 0;
  }

  .company-list {
    width: 100%;
    padding: 12px 0;

    .company-main {
      margin-bottom: 8px;
    }

    .line {
      width: 100%;
      padding: 0;
      margin: 0;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      line-height: 30px;
    }

    .info-line {
      span {
        display: inline-block;
        margin-right: 40px;
      }
    }
  }
}
</style>