import request from '../utils/request'

export const login = params => {
  return request('/login',{
    method:'POST',
    body:{...params}
  })
}