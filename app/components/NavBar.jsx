import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import history from '../history'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render(){
  return (
    <nav className="navbar navbar-default">
      <div className="conatiner">
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <div className="navbar-links">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/students'>Students</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )}
}
