<template>
  <div class="area-search">
    <el-select
      v-model="area"
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
      <div style="max-height: 280px; overflow: auto">
        <el-tree
          ref="tree"
          @check="check"
          :data="regions"
          show-checkbox
          check-strictly
          node-key="value"
          :props="defaultProps"
        ></el-tree>
      </div>
      <i class="icon-more el-icon-s-operation" style="color: #94979b" slot="reference"></i>
    </el-popover>
    <el-button v-if="showBtn" class="search-btn fr" type="primary" @click="search">查询</el-button>
  </div>
</template>
<script>
import { Regions } from '@/mixins/base'
import { mapGetters } from 'vuex'
export default {
  name: 'area-search',
  data() {
    return {
      area: null,
      loading: false,
      options: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapGetters(['regionCode', 'regionName'])
  },
  props: {
    showBtn: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    value: {
      reuired: true
    },
    startCode: Object
  },
  watch: {
    area(data) {
      this.$emit('update', data)
    },
    // startCode: {
    //   immediate: true,
    //   handler(data) {
    //     if (!data) return
    //     this.options = [data]
    //     this.area = data.value
    //   }
    // },
    regionCode: {
      immediate: true,
      handler(data) {
        if (!data) return
        this.options = [
          {
            label: this.regionName,
            value: this.regionCode
          }
        ]
        this.area = data
      }
    }
  },
  model: {
    prop: 'value', //绑定的值，通过父组件传递
    event: 'update' //自定义事件名
  },
  mixins: [Regions],
  methods: {
    search() {},
    check(node, params) {
      this.options = [{ ...node }]
      this.area = node.value
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
  height: 28px;
  line-height: 26px;
  box-sizing: border-box;
  .icon-more {
    position: absolute;
    right: 74px;
    top: 6px;
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