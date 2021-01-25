import http from '@/libs/axios'

export const industryList = (data) => {
  return http.get(`/pillar/list`, data)
}

export const getIndustry = (data) => {
  return http.get(`/pillar/${data.id}`, data)
}
