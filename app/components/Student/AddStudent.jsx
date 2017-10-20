import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {createStudent} from '../reducers/students'

class AddStudent extends Component{
  constructor(props) {
   super(props);
 }

  componentDidMount() {
    this.props.addOneNewStudent(/*inputvalue from form */)
  }

render(){
  return(
    <form onSubmit={this.onSignupSubmit}>
      <div className="form-group">
        <label>name</label>
        <input
          name="name"
          type="name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Campus</label>
        <input
          name="campus"
          type="campus"
          className="form-control"
          required
        />
      {campuses.map((campus) => {
        <li>{capus.name}</li>
      })}
      </div>
      <button type="submit" className="btn btn-block btn-primary">{message}</button>
    </form>
  )
}

}

const mapToProps = ({students, campuses}) => ({students, campuses});
const mapToDispatch = (dispatch) => {
  return {
    addOneNewStudent: (student) => {
      dispatch(createStudent(student))
    }
  }
};

export default withRouter(connect(mapToProps, mapToDispatch)(AddStudent));
