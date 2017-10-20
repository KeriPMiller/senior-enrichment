import React,{ Component } from 'react'
import { fetchOneStudent } from '../../reducers/student'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CampusDetail extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    this.props.getStudentDetail(studentId);
  }
  render() {
    const student = this.props.student
    return(
      <div className="student">
        <h2>{student.name}</h2>
        <ul>
          <li>Email:{student.email}</li>
          <li>Campus:{student.CampusId}</li>
        </ul>
      <button>Delete Student!</button>
      </div>
    )
  }
}

const mapStateToProps = () => ({student}) => ({student})

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentDetail: (student) => {
      dispatch(fetchOneStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusDetail)
