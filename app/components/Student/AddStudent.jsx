import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {createStudent} from '../../reducers/students'

class AddStudent extends Component{
  constructor(props) {
   super(props)
   this.state = {
     name: '',
     email: '',
     CampusId: '',
   }
   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleChange = this.handleChange.bind(this)
 }

handleChange(event) {
  console.log(this.state)
  this.setState({[event.target.name]: event.target.value})
}

handleSubmit(event){
  event.preventDefault()
  const name = this.state.name
  const email = this.state.email
  const campusId = this.state.campusId
  this.props.createStudent(this.state)
}

render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>Student Name:</label>
        <input
          name='name'
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
          ></input>
        <label>Student Email:</label>
        <input
          name='email'
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
          ></input>
        <label>Campus Id:</label>
        <select onChange={this.handleChange} name="campusId" value={this.state.CampusId} onChange={this.handleChange}>
         <option value="" disabled selected>Select Campus</option>
        {this.props.campuses.map(campus => (
          <option key={campus.id} value={campus.id}>{campus.name}</option>
        ))}
        </select>
          <input type='submit' value='submit'/>
      </form>
    </div>
  )
}

}

const mapToProps = ({students, campuses}) => ({students, campuses})
const mapToDispatch = { createStudent }

export default withRouter(connect(mapToProps, mapToDispatch)(AddStudent))
