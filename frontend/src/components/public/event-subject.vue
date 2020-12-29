<template>
  <el-popover
    placement="bottom-start"
    popper-class="event-subject-popover"
    width="300"
    trigger="hover"
    v-if="subjects && subjects.length"
  >
    <slot slot="reference">
      <span>{{ event.itemName }}</span>
    </slot>
    <p>事件主体</p>
    <span
      v-for="sub in subjects"
      :key="sub.name"
      :class="{ _company: sub.type == 1, _people: sub.type == 2 }"
      @click="onSubClick(sub)"
    >
      {{ sub.name }}
    </span>
  </el-popover>
  <span v-else>
    <slot>
      {{ subjects }}
      <span>{{ event.itemName }}</span>
    </slot>
  </span>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    event: Object,
    subjects: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    onSubClick(item) {
      if (item.type === 2) return
      this.$message.info('功能开发中')
    }
  }
}
</script>
<style lang="scss" >
._company {
  color: #207cff;
  border: 1px solid rgba(32, 124, 255, 0.5);
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin: 0 6px 6px 0;

  &:hover {
    background: #207cff;
    color: #fff;
    border-color: #207cff;
  }
}
._people {
  color: #c59001;
  border: 1px solid rgba(197, 144, 1, 0.5);
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  display: inline-block;
  margin: 0 6px 6px 0;

  &:hover {
    background: #c59001;
    color: #fff;
    border-color: #c59001;
  }
}
.event-subject-popover {
  p {
    margin: 0 0 12px 0;
  }
}
</style>