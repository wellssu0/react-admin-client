/* 
操作本地的localStorage
*/

import store from 'store'
const USER_KEY = 'user_key'

//注释的的是原生语法可能低版本的浏览器不兼容

export const saveUser = (user) => {
  // localStorage.setItem(USER_KEY,JSON.stringify(user))
  store.set(USER_KEY,user)
}
export const getUser = () => {
  // return JSON.parse( localStorage.getItem(USER_KEY) || '{}')
  return store.get(USER_KEY) || {}
}
export const removeUser = () => {
  // localStorage.removeItem(USER_KEY)
  store.remove(USER_KEY)
}