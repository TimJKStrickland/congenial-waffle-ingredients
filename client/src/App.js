import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/Header'

// Heroku Rails starter: https://blog.heroku.com/a-rock-solid-modern-web-stack
import Ingredients from './pages/Ingredients'

import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

// RWD
import RWD from './pages/RWD'
import Libraries from './pages/Libraries'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rwd' component={RWD} />
            <Route path='/rwd/:id' render={ props => <RWD {...props} />} />
            <Route exact path='/algos' component={ComingSoon} />
            <Route exact path='/front-end-libraries' component={Libraries} />
            <Route path='/front-end-libraries/:id' render={ props => <Libraries {...props} />} />
            <Route exact path='/data-visualization' component={ComingSoon} />
            <Route exact path='/api-and-microservices' component={ComingSoon} />
            <Route exact path='/information-security-and-quality-assurance' component={ComingSoon} />
            <Route exact path='/ingredients' component={Ingredients} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}
