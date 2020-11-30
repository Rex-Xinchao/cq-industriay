<template>
  <div class="area-search">
    <el-select
      v-model="areas"
      filterable
      remote
      reserve-keyword
      class="search-main"
      placeholder="请输入区域关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-popover placement="bottom" width="200" trigger="click">
      <el-tree
        ref="tree"
        @check="check"
        :data="treeData"
        show-checkbox
        check-strictly
        node-key="value"
        :props="defaultProps"
      ></el-tree>
      <i class="icon-more el-icon-more" slot="reference"></i>
    </el-popover>
    <el-button class="search-btn fr" type="primary" @click="search">查询</el-button>
  </div>
</template>
<script>
export default {
  name: 'area-search',
  data() {
    return {
      loading: false,
      areas: null,
      options: [],
      treeData: [
        {
          label: '上海',
          value: 'shanghai',
          children: [
            {
              label: '徐汇区',
              value: 'xuhui'
            }
          ]
        },
        {
          label: '北京',
          value: 'beijing'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    search() {},
    check(node, params) {
      this.options = [{ ...node }]
      this.areas = node.value
      this.$refs.tree.setCheckedKeys([node.value], false)
    },
    remoteMethod(query) {
      if (!query) return
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.options = [
          {
            label: '上海',
            value: 'shanghai'
          },
          {
            label: '北京',
            value: 'beijing'
          }
        ]
      }, 200)
    }
  }
}
</script>
<style lang="scss" scoped>
.area-search {
  position: relative;
  .icon-more {
    position: absolute;
    right: 74px;
    top: 5px;
    cursor: pointer;
    z-index: 1001;
  }
}
.search-main {
  width: calc(100% - 62px);
}
.search-btn {
  margin-left: 6px;
}
</style>
<style lang="scss">
.area-search {
  .search-main {
    .el-input__inner {
      border-radius: 2px;
      background-color: white;
    }
    .el-select__tags {
      padding-left: 24px;
    }
  }
}
</style>