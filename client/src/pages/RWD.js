import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {
  Button,
  Container,
  Header
  } from 'semantic-ui-react'

import Tribute from '../components/rwd/Tribute'
import Survey from '../components/rwd/Survey'
import Products from '../components/rwd/Products'
import Documentation from '../components/rwd/Documentation'
import Portfolio from '../components/rwd/Portfolio'


function RoutesWithSubRoutes(route) {
  return (
    <Route path={route.path} render={props => (
      <route.component {...props} routes={route.routes} />
    )} />
  )
}

export default class RWD extends Component {
  render() {
    const routes = [
      {
        path: '/rwd/tribute',
        component: Tribute
      },
      {
        path: '/rwd/survey',
        component: Survey
      },
      {
        path: '/rwd/product-landing-page',
        component: Products
      },
      {
        path: '/rwd/technical-documentation',
        component: Documentation
      },
      {
        path: '/rwd/portfolio',
        component: Portfolio
      },
    ]
    return (
      <Fragment>
        {routes.map((route, i) => (
          <RoutesWithSubRoutes key={i} {...route} />
        ))}
      </Fragment>
    )
  }
}
