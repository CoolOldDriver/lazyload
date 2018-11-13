import React, { Component,Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route } from 'react-router-dom';
import store from './store'
import Home from './components/home';
import Licai from './components/licai'
import Header from './components/header'
import Yuanmeng from './components/yuanmeng'
import Login from './components/login'
import Jijin from './components/jijin'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/licai" exact component={Licai}></Route>
            <Route path="/yuanmeng" exact component={Yuanmeng}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/jijin" exact component={Jijin}></Route>
          </div>
        </BrowserRouter>
      </Provider>
      
     
      
    )
  }
}

export default App;
