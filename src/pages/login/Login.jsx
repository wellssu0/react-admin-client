import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button, message } from 'antd';

import logo from '../../assets/images/logo.png'
import './login.less'
import * as actionCreators from '../../store/actionCreators'
import * as storage from '../../utils/storage'

message.config({ //修改message默认配置
  top: 10,
  duration: 2,
  maxCount: 1,
});

class Login extends PureComponent {
  
  validatorPwd = (rules,value,callback) => {
    value = value.trim()
    if(!value){
      callback('请输入密码！')
    }else if(value.length<4){
      callback('密码长度少于4位！')
    }else if(value.length>16){
      callback('密码不能超过16位！')
    }else if(!/^[a-zA-Z0-9_-]+$/.test(value)){
      callback('密码必须是字母、数字或下划线组成！')
    }else{
      callback()
    }
  }

  render() {
    const { userData, handleSubmit } = this.props
    const { getFieldDecorator,validateFields } = this.props.form
    if(userData._id){
      return <Redirect to="/"/>
    }
    return (
      <div className="login-wrapper">
        <div className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>后台管理系统</h1>
        </div>
        <div className="login-content">
          <h2>LOGIN</h2>
          <Form onSubmit={(e)=>handleSubmit(e,validateFields)} className="login-form">
            <Form.Item>
              {
                getFieldDecorator('username',{
                  initialValue:'',// 默认值
                  rules:[ 
                    //antd自带规则：
                    {required:true,whitespace:true,message:"请输入用户名！"},
                    {min:4 ,message:"用户名不能少于4个字符！"},
                    {max:15,message:"用户名不能大于16个字符！"},
                    {pattern: /^[a-zA-Z0-9_]+$/,message:"用户名必须是英文、数字或下划线组成！"},
                  ],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password',{
                  initialValue:'',
                  rules: [
                    // 自定义校验规则：
                    {validator: this.validatorPwd}
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                )
              }          
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
            </Form.Item>
          </Form>
        
        </div>
      </div>
    )
  }
}
const WrapperLogin = Form.create()(Login)

const mapState = state => ({
  userData:state.global.userData
})
const mapDispatch = dispatch => ({
  handleSubmit(e,validateFields){
    e.preventDefault()
    validateFields((error,values)=>{ //统一验证，from自带属性
      if(!error){
        dispatch(actionCreators.login({...values}))
      }else{
        message.error("请输入用户名或密码！")
      }
    })
  },
  getLocalUser(user){
    dispatch(actionCreators.getLocalUser(user))
  }
})

export default connect(mapState,mapDispatch)(WrapperLogin) 