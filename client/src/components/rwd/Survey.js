import React, { Component } from 'react'
import { Form, FormButton, Input, TextArea, Checkbox } from 'semantic-ui-react'

export default class Survey extends Component {

  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form id="survey-form">
        <h1 id="title">This is my form</h1>
        <p id="description">This is what you need to fill out in order to pass the tests</p>
        <label id='name-label'>Name</label>
        <Input icon='search' placeholder='Name' id='name' type='name' name='name' required />
        
        <label id='email-label'>Email</label>
        <Input icon='search' placeholder='Email' id='email' type='email' name='email' required />
        <label id='number-label'>Number</label>
        <Input placeholder='4' id='number' type='number' name='number' required min='1' max='10' />
        <select placeholder='Select your country' id="dropdown">
          <option value='af'> 'Afghanistan'</option>
          <option value='ax'>Aland Islands</option>
        </select>
        <Form.Field
          control='input'
          type='radio'
          label='Choose this'
          name='radioGroup'
          value='this'
          checked={this.state.value === 'this'}
          onChange={this.handleChange}
        />
        <Form.Field
          control='input'
          label='Choose that'
          name='radioGroup'
          type='radio'
          value='that'
          checked={this.state.value === 'that'}
          onChange={this.handleChange}
        />
        <Form.Group grouped>
          <label>HTML checkboxes</label>
          <Checkbox label='This one' value='This one' type='checkbox' name='checkboxes' />
          <Checkbox label='That one' value='That one' type='checkbox' name='checkboxes' />
          <Checkbox label='The other' value='The other' type='checkbox'name='checkboxes' />
        </Form.Group>
        <TextArea type='texarea' placeholder="Comments?" />
        <FormButton id='submit' type='submit'>Submit</FormButton>
      </Form>
    )
  }
}
