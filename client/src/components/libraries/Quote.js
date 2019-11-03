import React, { Component, Fragment } from 'react'
import { Button, Icon } from 'semantic-ui-react'


function getNewQuote(quotes) {
  return Math.floor(Math.random() * quotes);
}
export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      currentQuote: null,
      currentAuthor: null,
      quotes: []
    }
  };

  handleClick() {
    const newQuote = getNewQuote(this.state.quotes.length)
    const renderQuote = this.state.quotes[newQuote].quote;
    const renderAuthor = this.state.quotes[newQuote].author;
    this.setState({
      currentQuote: renderQuote,
      currentAuthor: renderAuthor
    })
  }

  componentDidMount(){
    fetch('https://api.github.com/gists/af2d098a4d77f6ec409f14790f61249b', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(result => {
      const quotes = JSON.parse(result.files.quotes.content).quotes
      try {
        console.log("TCL: Quote -> componentDidMount -> JSON.parse(quotes)", JSON.parse(quotes).quotes)
      } catch(ex) {
        console.log("TCL: Quote -> componentDidMount -> ex", ex)
      }
      const currentQuoteIndex = getNewQuote(quotes.length)
      const renderQuote = quotes[currentQuoteIndex].quote;
      const renderAuthor = quotes[currentQuoteIndex].author;

      this.setState({
        currentQuote: renderQuote,
        currentAuthor: renderAuthor,
        isLoaded: true,
        quotes: quotes
      })
    })
    .catch(error => this.setState({
      error: error,
      isLoaded: false
    }));
  }

  render() {
    const { error, isLoaded, currentQuote, currentAuthor } = this.state;
    if(error){
      return (
        <div>
          { error }
        </div>
      )
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Fragment>
          <main id="main">
            <div id="quote-box">
              <div>
                <p id="text">
                  { currentQuote }
                </p>
                <p id="author">
                  { currentAuthor }
                </p>
              </div>

            <Button id="new-quote" color="green" onClick={this.handleClick.bind(this)}>New Quote</Button>
            <Button as="a" color="twitter" href={`https://twitter.com/intent/tweet?text=${currentQuote} - ${currentAuthor}`} target="_blank" id="tweet-quote" >
              <Icon name='twitter'></Icon>
              Tweet
            </Button>
            </div>
          </main>
        </Fragment>
      )
    }
  }
}
