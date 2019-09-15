import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {
  Button,
  Container,
  Header
  } from 'semantic-ui-react'

import Tribute from '../components/rwd/Tribute'
import Survey from '../components/rwd/Survey'


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
    ]
    return (
      <Fragment>
        <Container>
          <Header>RWD</Header>

          <Button as={Link} to='/rwd/tribute'>Tribute Project</Button>
          <Button as={Link} to='/rwd/survey'>Survey Project</Button>
          <Button as={Link} to='/rwd/products'>Product Landing Page Project</Button>
          <Button as={Link} to='/rwd/products'>Product Landing Page Project</Button>
          {routes.map((route, i) => (
            <RoutesWithSubRoutes key={i} {...route} />
          ))}
        </Container>
      </Fragment>
    )
  }
}
