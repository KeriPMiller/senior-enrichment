import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history';
import Root from './components/Root'

import { fetchCampuses } from './reducers/campuses'
// import { fetchOneCampus } from './reducers/campus'
import CampusList from './components/Campus/CampusList'
import CampusDetail from './components/Campus/CampusDetail'
import AddCampus from './components/Campus/AddCampus'

import { fetchStudents } from './reducers/students'
import StudentList from './components/Student/StudentList'
import StudentDetail from './components/Student/StudentDetail'
import AddStudent from './components/Student/AddStudent'

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
            <Route path="/students/:studentId" component={StudentDetail} />
            <Route exact path="/student/add"component={AddStudent} />
            <Route exact path="/students" component={StudentList} />
            <Route path="/campus/:campusId" component={CampusDetail} />
            <Route exact path="/campus/add" component={AddCampus} />
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
