<template>
  <div class="time-select-main">
    <el-select class="time-select" v-model="selectValue" placeholder="请选择" @change="showMore" size="mini">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        v-show="item.value !== 6"
      >
        <template>
          {{ item.label }}
        </template>
      </el-option>
    </el-select>
    <el-date-picker
      ref="timePicker"
      v-model="dateTime"
      value-format="yyyy-MM-dd"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="~"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :picker-options="pickerOptions"
      :clearable="false"
      size="mini"
      class="time-picker"
      @change="defauleChange"
    ></el-date-picker>
  </div>
</template>
<script>
import { formatDate } from '@/libs/utils'
export default {
  name: 'time-select',
  data() {
    let vm = this
    return {
      selectValue: vm.startValue,
      options: [
        {
          value: 1,
          label: '今日'
        },
        {
          value: 2,
          label: '最近三天'
        },
        {
          value: 3,
          label: '最近一周'
        },
        {
          value: 4,
          label: '最近一月'
        },
        {
          value: 5,
          label: '自定义'
        },
        {
          value: 6,
          label: '自定义'
        }
      ],
      pickerMinDate: new Date().getTime() - 3600 * 1000 * 24 * 365,
      pickerMaxDate: new Date().getTime(),
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > vm.pickerMaxDate || time.getTime() < vm.pickerMinDate
        },
        onPick({ maxDate, minDate }) {
          let min = new Date().getTime() - 3600 * 1000 * 24 * 365
          let timeStart = new Date(minDate).getTime() - 365 * 3600 * 24 * 1000
          let timeEnd = new Date(minDate).getTime() + 365 * 3600 * 24 * 1000
          vm.pickerMinDate = timeStart < min ? min : timeStart
          vm.pickerMaxDate = timeEnd > new Date().getTime() ? new Date().getTime() : timeEnd
        }
      },
      dateTime: []
    }
  },
  props: {
    value: {
      reuired: true
    },
    startValue: {
      reuired: false,
      default: 3
    }
  },
  model: {
    prop: 'value', //绑定的值，通过父组件传递
    event: 'update' //自定义事件名
  },
  watch: {
    dateTime() {
      this.pickerMinDate = new Date().getTime() - 3600 * 1000 * 24 * 365
      this.pickerMaxDate = new Date().getTime()
    },
    selectValue: {
      immediate: true,
      handler(data) {
        if (data === 5 || data === 6) return
        let end = new Date()
        let start = new Date()
        if (data === 2) {
          start.setDate(start.getDate() - 2)
        } else if (data === 3) {
          start.setDate(start.getDate() - 6)
        } else if (data === 4) {
          start.setMonth(start.getMonth() - 1)
        }
        this.dateTime = [formatDate(start, 'yyyy-MM-dd'), formatDate(end, 'yyyy-MM-dd')]
        this.options[5].label = this.dateTime.join(' ~ ')
        this.$emit('update', this.dateTime)
      }
    }
  },
  methods: {
    showMore(data) {
      if (data === 5) {
        this.$refs.timePicker.showPicker()
        this.selectValue = 6
      }
    },
    defauleChange(data) {
      this.options[5].label = data.join(' ~ ')
      this.$emit('update', data)
    }
  },
  mounted() {
    if (this.$route.query.st && this.$route.query.et) {
      if (this.$route.query.et === formatDate('yyyy-MM-dd', new Date())) {
        let start = new Date()
        if (this.$route.query.st === this.$route.query.et) {
          this.selectValue = 1
          return
        } else if (this.$route.query.st === formatDate('yyyy-MM-dd', new Date().setDate(new Date().getDate() - 2))) {
          this.selectValue = 2
          return
        } else if (this.$route.query.st === formatDate('yyyy-MM-dd', new Date().setDate(new Date().getDate() - 6))) {
          this.selectValue = 3
          return
        } else if (this.$route.query.st === formatDate('yyyy-MM-dd', new Date().setMonth(new Date().getMonth() - 1))) {
          this.selectValue = 4
          return
        }
      }
      this.selectValue = 6
      this.dateTime = [formatDate('yyyy-MM-dd', this.$route.query.st), formatDate('yyyy-MM-dd', this.$route.query.et)]
      this.options[5].label = this.dateTime.join(' ~ ')
      this.$emit('update', this.dateTime)
    }
    this.$eventBus.$on('timeChange', (data) => {
      this.selectValue = 6
      this.dateTime = [formatDate('yyyy-MM-dd', data), formatDate('yyyy-MM-dd', data)]
      this.options[5].label = this.dateTime.join(' ~ ')
      this.$emit('update', this.dateTime)
    })
  },
  beforeDestroy() {
    this.$eventBus.$off('timeChange')
  }
}
</script>
<style lang="scss" scoped>
.time-select-main {
  position: relative;
  width: 220px;
  height: 28px;
  float: right;
}
.time-picker {
  position: absolute;
  width: 1px;
  overflow: hidden;
  top: 0;
  border: none;
}
.time-select {
  width: 220px;
  position: absolute;
  top: 0;
  margin: 0;
  z-index: 1001;
}
</style>