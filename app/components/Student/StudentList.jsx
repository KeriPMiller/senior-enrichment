import React,{ Component } from 'react'
import { fetchStudents } from '../../reducers/students'
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class StudentList extends Component {

  componentDidMount() {
    this.props.getAllStudents();
  }

  render() {
    return (
      <div className="container">
        <div className="student-list">
        {this.props.students.map(student => (
          <div key={student.id}>
            <NavLink to={`/students/${student.id}`} className="student">
            </NavLink>
            <div className="row">
              <NavLink to={`/students/${student.id}`} className="student">
                <h2>{student.name}</h2>
              </NavLink>
              <hr/>
                <h3>Email : {student.email} Campus : {student.CampusId}</h3>
                <button>X</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({students, campuses}) => ({students,campuses})
const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => {
      dispatch(fetchStudents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
