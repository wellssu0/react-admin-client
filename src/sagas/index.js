import { all, takeEvery, put} from 'redux-saga/effects'
import { message } from 'antd'


import * as actionTypes from '../store/actionTypes'
import * as actionCreators from '../store/actionCreators'
import * as reqLogin from '../api/login'


function* asynclogin (action) {
  const response = yield reqLogin.login({...action.values})
  if( response.status === 0 ){
    message.success('登录成功！')
    yield put(actionCreators.logined(response.data))
  }else if(response.status === 1){
    message.error(response.msg)
  }
}

function* watchLogin(){
  yield takeEvery(actionTypes.LOGIN , asynclogin)
}

export default function* rootSaga () {
  yield all([
    watchLogin(),
  ])
}