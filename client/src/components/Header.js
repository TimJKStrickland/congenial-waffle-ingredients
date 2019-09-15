import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

  render() {
    return (
      <Fragment>
        <Menu>
        <Menu.Menu>
          <Menu.Item
            name='home'
            as={Link} to="/"
          />
          <Menu.Item
            name='RWD'
            as={Link} to="/rwd"
          />
          <Menu.Item
            name='JS Algos & Data Structures'
            as={Link} to="/algos"
          />
          <Menu.Item
            name='Front End Libaries'
            as={Link} to="/front-end-libraries"
          />
          <Menu.Item
            name='Data Viz'
            as={Link} to="/data-visualization"
          />
          <Menu.Item
            name='API & Micro'
            as={Link} to="/api-and-microservices"
          />
          <Menu.Item
            name='IS & QA'
            as={Link} to="/information-security-and-quality-assurance"
          />
          </Menu.Menu>
        </Menu>
      </Fragment>

    )
  }
}
