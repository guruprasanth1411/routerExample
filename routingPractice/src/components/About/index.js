// Write your JS code here
import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="about"
          className="about-img"
        />
        <h1>About</h1>
        <h1>I Love to create, I am a Frontend Developer!</h1>
      </div>
    )
  }
}
export default About
