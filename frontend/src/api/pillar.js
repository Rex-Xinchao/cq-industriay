import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const industryList = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        regionName: '重庆市',
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
      },
      {
        regionName: '四川省',
        regionCode: 'CSF_CN_510000',
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
      },
      {
        regionName: '陕西省',
        regionCode: 'CSF_CN_610000',
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
      },
      {
        regionName: '贵州省',
        regionCode: 'CSF_CN_520000',
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
  return http.get(`/industry/list`, data)
}

export const getIndustry = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        industryName: '测试',
        industryCode: 'AF20002',
        parentCode: null
      },
      {
        industryName: '汽车',
        industryCode: 'AF20002334',
        parentCode: 'AF20002'
      },
      {
        industryName: '钢铁',
        industryCode: 'AF10000004',
        parentCode: 'AF20002'
      }
    ]
  }
  return http.get(`/industry/${data.id}`, data)
}
