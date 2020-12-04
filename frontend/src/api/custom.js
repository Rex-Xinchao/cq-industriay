import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const loan_balance = async (data) => {
  return http.post(`/api/loan_balance`, data)
}

export const abnormal_loan = async (data) => {
  return http.post(`/api/abnormal_loan`, data)
}

export const total_loan_balance = async (data) => {
  return http.post(`/api/total_loan_balance`, data)
}

export const total_abnormal_loan = async (data) => {
  return http.post(`/api/total_abnormal_loan`, data)
}
