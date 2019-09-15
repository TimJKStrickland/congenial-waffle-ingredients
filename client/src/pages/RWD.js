import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {
  Button,
  Container,
  Header
  } from 'semantic-ui-react'

import ComingSoon from './ComingSoon'
import Tribute from '../components/rwd/Tribute'
import Survey from '../components/rwd/Survey'
import Products from '../components/rwd/Products'


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
        component: ComingSoon
      },
      {
        path: '/rwd/portfolio',
        component: ComingSoon
      },
    ]
    return (
      <Fragment>
        <Container>
          <Header>RWD</Header>

          <Button as={Link} to='/rwd/tribute'>Tribute Project</Button>
          <Button as={Link} to='/rwd/survey'>Survey Project</Button>
          <Button as={Link} to='/rwd/product-landing-page'>Product Landing Page Project</Button>
          <Button as={Link} to='/rwd/technical-documentation'>Technical Documentation</Button>
          <Button as={Link} to='/rwd/portfolio'>Portfolio</Button>
          {routes.map((route, i) => (
            <RoutesWithSubRoutes key={i} {...route} />
          ))}
        </Container>
      </Fragment>
    )
  }
}
