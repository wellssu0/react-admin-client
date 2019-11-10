import React, { PureComponent } from 'react'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'


export default class App extends PureComponent {

  

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Admin}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}
