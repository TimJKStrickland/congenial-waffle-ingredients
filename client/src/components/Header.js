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
            name='JS Algos'
            as={Link} to="/algos"
          />
          </Menu.Menu>
        </Menu>
      </Fragment>

    )
  }
}
