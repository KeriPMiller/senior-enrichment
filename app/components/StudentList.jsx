import React from 'react'
import { withRouter, NavBar } from 'react-router-dom'
import { connect } from 'react-redux'

function StudentList (props) {
  return(
    <div>
      <ul>
        {
          students.map(student => {
            return (
              <li key={student.id}>
                <span>{student.name}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {students: state.students}
}

export default withRouter(connect(mapStateToProps)(StudentList))
