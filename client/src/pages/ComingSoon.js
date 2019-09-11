
import React, { Component } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class ComingSoon extends Component {
  render() {
    return (
      <Container text textAlign='center'>
        <h1>Coming Soon!</h1>
        <Button as={Link} to='/'>Wanna go home?</Button>
      </Container>
    )

  }
}

