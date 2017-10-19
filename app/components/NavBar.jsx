import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import history from '../history'
// import home and students maybe?

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    // rendering home and students?
  }
  render(){
  return (
    <nav className="navbar navbar-default">
      <div className="conatiner">
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <div className="navbar-header">
          <ul>
            <li><button>Home</button></li>
            <li><button>Students</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )}
}

// conatiner


// export default connect(mapStateToProps)(NavBar)
