<template>
  <div class="footer">@copyright {{ org }} ｜登录IP：{{ ip }} 上次登录时间：{{ time }}</div>
</template>
<script>
export default {
  data() {
    return {
      org: '重庆银行互联网金融部',
      ip: '172.16.238.219',
      time: '2020-11-25'
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
  background-color: #f4f6f9;
  line-height: 40px;
}
</style>