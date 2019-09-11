import React, { Component, Fragment } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>FCC SPEED RUN</h1>
        <div className="column">
          <h2>Responsive Web Design Projects</h2>
        </div>
        <h2></h2>
        <Container>
          <Button as={Link} to='/rwd/tribute'>Tribute Project</Button>
          <Button as={Link} to='/rwd/survey'>Survey Project</Button>
          <Button as={Link} to='/rwd/products'>Product Landing Page Project</Button>
          <Button as={Link} to='/rwd/products'>Product Landing Page Project</Button>
        </Container>
      </Fragment>
    )
  }
}
