import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Heroku Rails starter: https://blog.heroku.com/a-rock-solid-modern-web-stack
import Ingredients from './pages/Ingredients'

import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

// RWD
import Tribute from './components/rwd/Tribute'
import Survey from './components/rwd/Survey'


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/rwd/tribute' component={Tribute} />
            <Route path='/rwd/survey' component={Survey} />
            <Route path='/rwd/:id' component={ComingSoon} />
            <Route path='/ingredients' exact component={Ingredients} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}
