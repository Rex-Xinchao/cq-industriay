<template>
  <div class="com-main">
    <h1 class="com-title">
      {{ title }}
    </h1>
    <div class="com-filter">
      <time-select v-model="dateTime" :options="options" startValue="1Y" style="float: left"></time-select>
    </div>
    <div class="com-cards"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTime: [],
      options: [
        {
          value: '1Y',
          label: '最近1年'
        },
        {
          value: '3Y',
          label: '最近3年'
        },
        {
          value: '5Y',
          label: '最近5年'
        },
        {
          value: 'udf',
          label: '自定义'
        },
        {
          value: 'udf_show',
          label: '自定义'
        }
      ]
    }
  },
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/component';
.com-filter {
  padding-top: 16px;
}
</style>
