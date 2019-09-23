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

export default class DataViz extends Component {
  render() {
    const routes = [
      {
        path: '/data-visualization/bar-chart',
        component: ComingSoon
      },
      {
        path: '/data-visualization/scatterplot-graph',
        component: ComingSoon
      },
      {
        path: '/data-visualization/heat-map',
        component: ComingSoon
      },
      {
        path: '/data-visualization/choropleth-map',
        component: ComingSoon
      },
      {
        path: '/data-visualization/treemap-diagram',
        component: ComingSoon
      },
    ]
    return (
      <Fragment>
        <Header>
          <Button as={Link} to='/data-visualization/bar-chart'>Bar Chart</Button>
          <Button as={Link} to='/data-visualization/scatterplot-graph'>Scatterplot Graph</Button>
          <Button as={Link} to='/data-visualization/heat-map'>Heat Map</Button>
          <Button as={Link} to='/data-visualization/choropleth-map'>Choropleth map</Button>
          <Button as={Link} to='/data-visualization/treemap-diagram'>Treemap Diagram</Button>
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
