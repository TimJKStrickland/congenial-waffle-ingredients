import React, { Component, Fragment } from 'react'
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    fetch('https://www.freecodecamp.com/email-submit', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      mode: '*cors',
      body: data,
    })
    .then(resp => console.log(resp))
    .catch(err => alert("Error ", err));
  }
  render() {
    return (
      <Fragment>
        <main id="main">
          <header id="header">
            <nav id="nav-bar" style={{ display: 'flex', justifyContent:'space-around', alignItems:'center'}}>
              <a href="#top" className="nav-link">
                <img src="https://source.unsplash.com/random" alt="Random unSplash" id="header-img" style={{ maxWidth:'50px', maxHeight:'50px' }}  />
              </a>
              <a href="#video" className="nav-link">Check out our video</a>
              <a href="#form" className="nav-link">
                Sign up!
              </a>
            </nav>
          </header>
          <section id="top"></section>
          <section style={{
            height: '200vh', marginTop: '8rem', display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent:'center' }}>
            <iframe title="Data and Picard - Pogo" id="video" width="560" height="315" src="https://www.youtube.com/embed/bl5TUw7sUBs" allow="encrypted-media"></iframe>
          </section>
          <section style={{height: '200vh', display:'flex', justifyContent:'center',alignContent:'center'}}>
            <form action="" id="form" onSubmit={this.handleSubmit}>
              <input type="email" name="email" id="email" placeholder="you@youremail.org" />
              <input type="submit" value="Submit" id="submit" />
            </form>
          </section>
        </main>
      </Fragment>
    )
  }
}
