import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {
  Button,
  Container,
  Header
} from 'semantic-ui-react'

import ComingSoon from './ComingSoon'

function RoutesWithSubRoutes(route) {
  return (
    <Route path={route.path} render={props => (
      <route.component {...props} routes={route.routes} />
    )} />
  )
}

export default class InfoSec extends Component {
  render() {
    const routes = [
      {
        path: '/information-security-and-quality-assurance/metric-imperial-converter',
        component: ComingSoon
      },
      {
        path: '/information-security-and-quality-assurance/issue-tracker',
        component: ComingSoon
      },
      {
        path: '/information-security-and-quality-assurance/personal-library',
        component: ComingSoon
      },
      {
        path: '/information-security-and-quality-assurance/stock-price-checker',
        component: ComingSoon
      },
      {
        path: '/information-security-and-quality-assurance/anonymous-message-board',
        component: ComingSoon
      },
    ]
    return (
      <Fragment>
        <Header>
          <Button as={Link} to='/information-security-and-quality-assurance/metric-imperial-converter'>Metric Imperial Converter</Button>
          <Button as={Link} to='/information-security-and-quality-assurance/issue-tracker'>Issue Tracker</Button>
          <Button as={Link} to='/information-security-and-quality-assurance/personal-library'>Personal Library</Button>
          <Button as={Link} to='/information-security-and-quality-assurance/stock-price-checker'>Stock Price Checker</Button>
          <Button as={Link} to='/information-security-and-quality-assurance/anonymous-message-board'>Anonymous Message Board</Button>
        </Header>
        <Container>
          {routes.map((route, i) => (
            <RoutesWithSubRoutes key={i} {...route} />
          ))}
        </Container>
      </Fragment>
    )
  }
}
