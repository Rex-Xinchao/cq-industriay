import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const industryList = async (data) => {
  return http.get(`/pillar/list`, data)
}

export const getIndustry = async (data) => {
  return http.get(`/pillar/${data.id}`, data)
}
