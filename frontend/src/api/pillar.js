import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const industryList = async (data) => {
  return http.get(`/industry/list`, data)
}

export const getIndustry = async (data) => {
  return http.get(`/industry/${data.id}`, data)
}
