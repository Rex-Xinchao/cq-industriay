import axios from 'axios'
import router from '@/router/index'
const CancelToken = axios.CancelToken
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  (config) => {
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _v: Date.now()
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

axios.interceptors.response.use((response) => {
  return response.data
})

const http = {
  request(opts) {
    opts.headers = Object.assign({}, opts.headers || {})
    let source = CancelToken.source()
    return axios({ ...opts, cancelToken: source.token })
  },
  get(url, params, opts = {}) {
    opts.method = 'get'
    opts.url = url
    opts.params = params
    return this.request(opts)
  },
  post(url, data, opts = {}) {
    opts.method = 'post'
    opts.url = url
    opts.data = data
    return this.request(opts)
  },
  delete(url, params, opts = {}) {
    opts.method = 'delete'
    opts.url = url
    opts.params = params
    return this.request(opts)
  },
  put(url, data, opts = {}) {
    opts.method = 'put'
    opts.url = url
    opts.data = data
    return this.request(opts)
  },
  patch(url, data, opts = {}) {
    opts.method = 'patch'
    opts.url = url
    opts.data = data
    return this.request(opts)
  }
}
export default http
