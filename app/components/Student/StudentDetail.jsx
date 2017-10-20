import React,{ Component } from 'react'
import { fetchOneStudent } from '../../reducers/student'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CampusDetail extends Component {

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    this.props.getStudentDetail(studentId);
  }
  render() {
    const student = this.props.student
    const campuses = this.props.campuses
    console.log(campuses[student.CampusId])
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

const mapStateToProps = () => ({student, campuses}) => ({student, campuses})
// trying to import campuses state to access name
const mapDispatchToProps = (dispatch) => {
  return {
    getStudentDetail: (student) => {
      dispatch(fetchOneStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusDetail)
