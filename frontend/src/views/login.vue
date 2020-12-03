<template>
  <div class="login-main">
    <div class="login-head">
      <div class="login-logo"></div>
      <div class="login-btn">登录</div>
    </div>
    <div class="login-body">
      <div class="login-logo_2"></div>
      <ul class="login-menu">
        <li :class="{ active: type === 1 }" @click="type = 1">企业</li>
        <li :class="{ active: type === 2 }" @click="type = 2">自然人</li>
        <li :class="{ active: type === 3 }" @click="type = 3">行业</li>
        <li :class="{ active: type === 4 }" @click="type = 4">区域经济</li>
      </ul>
      <div class="login-search">
        <el-input class="input search-main" size="medium" placeholder="请输入关键词"></el-input>
        <el-button class="btn" type="primary" size="medium">搜索</el-button>
      </div>
      <div class="login-history">
        <div class="title">热点搜索：</div>
        <div class="list">
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
          <span>有色冶炼加工</span>
        </div>
      </div>
      <div class="login-notice">
        <span class="notice-txt">公告</span>
        <ul ref="notice">
          <li>
            <span class="notice-main">风铃智评最新版本上线</span>
            <span class="notice-time">2020年12月20日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新2</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评最新版本上线</span>
            <span class="notice-time">2020年12月20日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
          <li>
            <span class="notice-main">风铃智评版本更新2</span>
            <span class="notice-time">2020年02月27日</span>
          </li>
        </ul>
        <span class="notice-tool">
          <i class="up" @click="up"></i>
          <i class="down" @click="down"></i>
        </span>
      </div>
      <div class="login-tab">
        <div class="item">行业洞察</div>
        <div class="item">全行风险报告</div>
        <div class="item">找关系</div>
        <div class="item">预警中心</div>

        <div class="item">支柱产业</div>
        <div class="item">全行客户</div>
        <div class="item">城投专题</div>
        <div class="item">
          <p>房地产专题</p>
          <p>敬请期待</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 1,
      index: 1
    }
  },
  methods: {
    up() {
      let marginTop = this.$refs.notice.style.marginTop || '0px'
      marginTop = Number(marginTop.split('px')[0]) + 30
      if (this.index === 1) {
        marginTop = -30 * (3 - 1)
        this.index = 3
      } else {
        this.index -= 1
      }
      this.$refs.notice.style.marginTop = marginTop + 'px'
    },
    down() {
      let marginTop = this.$refs.notice.style.marginTop || '0px'
      marginTop = Number(marginTop.split('px')[0]) - 30
      if (this.index === 3) {
        marginTop = -30 * (3 - 1)
        this.index -= 1
      } else {
        this.index += 1
      }
      this.$refs.notice.style.marginTop = marginTop + 'px'
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.login-main {
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/imgs/background.png);
  background-repeat: no-repeat;
  background-size: cover;

  .login-head {
    padding: 20px 35px 0 35px;
    overflow: hidden;

    .login-logo {
      width: 184px;
      height: 50px;
      background-image: url(~@/assets/imgs/login-logo.png);
      background-repeat: no-repeat;
      background-size: contain;
      float: left;
    }

    .login-btn {
      background: rgba(0, 0, 0, 0);
      color: white;
      width: 80px;
      line-height: 32px;
      border-radius: 4px;
      border: 1px solid white;
      text-align: center;
      float: right;
      cursor: pointer;
    }
  }

  .login-body {
    width: 100%;
    height: auto;
    margin-top: 80px;

    .login-logo_2 {
      width: 260px;
      height: 76px;
      background-image: url(~@/assets/imgs/login-logo2.png);
      background-repeat: no-repeat;
      background-size: contain;
      margin: 0 auto;
    }

    .login-menu {
      display: block;
      width: 750px;
      color: white;
      margin: 30px auto 24px auto;

      li {
        display: inline-block;
        padding: 0 4px;
        margin: 0 6px;
        font-size: 20px;
        line-height: 28px;
        cursor: pointer;

        &.active {
          border-bottom: 2px solid white;
        }
      }
    }

    .login-search {
      width: 750px;
      margin: 0 auto;

      .input {
        width: calc(100% - 116px);
        margin-right: 20px;
      }

      .btn {
        width: 96px;
        letter-spacing: 4px;
      }
    }

    .login-history {
      width: 750px;
      margin: 20px auto 30px auto;
      color: white;
      font-size: 12px;
      overflow: hidden;

      .title {
        width: 70px;
        height: auto;
        float: left;
      }

      .list {
        width: calc(100% - 70px);
        float: right;

        span {
          display: inline-block;
          margin-right: 20px;
        }
      }
    }

    .login-notice {
      width: 750px;
      height: 30px;
      line-height: 30px;
      background: rgba(1, 25, 61, 0.52);
      border-radius: 2px;
      margin: 0 auto;
      font-size: 14px;
      color: white;
      padding: 0 16px;
      box-sizing: border-box;
      overflow: hidden;

      .notice-txt {
        display: inline-block;
        vertical-align: top;
        margin-right: 12px;
      }

      .notice-tool {
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 30px;
        padding: 7px 0;
        box-sizing: border-box;

        .up {
          display: block;
          width: 16px;
          height: 8px;
          background-image: url(~@/assets/imgs/login/up.svg);
          cursor: pointer;

          &:hover {
            background-image: url(~@/assets/imgs/login/up_active.svg);
          }
        }
        .down {
          display: block;
          width: 16px;
          height: 8px;
          background-image: url(~@/assets/imgs/login/down.svg);
          cursor: pointer;

          &:hover {
            background-image: url(~@/assets/imgs/login/down_active.svg);
          }
        }
      }

      ul {
        display: inline-block;
        width: calc(100% - 60px);
        animation-name: paused;
        animation-duration: 6s;
        animation-timing-function: linear;
        animation-delay: 1s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-play-state: running;

        .notice-time {
          float: right;
          margin-right: 12px;
        }

        li {
          margin: 0;
          overflow: hidden;
        }
      }

      &:hover {
        ul {
          animation-play-state: paused;
        }
      }
    }
  }

  @keyframes move {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-50%);
    }
  }
}
.login-tab {
  width: 1120px;
  margin: 50px auto 0 auto;
  box-sizing: border-box;

  .item {
    display: inline-block;
    width: 120px;
    height: 86px;
    background-color: #ccc;
    margin: 10px;
    border-radius: 4px;
    vertical-align: top;
    font-size: 16px;
    font-weight: 500;
    color: #f8f9fb;
    line-height: 130px;
    letter-spacing: 1px;
    text-align: center;

    p {
      line-height: 22px;
      margin: 0;

      &:nth-of-type(1) {
        margin-top: 22px;
      }

      &:nth-of-type(2) {
        font-size: 12px;
      }
    }

    &:nth-of-type(1) {
      background-image: url(~@/assets/imgs/login/1.png);
    }

    &:nth-of-type(2) {
      background-image: url(~@/assets/imgs/login/2.png);
    }

    &:nth-of-type(3) {
      background-image: url(~@/assets/imgs/login/3.png);
    }

    &:nth-of-type(4) {
      background-image: url(~@/assets/imgs/login/4.png);
    }

    &:nth-of-type(5) {
      background-image: url(~@/assets/imgs/login/5.png);
    }

    &:nth-of-type(6) {
      background-image: url(~@/assets/imgs/login/6.png);
    }

    &:nth-of-type(7) {
      background-image: url(~@/assets/imgs/login/7.png);
    }

    &:nth-of-type(8) {
      background-image: url(~@/assets/imgs/login/8.png);
    }
  }
}
</style>
<style lang="scss">
.login-search {
  .el-input__inner {
    border-radius: 4px;
    background-color: #f8f9fb;
    padding-left: 36px;
  }
}
</style>