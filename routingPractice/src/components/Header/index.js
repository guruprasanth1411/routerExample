// Write your JS code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="header-logo-container">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <h1 className="heading">Wave</h1>
        </div>
        <div className="header-links-container">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    )
  }
}
export default Header
