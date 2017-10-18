import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses'

export default class Root extends Component {
  constructor(){
    super();
    this.state = {
      campuses: []
    }
  }
  render(){
    return(
      <Router>
        <Routes path="/home" component={AllCampuses} />
      </Router>
    )
  }
}
