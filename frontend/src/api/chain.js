import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 风险图谱
export const riskChain = (data) => {
  data.importance = '3, 4'
  return http.get(`/chain/${data.industryCode}/risk/graph`, data)
}
// 风险图谱弹窗
export const riskDialog = (data) => {
  return http.get(`/chain/${data.industryCode}/risk`, data)
}

export const boomChain = (data) => {
  data.importance = '3, 4'
  return http.get(`/chain/${data.industryCode}/risk/graph`, data)
}
export const boomDialog = (data) => {
  return http.get(`/chain/${data.industryCode}/boom`, data)
}
