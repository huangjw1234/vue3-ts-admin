import Cookies from 'js-cookie'
const TokenKey = 'x-access-token'
const UserKey = 'x-access-user'
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000)
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token, { expires: inFifteenMinutes })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUser() {
  return Cookies.get(UserKey) || '{}'
}

export function setUser(userstr: string) {
  return Cookies.set(UserKey, userstr, { expires: inFifteenMinutes })
}

export function removeUser() {
  return Cookies.remove(UserKey)
}
