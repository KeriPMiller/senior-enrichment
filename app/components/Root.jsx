import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './NavBar'
import CampusList from './CampusList'
import StudentList from './StudentList'

export default class Root extends Component {

  render(){
    return(
      <div>
        <NavBar />
        <Switch>
          <Route path="/campuses" components={CampusList} />
        </Switch>
      </div>
    )
  }
}
