import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

export default class Portfolio extends Component {
  render(){
    return (
      <Fragment>
        <main id="main">
          <nav id="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <ul style={{display:'flex',justifyContent:'space-around'}}>
              <li style={{listStyle:'none'}}>
                <a href="#welcome-section">Welcome</a>
              </li>
              <li style={{listStyle:'none'}}>
                <a href="#projects">Projects</a>
              </li>
              <li style={{listStyle:'none'}}>
                <a href="#contact">Get in Touch</a>
              </li>
            </ul>
          </nav>
          <section id="welcome-section" style={{height: '100vh', backgroundColor:'liteblue'}}>
            <h1>Hello, world</h1>
          </section>
          <section id="projects">
            <div className="project-tile">
              <Link to="#">Projects</Link>
            </div>
            <div className="project-tile">
              <Link to="#">Projects</Link>
            </div>
            <div className="project-tile">
              <Link to="#">Projects</Link>
            </div>
            <div className="project-tile">
              <Link to="#">Projects</Link>
            </div>
          </section>
          <section id="contact">
            <Link to="https://github.com/timjkstrickland" target="_blank" id="profile-link">Github</Link>
          </section>
        </main>
      </Fragment>
    )
  }
}
