import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {
  Button,
  Container,
  Header
} from 'semantic-ui-react'

import ComingSoon from './ComingSoon'
import BarChart from '../components/data-viz/BarChart'
import ScatterplotChart from "../components/data-viz/ScatterplotChart";
import HeatMap from "../components/data-viz/HeatMap";

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
        component: BarChart
      },
      {
        path: '/data-visualization/scatterplot-graph',
        component: ScatterplotChart
      },
      {
        path: '/data-visualization/heat-map',
        component: HeatMap
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
        <Container>
          {routes.map((route, i) => (
            <RoutesWithSubRoutes key={i} {...route} />
          ))}
        </Container>
      </Fragment>
    )
  }
}
