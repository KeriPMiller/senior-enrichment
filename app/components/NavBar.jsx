import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import history from '../history'
// import home and students maybe?

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render(){
  return (
    <nav className="navbar navbar-default">
      <div className="conatiner">
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <div className="navbar-header">
          <ul>
            <li><Link to='/'><button className="nav button">Home</button></Link></li>
            <li><Link to='/students'><button className="nav button">Students</button></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )}
}

// conatiner


// export default connect(mapStateToProps)(NavBar)
