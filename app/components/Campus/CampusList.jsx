import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CampusList extends Component {
  constructor(props) {
    super(props)
      this.state = store.getState();
  }
  

  render() {
    return (
      <div className="container">
        <div className="campus-list">
        {
          this.props.campuses
            .map(campus => <li key={campus.id}>{campus.name}</li>)
        }
        </div>
      </div>
    );
  }
}
