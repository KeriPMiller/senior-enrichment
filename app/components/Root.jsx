import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';

export default class Root extends Component {

  render(){
    return(
      <div>
        <NavBar />
      </div>
    )
  }
}
