// Write your JS code here
import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>Not Found</h1>
      </div>
    )
  }
}
export default NotFound
