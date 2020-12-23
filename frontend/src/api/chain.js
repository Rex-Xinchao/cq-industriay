import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 风险图谱
export const riskChain = async (data) => {
  return http.get(`/${data.industryCode}/risk/graph`, data)
}
// 风险图谱弹窗
export const riskDialog = async (data) => {
  return http.get(`/${data.industryCode}/risk`, data)
}

export const boomChain = async (data) => {
  return http.get(`/${data.industryCode}/risk/graph`, data)
}
export const boomDialog = async (data) => {
  return http.get(`/${data.industryCode}/boom`, data)
}
