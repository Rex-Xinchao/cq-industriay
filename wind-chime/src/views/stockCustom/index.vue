<template>
  <div class="main">
    <h1 class="main-title">
      存量客户画像
      <span class="sign">汽车行业</span>
    </h1>
    <div class="item-box">
      <div class="item_33"></div>
      <div class="item_33"></div>
      <div class="item_33"></div>
      <div class="item_25"></div>
      <div class="item_25"></div>
      <div class="item_25"></div>
      <div class="item_25"></div>
      <div class="item_50" style="height: 385px"></div>
      <div class="item_50" style="height: 385px"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  background-color: #F4F6F9;

  .main-title {
    width: 100%;
    padding: 0;
    margin: 0 0 20px 0;
    font-size: 20px;
    font-weight: 600;
    color: #1B253A;
    line-height: 28px;

    .sign {
      display: inline-block;
      height: 22px;
      font-size: 16px;
      font-weight: 400;
      color: #3A84FF;
      line-height: 22px;
      background: rgba(58, 132, 255, 0.2);
      border-radius: 4px;
      padding: 1px 8px;
      margin-left: 12px;
    }
  }

  .item-box {
    width: 100%;
    height: calc(100% - 48px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;

    .item_50 {
      display: flex;
      width: calc(50% - 10px);
      height: 204px;
      background-color: white;
      margin-bottom: 20px;
    }

    .item_33 {
      display: flex;
      width: calc(100% / 3 - 40px / 3);
      height: 204px;
      background-color: white;
      margin-bottom: 20px;
    }

    .item_25 {
      display: flex;
      width: calc(100% / 4 - 15px);
      height: 204px;
      background-color: white;
      margin-bottom: 20px;
    }
  }
}
</style>
