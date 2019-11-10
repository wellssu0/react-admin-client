import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect , Switch ,Route} from 'react-router-dom'
import { Layout } from 'antd';

import * as storage from '../../utils/storage'
import * as actionCreators from '../../store/actionCreators'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/Home'
import Category from '../category/Category'
import Product from '../product/Product'
import Role from '../role/Role'
import User from '../user/User'
import Bar from '../charts/Bar'
import Line from '../charts/Line'
import Pie from '../charts/Pie'

const { Footer, Sider, Content } = Layout;

class Admin extends PureComponent {
  render() {
    const { userData } = this.props
    if(!userData._id){
      return <Redirect to= '/login'/>
    }

    return (
      <Layout style={{height:'100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path='/category' component={Category} />
              <Route path='/product' component={Product} />
              <Route path='/role' component={Role} />
              <Route path='/user' component={User} />
              <Route path='/charts/bar' component={Bar} />
              <Route path='/charts/line' component={Line} />
              <Route path='/charts/pie' component={Pie} />
              <Redirect to="/home"/>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
const mapState = state => ({
  userData:state.global.userData,
})

const mapDispatch = dispatch => ({
  getLocalUser(user){
    dispatch(actionCreators.getLocalUser(user))
  }
})
export default connect(mapState,mapDispatch)(Admin)
