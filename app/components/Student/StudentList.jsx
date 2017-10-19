import React,{ Component } from 'react'
import { fetchStudents } from '../../reducers/students'
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class StudentList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllStudents();
  }

  render() {
    const campus = this.props.campuses;
    console.log(campus);
    return (
      <div className="container">
        <div className="student-list">
        {this.props.students.map(student => (
          <div key={student.id}>
            <NavLink to={`/student/${student.id}`} className="student">
            </NavLink>
            <div className="row">
              <NavLink to={`/student/${student.id}`} className="student">
                <h2>{student.name}</h2>
              </NavLink>
              <hr/>
                <h3>Email : {student.email} Campus : {student.CampusId}</h3>
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
