import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const loan_balance = (data) => {
  return http.get(`/custom/loan_balance`, data)
}

export const abnormal_loan = (data) => {
  return http.get(`/custom/abnormal_loan`, data)
}

export const total_loan_balance = (data) => {
  return http.get(`/custom/total_loan_balance`, data)
}

export const total_abnormal_loan = (data) => {
  return http.get(`/custom/total_abnormal_loan`, data)
}

export const core_index = (data) => {
  return http.get(`/custom/core_index`, data)
}

export const customer_statistics = (data) => {
  return http.get(`/custom/customer_statistics`, data)
}

export const customer = (data) => {
  return http.get(`/custom/${data.industryCode}/customer`, data)
}

export const neg_events = (data) => {
  return http.get(`/custom/neg_events`, data)
}

export const industry_map = (data) => {
  return http.get(`/custom/industry_map`, data)
}

export const region_map = (data) => {
  return http.get(`/custom/region_map`, data)
}

export const risk_event = (data) => {
  return http.get(`/custom/risk_event`, data)
}

export const reject_default = (data) => {
  return http.get(`/custom/reject_default`, data)
}

export const customer_risk = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        gbName: '汽车制造业',
        customer: 25
      }
    ]
  }
  return http.get(`/custom/customer_risk`, data)
}

export const company_risk = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        loanBalance: {
          amount: 5000000.0,
          currency: 'CNY',
          unit: 'UN'
        },
        gbName: '汽车制造业',
        customer: 25
      }
    ]
  }
  return http.get(`/custom/company_risk`, data)
}

export const industry_risk = async (data) => {
  await sleep(500)
  return {
    customers: [
      {
        comName: '客户A',
        csfId: 'XXXXXXXXXXX',
        comCode: 'XXXXXXXXX',
        buName: '分行2',
        judgements: 2,
        enforcements: 1,
        disEnforcements: 0,
        freezes: 0
      }
    ],
    judgements: 30,
    enforcements: 25,
    disEnforcements: 42,
    freezes: 11
  }
  return http.get(`/custom/industry_risk`, data)
}

export const judgement = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        companyName: '客户A',
        caseNumber: 'XXXXXXXXXXX',
        court: 'XXXXXX院',
        executionSubject: '111111',
        filingTime: '2019-12-10'
      }
    ]
  }
  return http.get(`/custom/judgement`, data)
}

export const enforcement = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        companyName: '客户A',
        caseNumber: 'XXXXXXXXXXX',
        court: 'XXXXXX院',
        executionSubject: '111111',
        filingTime: '2019-12-10'
      }
    ]
  }
  return http.get(`/custom/enforcement`, data)
}

export const dishonest_enforcement = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        companyName: '客户A',
        caseNumber: 'XXXXXXXXXXX',
        court: 'XXXXXX院',
        caseContent: '归还',
        impleProcess: '拖欠',
        dishonestBehavior: '拖欠',
        releaseTime: '2019-12-10'
      }
    ]
  }
  return http.get(`/custom/dishonest_enforcement`, data)
}

export const shares_freeze = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        companyName1: '客户A',
        companyName2: '客户B',
        caseNumber1: 'XXXXXXXXXXX',
        caseNumber2: 'XXXXXXXXXXX',
        court: 'XXXXXX院',
        item: '冻结部分股权',
        money: '30000',
        beginTime: '2019-12-11',
        endTime: '2020-12-10',
        releaseTime: '2019-12-10'
      }
    ]
  }
  return http.get(`/custom/shares_freeze`, data)
}
