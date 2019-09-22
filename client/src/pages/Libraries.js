import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {
  Button,
  Container,
  Header
} from 'semantic-ui-react'

import ComingSoon from './ComingSoon'
import Quote from '../components/libraries/Quote'
import Markdown from '../components/libraries/Markdown'

function RoutesWithSubRoutes(route) {
  return (
    <Route path={route.path} render={props => (
      <route.component {...props} routes={route.routes} />
    )} />
  )
}

export default class Libraries extends Component {
  render() {
    const routes = [
      {
        path: '/front-end-libraries/random-quote-machine',
        component: Quote
      },
      {
        path: '/front-end-libraries/markdown-previewer',
        component: Markdown
      },
    ]
    return (
      <Fragment>
        <Header>
          <Button as={Link} to='/front-end-libraries/random-quote-machine'>Quote Project</Button>
          <Button as={Link} to='/front-end-libraries/markdown-previewer'>Markdown Project</Button>
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
