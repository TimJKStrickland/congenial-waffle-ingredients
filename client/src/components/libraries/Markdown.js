import React, { Component, Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import Remarkable from 'remarkable'
export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      markdown: "# This is some text \n <br> \b \n ## More text \n [Google!](https://google.com) \n `Most of the things` \n ```\nAll of the things\n``` \n 1. List item \n > Blockquote \n ![https://source.unsplash.com/random](https://source.unsplash.com/random) __adfa__"
    };
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.markdown) };
  }

  handleChange(e){
    this.setState({
      markdown: e.target.value
    })
  }
  render() {
    return (
      <Fragment>
        <Container>
          <textarea name="markdown" id="editor" onChange={this.handleChange}
            defaultValue={this.state.markdown}></textarea>
          <div id="preview" dangerouslySetInnerHTML={this.getRawMarkup()}></div>
        </Container>
      </Fragment>
    )
  }
}
