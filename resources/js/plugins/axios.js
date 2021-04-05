import axios from 'axios'
import Router from '@router'

axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response,
  error => {
    // config
    const { response } = error

    if (response.status === 404) {
      Router.push('/404')
    }

    return Promise.reject(error)
  }
)
