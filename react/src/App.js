import 'babel-polyfill';
import {Router, browserHistory, Route, IndexRoute } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import GameTable from './containers/GameTable';
import Layout from './components/Layout'
import FriendGame from './containers/FriendGame'

const App = props =>{
  return(
    <Router history={browserHistory}>
      <Route path='/' component={GameTable}/>
      <Route path='/users/:id' component={Layout}/>
      <Route path='/computer' component={GameTable}/>
      <Route path='/friend' component={FriendGame}/>
    </Router>

  )
}

export default App;
