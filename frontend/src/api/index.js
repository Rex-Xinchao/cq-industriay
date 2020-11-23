import http from '@/libs/axios'

const test = (data) => {
  return http.post(`/api/test`, data)
}

export default { test }
