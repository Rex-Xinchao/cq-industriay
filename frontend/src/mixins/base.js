import { base_region, base_org, base_qualification, base_event } from '@/api/index'
import { nodeMapping } from '@/api/chain'
export const Regions = {
  data() {
    return {
      regions: [],
      regions_all: [],
      regions_map: {}
    }
  },
  methods: {
    getRegions() {
      base_region().then((res) => {
        let map = {}
        let regions_map = {}
        res.result.forEach((item) => {
          item.children = item.children || []
          item.label = item.name
          item.value = item.code
          if (this.isArea && item.level === 1) {
            map[item.code] = null
            regions_map[item.name] = null
          } else {
            map[item.code] = item
            regions_map[item.name] = item
          }
        })
        res.result.forEach((item) => {
          if (item.parent && map[item.parent] && map[item.code]) {
            map[item.parent].children.push(map[item.code])
          }
        })
        this.regions_map = regions_map
        if (this.isArea) {
          const areaList = ['CSF_CN_500000', 'CSF_CN_510000', 'CSF_CN_520000', 'CSF_CN_610000']
          this.regions = res.result.filter((item) => !item.parent || (item.parent && !map[item.parent]))
          this.regions = this.regions.filter((item) => areaList.includes(item.value))
          let list = []
          this.regions.forEach((re_1) => {
            list.push(re_1)
            re_1.children &&
              re_1.children.forEach((re_2) => {
                list.push(re_2)
                re_2.children &&
                  re_2.children.forEach((re_3) => {
                    list.push(re_3)
                  })
              })
          })
          this.regions_all = list
        } else {
          this.regions_all = res.result
          this.regions = res.result.filter((item) => !item.parent || (item.parent && !map[item.parent]))
        }
      })
    }
  },
  mounted() {
    this.getRegions()
  }
}

export const Orgs = {
  data() {
    return {
      orgs: []
    }
  },
  methods: {
    getOrgs() {
      base_org().then((res) => {
        this.orgs = res.result.map((item) => {
          return {
            label: item.name,
            value: item.code
          }
        })
      })
    }
  },
  mounted() {
    this.getOrgs()
  }
}

export const Qualifications = {
  data() {
    return {
      qualifications: []
    }
  },
  methods: {
    getQualifications() {
      base_qualification().then((res) => {
        this.qualifications = res.result.map((item) => {
          return {
            label: item.name,
            value: item.type
          }
        })
      })
    }
  },
  mounted() {
    this.getQualifications()
  }
}

export const Events = {
  data() {
    return {
      eventOptions: []
    }
  },
  methods: {
    getEvents() {
      base_event().then((res) => {
        let map = {}
        res.result.forEach((item) => {
          item.label = item.name
          item.value = item.code
          map[item.code] = item
        })
        res.result.forEach((item) => {
          if (item.parentCode) {
            map[item.parentCode].children = map[item.parentCode].children || []
            map[item.parentCode].children.push(item)
          }
        })
        this.eventOptions = res.result.filter((item) => item.level === 1)
      })
    }
  },
  mounted() {
    this.getEvents()
  }
}

export const Mappings = {
  data() {
    return {
      sams: []
    }
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.getMappings()
      }
    }
  },
  methods: {
    getMappings() {
      if (this.$route.query.name.indexOf('国标') >= 0) {
        nodeMapping({
          code: this.$route.query.code,
          isSam: false
        }).then((res) => {
          this.sams = res.gb4[0].products.map((item) => {
            return {
              label: item.samName,
              value: item.samCode
            }
          })
          this.code = this.sams[0].value
        })
      } else {
        this.sams = [
          {
            label: this.$route.query.name,
            value: this.$route.query.code
          }
        ]
        this.code = this.sams[0].value
      }
    }
  },
  mounted() {
    this.getMappings()
  }
}

export const Mappings_GB = {
  data() {
    return {
      GBs: []
    }
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.getMappings()
      }
    }
  },
  methods: {
    getMappings() {
      nodeMapping({
        code: this.$route.query.code,
        isSam: this.$route.query.name.indexOf('国标') < 0
      }).then((res) => {
        this.GBs = res.gb4
      })
    }
  },
  mounted() {
    this.getMappings()
  }
}
