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

export default class Microservices extends Component {
  render() {
    const routes = [
      {
        path: '/api-and-microservices/timestamp',
        component: ComingSoon
      },
      {
        path: '/api-and-microservices/request-header-parser',
        component: ComingSoon
      },
      {
        path: '/api-and-microservices/url-shortener',
        component: ComingSoon
      },
      {
        path: '/api-and-microservices/exercise-tracker',
        component: ComingSoon
      },
      {
        path: '/api-and-microservices/file-metadata',
        component: ComingSoon
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
