import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import NavBar from './NavBar'
import CampusList from './CampusList'


export default class Root extends Component {
  // componentDidMount(){
  //   const campusThunk = fetchCampuses()
  //   store.dispatch(campusThunk)
  // }

  render(){
    return(
      <div>
        <NavBar />
        <main>
          <Router>
            <Switch>
              <Route path="/home" component={CampusList} />
            </Switch>
          </Router>
        </main>
      </div>
    )
  }
}
