<template>
  <div class="com-main finance-table-main">
    <h1 class="main-title">
      {{ title }}
      <i class="icon-tip" title="这是一个提示"></i>
    </h1>
    <el-table v-loading="loading" class="table" :data="tableData" height="200px">
      <el-table-column prop="name" label=""></el-table-column>
      <el-table-column prop="last" label="最新值"></el-table-column>
      <el-table-column prop="change" label="变动值"></el-table-column>
      <el-table-column label="变动率">
        <template slot-scope="scope">
          <span :class="scope.row.ratio && scope.row.ratio.indexOf('-') < 0 ? 'postive' : 'negative'">
            {{ scope.row.ratio }}
          </span>
          <i :class="scope.row.ratio && scope.row.ratio.indexOf('-') < 0 ? 'postive' : 'negative'" class="icon"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  props: {
    title: String
  },
  methods: {
    init() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.tableData = [
          { ratio: '+10%' },
          { ratio: '+10%' },
          { ratio: '+10%' },
          { ratio: '+10%' },
          { ratio: '+10%' },
          { ratio: '+10%' },
          { ratio: '+10%' }
        ]
      }, 1000)
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/component';
.finance-table-main {
  background-color: white;

  .negative {
    color: #08a24c;
  }

  .postive {
    color: #ea444e;
  }

  .icon {
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    width: 8px;
    height: 16px;
    background-repeat: no-repeat;
    &.negative {
      background-image: url(~@/assets/imgs/icons/down.svg);
    }
    &.postive {
      background-image: url(~@/assets/imgs/icons/up.svg);
    }
  }
}
</style>