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

export const risk_event = async (data) => {
  await sleep(1000)
  return {
    eventList: [
      {
        eventCode: 'XXXX',
        eventName: '调查立案',
        eventGrade: 1,
        eventLevel: 2,
        eventParent: 'XXXX'
      }
    ],
    comList: [
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      },
      {
        comName: '客户A',
        csfId: 'XXXXXXXXX',
        comCode: 'XXXXXXXXXXX',
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueAmount: {
          amount: 10.0,
          currency: 'CNY',
          unit: 'UN'
        },
        overdueDay: 2,
        events: [
          {
            eventCode: 'XXXX',
            eventName: '调查立案',
            eventGrade: 1,
            eventLevel: 2,
            eventParent: 'XXXX'
          }
        ]
      }
    ]
  }
  return http.get(`/api/risk_event`, data)
}
