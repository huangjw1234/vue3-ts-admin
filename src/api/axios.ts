import axios from 'axios'
import { getToken } from '../util/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 1000 * 60 * 10

//返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// NProgress Configuration
NProgress.configure({
  showSpinner: false,
})

axios.interceptors.request.use(
  (config: any) => {
    NProgress.start()
    if (getToken()) {
      config.headers['Blade-Auth'] = 'bearer ' + getToken()
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use((congif: any) => {})
