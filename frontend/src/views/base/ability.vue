<template>
  <div class="main">
    <div class="item-menu">
      <h1 class="main-title">
        {{ title }}
        <span class="sign">{{ industry }}</span>
      </h1>
      <el-tabs class="item_100 crumbs" v-model="activeType">
        <el-tab-pane label="财务基准" name="1"></el-tab-pane>
        <el-tab-pane label="绩效评价（国资委）" name="2"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="item-box">
      <base-table :finType="finType" :type="activeType" class="item_100 height_lg"></base-table>
      <line-chart :heads="headers" class="item_100 item_last height_lg"></line-chart>
    </div>
  </div>
</template>
<script>
import baseTable from '@/components/base/table'
import lineChart from '@/components/base/chart'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeType: '1',
      headers: [],
      finType: null,
      title: null
    }
  },
  computed: {
    ...mapGetters(['baseMenu', 'industry'])
  },
  watch: {
    baseMenu: {
      immediate: true,
      handler(data) {
        if (!data) return
        this.setHeads()
      }
    },
    $route: {
      deep: true,
      handler(data) {
        this.setHeads()
      }
    }
  },
  components: { baseTable, lineChart },
  methods: {
    setHeads() {
      this.baseMenu.forEach((item) => {
        if (this.$route.query.abilityType == item.type) {
          this.title = item.name
          this.finType = item.type
          this.headers = item.items.map((item) => {
            return {
              name: item.itemName,
              value: item.itemCode
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';

.item-box {
  margin-top: 128px !important;
}

.crumbs {
  width: calc(100% - 40px);
  background: white;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);
}
</style>