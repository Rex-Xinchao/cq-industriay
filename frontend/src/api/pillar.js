import http from '@/libs/axios'

export const industryList = async (data) => {
  await setTimeout(() => {}, 100)
  return {
    result: [
      {
        region: '重庆市',
        regionCode: 'CSF_CN_500000',
        tree: [
          {
            id: 22111134,
            name: '汽车'
          },
          {
            id: 22142212,
            name: '钢铁'
          }
        ]
      }
    ]
  }
  return http.get(`/pillar/list`, data)
}

export const getIndustry = async (data) => {
  await setTimeout(() => {}, 100)
  return {
    result: [
      {
        name: '汽车',
        code: 'GS0412',
        parentCode: null,
        samCodes: [
          {
            samName: '汽车',
            samCode: 'AF020203'
          }
        ]
      },
      {
        name: '钢铁',
        code: 'GS04',
        parentCode: null,
        samCodes: []
      }
    ]
  }
  // return http.get(`/pillar/${data.id}`, data)
}
