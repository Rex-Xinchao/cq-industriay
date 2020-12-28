import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 风险图谱
export const riskChain = async (data) => {
  return http.get(`/${data.industryCode}/risk/graph`, data)
}
// 风险图谱弹窗
export const riskDialog = async (data) => {
  return http.get(`/${data.industryCode}/risk`, data)
}

export const boomChain = async (data) => {
  await sleep(1000)
  let reponse = {
    nodes: [
      { name: '农机具及其零部件', code: 'GB_C35070902', isRisk: false },
      { name: '淀粉糖', code: 'GB_C13090102', isRisk: true },
      { name: '水稻', code: 'GB_A01010101', isRisk: false },
      { name: '糠油', code: 'GB_C1303010106', isRisk: false },
      { name: '水稻种子', code: 'GB_A05010104', isRisk: false },
      { name: '农产品烘干服务', code: 'GB_A05010401', isRisk: false },
      { name: '大米', code: 'GB_C13010101', isRisk: false },
      { name: '其他肥料制造', code: 'GB_C260209', isRisk: false },
      { name: '毛油', code: 'GB_C13030102', isRisk: false },
      { name: '农业保险', code: 'GB_J68020005', isRisk: false },
      { name: '淀粉糖_1', code: 'GB_C13090103', isRisk: false },
      { name: '淀粉糖_2', code: 'GB_C13090104', isRisk: false }
    ],
    relationships: [
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_J68020005',
        typeName: '技术服务',
        direction: 1
      },
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_A05010401',
        typeName: '技术服务',
        direction: 1
      },
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_C13010101',
        typeName: '产品/业务',
        direction: 1
      },
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_C13030102',
        typeName: '产品/业务',
        direction: 1
      },
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_C35070902',
        typeName: '生产设备',
        direction: -1
      },
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_C1303010106',
        typeName: '产品/业务',
        direction: 1
      },
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_C260209',
        typeName: '生产原料',
        direction: -1
      },
      {
        startCode: 'GB_A01010101',
        endCode: 'GB_C13090102',
        typeName: '产品/业务',
        direction: 1
      },
      {
        startCode: 'GB_C13090102',
        endCode: 'GB_C13090103',
        typeName: '生产原料',
        direction: 1
      },
      {
        startCode: 'GB_C13090102',
        endCode: 'GB_C13090104',
        typeName: '生产原料',
        direction: 1
      }
    ]
  }
  return reponse
  return http.get(`/${data.industryCode}/risk/graph`, data)
}
export const boomDialog = async (data) => {
  await sleep(1000)
  let reponse = {
    prosperities: [
      {
        rpt: '12',
        value1: 53.1,
        value2: 43.1,
        value3: 33.1,
        value4: 23.1
      },
      {
        rpt: '1',
        value1: 64.03,
        value2: 53.1,
        value3: 43.1,
        value4: 53.1
      }
    ],
    indexes: [
      {
        indexName: '净利润',
        indexUnit: '元',
        latestIndex: '20000',
        changeIndex: '13240',
        indexRatio: 65.12
      }
    ]
  }
  return reponse
  return http.get(`/${data.industryCode}/boom`, data)
}
