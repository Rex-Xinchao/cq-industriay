import axios from 'axios'
import router from '@/router/index'
const CancelToken = axios.CancelToken
axios.defaults.timeout = 50000

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

class ajax {
  constructor(option) {
    this.source = CancelToken.source()
    this.Pro = axios({ ...option, cancelToken: this.source.token })
  }
  then(func) {
    this.Pro.then((request) => {
      func(request)
    })
    return this
  }
  catch(func) {
    this.Pro.catch((error) => {
      if (error.__proto__.__CANCEL__) {
      } else {
        func(error)
      }
    })
    return this
  }
  abort() {
    this.source.cancel()
  }
}

const http = {
  request(opts) {
    opts.headers = Object.assign({}, opts.headers || {})
    return new ajax(opts)
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
