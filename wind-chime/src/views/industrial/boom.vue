<template>
  <div class="main">
    <h1 class="main-title">
      景气图谱
      <span class="sign">汽车行业</span>
    </h1>
    <div class="chart">
      <div class="graph-box"></div>
    </div>
  </div>
</template>
<script>
import chart from '@/mixins/chart'
export default {
  data() {
    return {
      noData: false
    }
  },
  mixins: [chart],
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/view';
.chart {
  width: 100%;
  height: calc(100% - 40px);
  background-color: white;
}
.graph-box {
  width: 100%;
  height: 100%;
  margin: 0;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
}
</style>
<style lang="scss">
$UP_COLOR: #a49fff;
$DOWN_COLOR: #83bfff;

.link.up {
  stroke: $UP_COLOR;
}

.link.down {
  stroke: $DOWN_COLOR;
}

path.link {
  fill: none;
  stroke-width: 1px;
  stroke-dasharray: 3, 3;

  .down {
    stroke: $DOWN_COLOR;
  }

  .up {
    stroke: $UP_COLOR;
  }
}

.typeNode {
  &.up {
    text {
      fill: #4c53ff;
    }
  }
  &.down {
    text {
      fill: #2897ef;
    }
  }
}

.node {
  circle {
    fill: none;
    stroke-width: 1.5px;
  }

  .down circle {
    stroke: $DOWN_COLOR;
  }

  .up circle {
    stroke: $UP_COLOR;
  }
}
</style>