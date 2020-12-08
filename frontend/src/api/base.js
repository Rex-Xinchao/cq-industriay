import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 地图地区列表
export const base_region = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        name: '四川',
        code: 'GS938585',
        parent: null,
        level: 1
      },
      {
        name: '重庆',
        code: 'GS955525',
        parent: null,
        level: 1
      },
      {
        name: '渝中区',
        code: 'GS95552',
        parent: 'GS955525',
        level: 2
      }
    ]
  }
  return http.get(`/base/region`, data)
}

// 机构列表
export const base_org = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        name: '重庆市办公厅',
        code: 'GS90001'
      },
      {
        name: '国家交通部',
        code: 'GS80025'
      }
    ]
  }
  return http.get(`/base/org`, data)
}

// 资质列表
export const base_qualification = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        name: '高新科技',
        type: 1
      },
      {
        name: '专精特新企业',
        type: 2
      }
    ]
  }
  return http.get(`/base/qualification`, data)
}
