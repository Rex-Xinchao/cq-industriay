import { base_region, base_org, base_qualification } from '@/api/base'
export const Regions = {
  data() {
    return {
      regions: []
    }
  },
  methods: {
    getRegions() {
      base_region().then((res) => {
        let map = {}
        res.result.forEach((item) => {
          item.children = item.children || []
          item.label = item.name
          item.value = item.code
          map[item.code] = item
        })
        res.result.forEach((item) => {
          if (item.parent) {
            map[item.parent].children.push(map[item.code])
          }
        })
        this.regions = res.result.filter((item) => item.level === 1)
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
