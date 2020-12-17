<template>
  <div class="time-select-main">
    <el-select class="time-select" v-model="selectValue" placeholder="请选择" @change="showMore" size="mini">
      <el-option
        v-for="(item, index) in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        v-show="index !== options.length - 1"
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
      default: '7D'
    },
    options: {
      reuired: false,
      default: () => {
        return [
          {
            value: '7D',
            label: '最近7天'
          },
          {
            value: '1M',
            label: '最近1月'
          },
          {
            value: '3M',
            label: '最近3月'
          },
          {
            value: 'udf',
            label: '自定义'
          },
          {
            value: 'udf_show',
            label: '自定义'
          }
        ]
      }
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
        switch (data) {
          case '7D':
            start.setDate(start.getDate() - 7)
            break
          case '1M':
            start.setMonth(start.getMonth() - 1)
            break
          case '3M':
            start.setMonth(start.getMonth() - 3)
            break
          case '1Y':
            start.setFullYear(start.getFullYear() - 1)
            break
          case '1YL':
            start.setFullYear(start.getFullYear() - 2)
            end.setFullYear(start.getFullYear() - 1)
            break
          case '3Y':
            start.setFullYear(start.getFullYear() - 3)
            break
          case '5Y':
            start.setFullYear(start.getFullYear() - 5)
            break
        }
        this.dateTime = [formatDate(start, 'yyyy-MM-dd'), formatDate(end, 'yyyy-MM-dd')]
        this.options[this.options.length - 1].label = this.dateTime.join(' ~ ')
        this.$emit('update', this.dateTime)
      }
    }
  },
  methods: {
    showMore(data) {
      if (data === this.options[this.options.length - 2].value) {
        this.$refs.timePicker.showPicker()
        this.selectValue = this.options[this.options.length - 1].value
      }
    },
    defauleChange(data) {
      this.options[this.options.length - 1].label = data.join(' ~ ')
      this.$emit('update', data)
    }
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