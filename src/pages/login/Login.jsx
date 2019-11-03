import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

import logo from '../../assets/images/logo.png'
import './login.less'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((error,values)=>{ //统一验证
      if(!error){
        alert('chenggong')
      }else{
        alert("shibai")
      }
    })
  }
  
  validatorPwd = (rules,value,callback) => {
    value = value.trim()
    if(!value){
      callback('请输入密码！')
    }else if(value.length<4){
      callback('密码长度少于4位！')
    }else if(value.length>16){
      callback('密码不能超过16位！')
    }else if(!/^[a-zA-Z0-9_-]+$/.test(value)){
      callback('密码不对！')
    }else{
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-wrapper">
        <div className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>后台管理系统</h1>
        </div>
        <div className="login-content">
          <h2>LOGIN</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {
                getFieldDecorator('username',{
                  initialValue:'',// 默认值
                  rules:[ 
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
                    {validator: this.validatorPwd}// 自定义表单校验规则
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
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        
        </div>
      </div>
    )
  }
}

const WrapperLogin = Form.create()(Login)

export default WrapperLogin