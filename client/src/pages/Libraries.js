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
      {
        path: '/front-end-libraries/drum-machine',
        component: ComingSoon
      },
      {
        path: '/front-end-libraries/js-calculator',
        component: ComingSoon
      },
      {
        path: '/front-end-libraries/pomodoro-clock',
        component: ComingSoon
      },
    ]
    return (
      <Fragment>
        <Header>
          <Button as={Link} to='/front-end-libraries/random-quote-machine'>Quote Project</Button>
          <Button as={Link} to='/front-end-libraries/markdown-previewer'>Markdown Project</Button>
          <Button as={Link} to='/front-end-libraries/drum-machine'>Drum Machine</Button>
          <Button as={Link} to='/front-end-libraries/js-calculator'>JS Calculator</Button>
          <Button as={Link} to='/front-end-libraries/pomodoro-clock'>Pomodoro Clock</Button>
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
