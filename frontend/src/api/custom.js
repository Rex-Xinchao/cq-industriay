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
