// Write your JS code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          className="img"
          alt="home"
        />
        <div>
          <h1 className="home-heading">Home</h1>
        </div>
      </div>
    )
  }
}
export default Home
