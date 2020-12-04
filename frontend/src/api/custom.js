import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const loan_balance = (data) => {
  return http.post(`/api/loan_balance`, data)
}

export const abnormal_loan = (data) => {
  return http.post(`/api/abnormal_loan`, data)
}

export const total_loan_balance = (data) => {
  return http.post(`/api/total_loan_balance`, data)
}

export const total_abnormal_loan = (data) => {
  return http.post(`/api/total_abnormal_loan`, data)
}

export const core_index = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        indexName: '汽车产业销量指标',
        type: 1,
        indexes: [
          {
            rpt: '202012',
            latestIndex: '54',
            indexRatio: 51.2
          }
        ]
      },
      {
        indexName: '汽车产业销量指标',
        name: '测试',
        type: 2,
        indexes: [
          {
            rpt: '202012',
            latestIndex: '54',
            indexRatio: 51.2
          }
        ]
      },
      {},
      {}
    ]
  }
  return http.post(`/api/${data.industryCode}/core_index`, data)
}
