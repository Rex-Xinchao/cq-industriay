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
  return http.get(`/custom/${data.industryCode}/core_index`, data)
}

export const customer_statistics = (data) => {
  return http.get(`/custom/${data.industryCode}/customer_statistics`, data)
}

export const customer = (data) => {
  return http.get(`/custom/${data.industryCode}/customer`, data)
}

export const neg_events = async (data) => {
  // await sleep(1000)
  // return {
  //   events: [
  //     {
  //       eventName: '公告事件',
  //       eventCode: 'FA20001',
  //       eventGrade: 1,
  //       comCount: 2,
  //       amountCount: 2,
  //       negEvents: [
  //         {
  //           eventName: '业绩亏损',
  //           eventCode: 'FA20001',
  //           eventGrade: 1,
  //           comCount: 1,
  //           amountCount: 1,
  //           comList: [
  //             {
  //               comName: '客户名称',
  //               csfId: 'XXXXXXXXX',
  //               comCode: 'XXXXXXXXXXX',
  //               buName: '分行名称',
  //               loanBalance: {
  //                 amount: 5000000.0,
  //                 currency: 'CNY',
  //                 unit: 'UN'
  //               }
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
  return http.get(`/custom/${data.industryCode}/neg_events`, data)
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
