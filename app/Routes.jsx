import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history';
import Root from './components/Root'

import { fetchCampuses } from './reducers/campuses'
import CampusList from './components/Campus/CampusList'
// import CampusDetail from './components/Campus/CampusDetail'

import { fetchStudents } from './reducers/students'
import StudentList from './components/Student/StudentList'

  // COMPONENTS
class Routes extends Component {
  componentDidMount(){
    this.props.fetchInitialData()
  }

  render(){
    return(
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/students" component={StudentList} />
            <Route path="/" component={CampusList} />
        </Switch>
        </Root>
      </Router>
    )
  }
}

// CONTAINER
const mapToProps = null;

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
      dispatch(fetchCampuses());
      dispatch(fetchStudents());
     }
})

export default connect(mapToProps, mapDispatch)(Routes)
