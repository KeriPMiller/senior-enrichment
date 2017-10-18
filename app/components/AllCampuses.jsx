import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Campuses extends Component {
  constructor() {
    super();
    this.state = {
      campuses: []
    }
  }

  // componentDidMount() {
  //   axios.get('/api/campus/campuses/').then(res => res.data).then(campuses => {
  //     this.setState({campuses})
  //   });
  // }
  render(){
      return (<div>
      <h3>Campuses</h3>
    </div >)
  }
}
