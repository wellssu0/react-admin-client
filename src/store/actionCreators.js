import * as actionTypes from './actionTypes'

export const login = (values) => ({
  type: actionTypes.LOGIN,
  values:{...values}
})

export const logined = (data) => ({
  type:actionTypes.LOGIN_ED,
  data
})
export const getLocalUser = (user) => ({
  type:actionTypes.GET_LOCAL_USER,
  user
})

