import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'


import logo from '../../assets/images/logo.png'
import './index.less'
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu

class LeftNav extends React.Component{
  
  
  getMenuList = (menuList) => {
    return menuList.map( item => {
      if(!item.children){
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }else{
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuList(item.children)}
          </SubMenu>
        )
      }
    })
  }



  render(){
    // const path = this.props.localtion.pathname
    
    return(
      <div className='left-nav'>
        <Link to='/' className='left-nav-header'>
          <img src={logo} alt='logo'/>
          <h1>后台管理</h1>
        </Link>
        <Menu
          defaultSelectedKeys={['/home']}
          mode="inline"
          theme="dark"
        >
        {
          this.getMenuList(menuList)
        }
        </Menu>   
      </div>
    )
  }
}

export default withRouter(LeftNav)