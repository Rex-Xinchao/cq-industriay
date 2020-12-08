import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 地图地区列表
export const test = async (data) => {
  await sleep(1000)
  return {}
  return http.get(`/pillar/test`, data)
}
