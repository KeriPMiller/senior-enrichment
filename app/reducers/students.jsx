import axios from 'axios'

// ACTION TYPES
const SELECT_STUDENT = 'SELECT_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS'

// ACTION CREATORS
const selectStudent = (student) => {
  const action = { type: getStudent, student }
  return action
}

const getStudents = (students) => {
  const action = { type: GET_STUDENTS, students }
  return action
}

// REDUCER
export default function reducer( students = [], action) {

  switch(action.type){

    case GET_STUDENTS:
    return action.students

    case SELECT_STUDENT:
    return [...students, action.student]

    default:
    return students
  }
}

// THUNK CREATORS

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(getStudents(res.data)))
}
