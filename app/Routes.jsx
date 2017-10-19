import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import Root from './components/Root'
import CampusList from './components/Campus/CampusList'

  // COMPONENTS
class Routes extends Component {
  componentDidMount(){
    this.props.fetchInitialData()
  }

  render(){
    return(
      <Router>
        <Root>
          <Switch>
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
      dispatch(getCampuses())
    }
})

export default connect(mapToProps, mapDispatch)(Routes)
