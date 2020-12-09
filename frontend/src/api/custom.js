import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const loan_balance = (data) => {
  return http.get(`/api/loan_balance`, data)
}

export const abnormal_loan = (data) => {
  return http.get(`/api/abnormal_loan`, data)
}

export const total_loan_balance = (data) => {
  return http.get(`/api/total_loan_balance`, data)
}

export const total_abnormal_loan = (data) => {
  return http.get(`/api/total_abnormal_loan`, data)
}

export const core_index = (data) => {
  return http.get(`/api/${data.industryCode}/core_index`, data)
}

export const customer_statistics = (data) => {
  return http.get(`/api/${data.industryCode}/customer_statistics`, data)
}

export const customer = (data) => {
  return http.get(`/api/${data.industryCode}/customer`, data)
}

export const neg_events = (data) => {
  return http.get(`/api/${data.industryCode}/neg_events`, data)
}

export const industry_map = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        industryName: '汽车',
        industryCode: 'FA00000301',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        loanComNum: 300,
        overdueComNum: 20,
        loanCom: [
          {
            comName: '客户A',
            csfId: 'XXXXXXXXXXX',
            comCode: 'XXXXXXXXX',
            loanBalance: {
              amount: 5000000.0,
              currency: 'CNY',
              unit: 'UN'
            }
          }
        ]
      },
      {
        industryName: '皮卡',
        industryCode: 'FA00000301',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        loanComNum: 300,
        overdueComNum: 20,
        loanCom: [
          {
            comName: '客户C',
            csfId: 'XXXXXXXXXXX',
            comCode: 'XXXXXXXXX',
            loanBalance: {
              amount: 5000000.0,
              currency: 'CNY',
              unit: 'UN'
            }
          }
        ]
      },
      {
        industryName: '大卡',
        industryCode: 'FA00000301',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        loanComNum: 300,
        overdueComNum: 20,
        loanCom: [
          {
            comName: '客户B',
            csfId: 'XXXXXXXXXXX',
            comCode: 'XXXXXXXXX',
            loanBalance: {
              amount: 5000000.0,
              currency: 'CNY',
              unit: 'UN'
            }
          }
        ]
      }
    ]
  }
  return http.get(`/api/industry_map`, data)
}

export const region_map = async (data) => {
  await sleep(1000)
  return {
    regionLoan: [
      {
        amountCount: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        comCount: 20,
        name: '重庆市',
        code: 'FA000001'
      }
    ],
    regionBadloan: [
      {
        amountCount: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        comCount: 20,
        name: '四川省',
        code: 'FA000001'
      }
    ],
    badList: [
      {
        badloan: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        comNum: 20,
        badloanType: '关注类'
      }
    ],
    loanCom: [
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 30
      }
    ]
  }
  return http.get(`/api/region_map`, data)
}

export const risk_event = (data) => {
  return http.get(`/api/risk_event`, data)
}
