import * as actionTypes from './actionTypes'
import * as storage from '../utils/storage'


const defaultState = {
  userData:storage.getUser(),
}

export default ( state = defaultState , action ) =>{
  switch(action.type){
    case actionTypes.GET_LOCAL_USER:
      const newState = JSON.parse(JSON.stringify(state))
      newState.userData = action.user
      return newState
    case actionTypes.LOGIN_ED:
      const newState1 = JSON.parse(JSON.stringify(state))
      storage.saveUser(action.data)
      newState1.userData = action.data
      return newState1
    default:
      return state
  }
}
