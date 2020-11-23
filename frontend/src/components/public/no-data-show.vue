<template>
  <div class="no-data-show" v-if="show">
    <div class="msg">{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: 'no-data-show',
  props: {
    msg: {
      required: false,
      type: String,
      default: '暂无数据'
    },
    show: {
      required: true,
      type: Boolean
    }
  }
}
</script>
<style lang="scss" scoped>
.no-data-show {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .msg {
    position: absolute;
    width: 100%;
    text-align: center;
    top: calc(50% - 11px);
    font-size: 12px;
    font-weight: 400;
    color: #464646;
    line-height: 22px;
  }
}
</style>