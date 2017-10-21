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
     campusId: '',
   }
   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleChange = this.handleChange.bind(this)
 }

 componentDidMount() {
   this.props.addOneNewStudent(/*inputvalue from form */)
 }
handleChange(event) {
  // const name = target.name
  // const target = event.target

  this.setState({[event.target.name]: event.target.value})
  console.log(this.state)
}

handleSubmit(event){
  event.preventDefault()
  this.props(addOneNewStudent)
}

render(){
  return(
    <div>
      <form>
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
        <select onChange={this.handleChange} name="campusId" value={this.state.campusId} onChange={this.handleChange}>
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
const mapToDispatch = (dispatch) => {
  return {
    addOneNewStudent: (student) => {
      dispatch(createStudent(student))
    }
  }
}

export default withRouter(connect(mapToProps, mapToDispatch)(AddStudent))
