import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from '../App';
import Todo from '../containers/Todo'
import ForLoop from '../components/for-loop.jsx'
import List from '../containers/List'
import Detail from '../containers/Detail'
import Lifecycle from '../containers/Lifecycle'

class Router extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/todo" component={Todo}/>
          <Route exact path="/forLoop" component={ForLoop}/>
          <Route exact path="/list" component={List}/>
          <Route exact path="/list/:id" component={Detail}/>
          <Route exact path="/lifecycle" component={Lifecycle}/>
        </Switch>
        
    </HashRouter>
    )
  }
}

export default Router