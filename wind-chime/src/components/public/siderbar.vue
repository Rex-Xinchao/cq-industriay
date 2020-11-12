<template>
  <el-menu default-active="/stockCustom/index" class="sidebar" @open="handleOpen" @close="handleClose">
    <el-submenu v-for="(item, index) in menu" :index="`/${item.page}`">
      <template slot="title">
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item v-for="(child, index) in item.children" :index="`/${item.page}/${child.page}`">
        <router-link :to="`/${item.page}/${child.page}`">{{ child.name }}</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: '行业分析',
          page: 'analysis',
          children: [
            {
              page: 'env',
              name: '产业环境'
            },
            {
              page: 'prospect',
              name: '行业前景'
            },
            {
              page: 'policy',
              name: '政策导向'
            },
            {
              page: 'compete',
              name: '竞争格局'
            },
            {
              page: 'risk',
              name: '行业风险'
            },
            {
              page: 'customer',
              name: '行业货客'
            }
          ]
        },
        {
          name: '行业基准',
          page: 'base',
          children: [
            {
              page: 'grow',
              name: '成长能力'
            },
            {
              page: 'profit',
              name: '盈利能力'
            },
            {
              page: 'repay',
              name: '偿还能力'
            },
            {
              page: 'business',
              name: '运营能力'
            },
            {
              page: 'contrast',
              name: '对比工具'
            }
          ]
        },
        {
          name: '产业分析',
          page: 'industrial',
          children: [
            {
              page: 'pillar',
              name: '支柱产业'
            },
            {
              page: 'boom',
              name: '景气图谱'
            },
            {
              page: 'risk',
              name: '风险图谱'
            }
          ]
        },
        {
          name: '存量客户',
          page: 'stockCustom',
          children: [
            {
              page: 'index',
              name: '存量客户图像'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.sidebar {
  height: 100%;
}
.el-menu-item {
  a {
    text-decoration: none;
    color: #94979B;
  }
}

.is-active {
  a {
    color: #409EFF;
  }
}

.el-submenu .el-menu-item {
  height: 36px;
  line-height: 36px;
}
</style>