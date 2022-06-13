import { validatenull } from './validate'
/**
 * 存储localStorage或者sessionStorage
 */
export const setStore = (key, data, type) => {
  if (type && type == 'session') {
    window.sessionStorage.setItem(key, JSON.stringify(data))
  } else {
    window.localStorage.setItem(key, JSON.stringify(data))
  }
}

/**
 * 获取localStorage或者sessionStorage
 */
export const getStore = (key, type) => {
  let data = ''
  if (type && type == 'session') {
    data = window.sessionStorage.getItem(key)
  } else {
    data = window.localStorage.getItem(key)
  }
  if (validatenull(data)) return
  return data.length > 0 ? JSON.parse(data) : ''
}
