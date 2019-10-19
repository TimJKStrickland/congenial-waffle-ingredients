import React, { Component, Fragment } from 'react'
import { Menu, Dropdown, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

  render() {
    return (
      <Fragment>
        <Menu fixed='right' vertical>
        <Menu.Menu>
            <Menu.Item>
              <Dropdown text='RWD' pointing>
                <Dropdown.Menu>
                  <Dropdown.Item text="Tribute" as={ Link } to="/rwd/tribute" />
                  <Dropdown.Item text="Survey" as={ Link } to="/rwd/survey" />
                  <Dropdown.Item text="Product Landing Page" as={ Link } to="/rwd/product-landing-page" />
                  <Dropdown.Item text="Technical Documentation" as={ Link } to="/rwd/technical-documentation" />
                  <Dropdown.Item text="Portfolio" as={ Link } to="/rwd/portfolio" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item as={Link} to="/algos" name='JS Algos & Data Structures' />
            <Menu.Item>
              <Dropdown text='Front End Libraries' pointing>
                <Dropdown.Menu>
                  <Dropdown.Item text="Random Quote" as={Link} to='/front-end-libraries/random-quote-machine' />
                  <Dropdown.Item text="Markdown" as={Link} to='/front-end-libraries/markdown-previewer' />
                  <Dropdown.Item text="Drum Machine" as={Link} to='/front-end-libraries/drum-machine' />
                  <Dropdown.Item text="Calculator" as={Link} to='/front-end-libraries/js-calculator' />
                  <Dropdown.Item text="Pomodoro" as={Link} to='/front-end-libraries/pomodoro-clock' />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text='Data Visualization' pointing>
                <Dropdown.Menu>
                  <Dropdown.Item text='Timestamp' as={Link} to='/api-and-microservices/timestamp' />
                  <Dropdown.Item text='Request Header Parser' as={Link} to='/api-and-microservices/request-header-parser' />
                  <Dropdown.Item text='URL Shortener' as={Link} to='/api-and-microservices/url-shortener' />
                  <Dropdown.Item text='Exercise Tracker' as={Link} to='/api-and-microservices/exercise-tracker' />
                  <Dropdown.Item text='File Metadata' as={Link} to='/api-and-microservices/file-metadata' />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text='APIs & Micro' pointing>
                <Dropdown.Menu>
                  <Dropdown.Item text='Timestamp' as={Link} to='/api-and-microservices/timestamp' />
                  <Dropdown.Item text='Request Header Parser' as={Link} to='/api-and-microservices/request-header-parser' />
                  <Dropdown.Item text='URL Shortener' as={Link} to='/api-and-microservices/url-shortener' />
                  <Dropdown.Item text='Exercise Tracker' as={Link} to='/api-and-microservices/exercise-tracker' />
                  <Dropdown.Item text='File Metadata' as={Link} to='/api-and-microservices/file-metadata' />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text='Info Sec' pointing>
                <Dropdown.Menu>
                  <Dropdown.Item text="Metric Imperial Converter" as={Link} to='/information-security-and-quality-assurance/metric-imperial-converter' />
                  <Dropdown.Item text="Issue Tracker" as={Link} to='/information-security-and-quality-assurance/issue-tracker' />
                  <Dropdown.Item text="Personal Library" as={Link} to='/information-security-and-quality-assurance/personal-library' />
                  <Dropdown.Item text="Stock Price Checker" as={Link} to='/information-security-and-quality-assurance/stock-price-checker' />
                  <Dropdown.Item text="Anonymous Message Board" as={Link} to='/information-security-and-quality-assurance/anonymous-message-board' />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Fragment>

    )
  }
}
