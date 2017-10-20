import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {createCampus} from '../../reducers/campuses'

class AddStudent extends Component{
  constructor(props) {
   super(props)
   this.state = {
     name: '',
     image: '',
   }
   this.handleSubmit = this.handleSubmit.bind(this)
 }

 componentDidMount() {
   this.props.addOneNewCampus(/*inputvalue from form */)
 }
handleChange(event) {
  const name = target.name
  const target = event.target

  this.setState({[name]: target.value})
}

handleSubmit(event){
  event.preventDefault()
  this.props(addOneNewStudent)
}

render(){
  return(
    <div>
      <form>
        <label>Campus Name:</label>
        <input
          name='name'
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
          ></input>
        <label>Campus Email:</label>
        <input
          name='image'
          type='text'
          value={this.state.image}
          onChange={this.handleChange}
          ></input>
          <input type='submit' value='submit'/>
      </form>
    </div>
  )
}

}

const mapToProps = ({campuses}) => ({campuses})
const mapToDispatch = (dispatch) => {
  return {
    addOneNewCampus: (campus) => {
      dispatch(createCampus(campus))
    }
  }
}

export default withRouter(connect(mapToProps, mapToDispatch)(AddStudent))
