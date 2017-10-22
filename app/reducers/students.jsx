import axios from 'axios'

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
// const SELECT_STUDENT = 'SELECT_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'

// ACTION CREATORS
const getStudents = (students) => {
  const action = { type: GET_STUDENTS, students }
  return action
}

// const selectStudent = (student) => {
//   const action = { type: getStudent, student }
//   return action
// }
//
const addStudent = student => {
  const action =  { type: ADD_STUDENT, student }
  return action
}

// REDUCER
export default function reducer( students = [], action) {

  switch(action.type){

    case GET_STUDENTS:
    return action.students

    case ADD_STUDENT:
    return [...students, action.student]

    // case SELECT_STUDENT:
    // return [...students, action.student]

    default:
    return students
  }
}

// THUNK CREATORS

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => dispatch(getStudents(res.data)))
  .catch(err => console.error(err))
}

export const createStudent = (student) =>  dispatch => {
  axios.post('/api/students/create')
  .then(res => dispatch(addStudent(res.data)))
  .catch(err => console.error(err))
}
