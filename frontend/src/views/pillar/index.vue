<template>
  <div class="main">
    <h1 class="main-title">支柱产业</h1>
    <div class="map" id="map" v-loading="loading"></div>
    <div class="rank">
      <div class="card" v-for="(item, key) in regions" :class="item.class" :key="item.class" v-loading="loading">
        <h1>{{ item.regionName }}</h1>
        <ul style="position: relative">
          <li
            v-for="child in item.tree"
            :key="child.id"
            @click="pageTo('/pillar/chart', { id: child.id, region: key, name: child.name })"
          >
            {{ child.name }}
          </li>
          <no-data-show class="no-data-show" :show="item.tree.length === 0"></no-data-show>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
const echarts = require('echarts')
import { industryList } from '@/api/pillar'
import sum from '@/libs/map/all'
import cq from '@/libs/map/chongqing'
import gz from '@/libs/map/guizhou'
import sx from '@/libs/map/shanxi'
import sc from '@/libs/map/sichuan'
import resize from '@/mixins/resize'
import pageTo from '@/mixins/pageTo'
export default {
  data() {
    return {
      loading: false,
      mapOption: {
        series: [
          {
            type: 'map',
            roam: false,
            zoom: 1.2,
            emphasis: {
              label: {
                show: false
              },
              itemStyle: {
                areaColor: '#eee'
              }
            },
            itemStyle: {
              areaColor: 'white',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            }
          },
          {
            type: 'map',
            roam: false,
            zoom: 1.2,
            emphasis: {
              label: {
                show: false
              },
              itemStyle: {
                areaColor: '#eee'
              }
            },
            itemStyle: {
              areaColor: 'white',
              borderType: 'dashed'
            },
            markPoint: {
              symbol: 'rect',
              symbolSize: [128, 58],
              itemStyle: {
                color: 'white',
                borderWidth: 1,
                borderColor: '#ccc'
              },
              label: {
                show: true,
                distance: 12,
                formatter: function (d) {
                  let type = d.data.type
                  let label = d.data.label
                  let value = d.data.value
                  return `{${type}|${label}}{b|${value}}{c|支柱产业}`
                },
                color: 'black',
                fontWeight: 'bold',
                rich: {
                  sx: {
                    width: 30,
                    height: 30,
                    verticalAlign: 'top',
                    align: 'center',
                    lineHeight: 30,
                    fontSize: 20,
                    color: 'white',
                    backgroundColor: '#6C77E9'
                  },
                  sc: {
                    width: 30,
                    height: 30,
                    verticalAlign: 'top',
                    align: 'center',
                    lineHeight: 30,
                    fontSize: 20,
                    color: 'white',
                    backgroundColor: '#E9AE6C'
                  },
                  gz: {
                    width: 30,
                    height: 30,
                    verticalAlign: 'top',
                    align: 'center',
                    lineHeight: 30,
                    fontSize: 20,
                    color: 'white',
                    backgroundColor: '#88D8AB'
                  },
                  cq: {
                    width: 30,
                    height: 30,
                    verticalAlign: 'top',
                    align: 'center',
                    lineHeight: 30,
                    fontSize: 20,
                    color: 'white',
                    backgroundColor: '#E04F53'
                  },
                  b: {
                    height: 30,
                    verticalAlign: 'top',
                    fontSize: 16,
                    color: '#1B253A',
                    fontWeight: 600,
                    padding: [0, 4, 0, 10]
                  },
                  c: {
                    height: 30,
                    verticalAlign: 'top',
                    fontSize: 14,
                    color: '#9EA2AE',
                    fontWeight: 600
                  }
                }
              },
              emphasis: {
                label: {
                  show: true
                }
              },
              data: []
            }
          }
        ]
      },
      regions: {
        CSF_CN_500000: {
          regionName: '重庆市',
          class: 'cq',
          tree: []
        },
        CSF_CN_510000: {
          regionName: '四川省',
          class: 'sc',
          tree: []
        },
        CSF_CN_610000: {
          regionName: '陕西省',
          class: 'sx',
          tree: []
        },
        CSF_CN_520000: {
          regionName: '贵州省',
          class: 'gz',
          tree: []
        }
      }
    }
  },
  mixins: [resize, pageTo],
  methods: {
    initMap() {
      this.loading = true
      let map = {
        CSF_CN_500000: {
          regionName: '重庆市',
          class: 'cq',
          tree: []
        },
        CSF_CN_510000: {
          regionName: '四川省',
          class: 'sc',
          tree: []
        },
        CSF_CN_610000: {
          regionName: '陕西省',
          class: 'sx',
          tree: []
        },
        CSF_CN_520000: {
          regionName: '贵州省',
          class: 'gz',
          tree: []
        }
      }
      industryList({})
        .then((res) => {
          res.result.forEach((item) => {
            map[item.regionCode].tree = item.tree
          })
          this.regions = map
          this.draw()
          this.loading = false
        })
        .then((err) => {
          this.loading = false
          this.regions = map
          this.draw()
        })
    },
    draw() {
      const all = {
        type: 'FeatureCollection',
        features: [...cq.features, ...gz.features, ...sx.features, ...sc.features]
      }
      echarts.registerMap('sum', sum)
      echarts.registerMap('map', all)
      this.mapOption.series[0].map = 'sum'
      this.mapOption.series[1].map = 'map'
      this.mapOption.series[1].markPoint.data = [
        {
          type: 'sx',
          label: '陕',
          value: this.regions.CSF_CN_610000.tree.length,
          coord: [108.95, 34.27]
        },
        {
          type: 'sc',
          label: '川',
          value: this.regions.CSF_CN_510000.tree.length,
          coord: [102.06, 30.67]
        },
        {
          type: 'cq',
          label: '渝',
          value: this.regions.CSF_CN_500000.tree.length,
          coord: [108.13, 30.35]
        },
        {
          type: 'gz',
          label: '贵',
          value: this.regions.CSF_CN_520000.tree.length,
          coord: [106.71, 26.57]
        }
      ]
      this.myChart = echarts.init(document.getElementById('map'))
      this.myChart.setOption(this.mapOption, true)
      this.myChart.resize()
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common/view';

.main {
  height: calc(100% - 48px);
}
.map,
.rank {
  display: inline-block;
  width: calc(50% - 10px);
  height: calc(100% - 60px) !important;
  vertical-align: top;
}
.map {
  margin-right: 20px;
}

.rank {
  .card {
    display: inline-block;
    width: calc(50% - 10px);
    height: calc(50% - 10px);
    box-sizing: border-box;
    background-color: white;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 0px rgba(232, 232, 232, 0.53);

    &:nth-of-type(2n) {
      margin-left: 20px;
    }
    h1 {
      font-size: 16px;
      font-weight: bolder;
      color: #000a12;
      line-height: 22px;
      margin-bottom: 16px;

      &::before {
        content: ' ';
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 2px;
        margin-right: 6px;
      }
    }
    ul {
      display: block;
      width: 100%;
      height: calc(100% - 38px);
      overflow-y: auto;
      li {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdee3;
        cursor: pointer;
      }
    }
  }

  .cq > h1 {
    &::before {
      background-color: #e04f53;
    }
  }

  .sc > h1 {
    &::before {
      background-color: #e9ae6c;
    }
  }

  .gz > h1 {
    &::before {
      background-color: #88d8ab;
    }
  }

  .sx > h1 {
    &::before {
      background-color: #6c77e9;
    }
  }
}
</style>