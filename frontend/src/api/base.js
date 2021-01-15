import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const getBaseItem = (data) => {
  return http.get(`/base/item`, data)
}

// 基准指标
export const standard = (data) => {
  return http.get(`/base/industry/${data.industryCode}/fin_standard`, data)
}

// 指标趋势
export const tendency = (data) => {
  return http.get(`/base/industry/${data.industryCode}/fin_tendency`, data)
}

// 龙头财务
export const leading_financial = (data) => {
  return http.get(`/base/industry/${data.industryCode}/leading_financial`, data)
}
