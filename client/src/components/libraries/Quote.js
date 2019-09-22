import React, { Component } from 'react'

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      quote: null
    }
  }
  fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
  .then(resp => res.json())
  .then()
  .catch
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
