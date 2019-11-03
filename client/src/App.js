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
import DataViz from './pages/DataViz'
import Microservices from './pages/Microservices'
import InfoSec from './pages/InfoSec'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rwd' component={RWD} />
            <Route path='/rwd/:id' render={ props => <RWD {...props} />} />
            <Route exact path='/algos' component={ComingSoon} />
            <Route exact path='/front-end-libraries' component={Libraries} />
            <Route path='/front-end-libraries/:id' render={ props => <Libraries {...props} />} />
            <Route exact path='/data-visualization' component={DataViz} />
            <Route path='/data-visualization/:id' render={props => <DataViz {...props} />} />
            <Route exact path='/api-and-microservices' component={Microservices} />
            <Route path='/api-and-microservices/:id' render={props => <Microservices {...props} />} />
            <Route exact path='/information-security-and-quality-assurance' component={InfoSec} />
            <Route path='/information-security-and-quality-assurance/:id' render={props => <InfoSec {...props} />} />
            <Route exact path='/ingredients' component={Ingredients} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
          <Header />
        </Router>
      </Fragment>
    )
  }
}
