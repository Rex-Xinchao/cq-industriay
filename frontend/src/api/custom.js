import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const loan_balance = (data) => {
  return http.get(`/api/loan_balance`, data)
}

export const abnormal_loan = (data) => {
  return http.get(`/api/abnormal_loan`, data)
}

export const total_loan_balance = async (data) => {
  return http.get(`/api/total_loan_balance`, data)
}

export const total_abnormal_loan = (data) => {
  return http.get(`/api/total_abnormal_loan`, data)
}

export const core_index = (data) => {
  return http.get(`/api/${data.industryCode}/core_index`, data)
}

export const customer_statistics = async (data) => {
  await sleep(1000)
  return {
    overdueCustomers: [
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        loanBalance: {
          amount: 323,
          currency: 'CNY'
        },
        overdueDay: 41
      }
    ],
    overdueCount: 12,
    blacklist: [
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      },
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      },
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      },
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      },
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      },
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      },
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      },
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        reason: '1.xxxxxx，2.xxxxxxxx'
      }
    ],
    blacklistCount: 100
  }
  return http.get(`/api/${data.industryCode}/customer_statistics`, data)
}

export const customer = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        comName: '客户名称',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        buName: '分行名称',
        loanBalance: {
          amount: 32300,
          currency: 'CNY'
        }
      }
    ]
  }
  return http.get(`/api/${data.industryCode}/customer`, data)
}
