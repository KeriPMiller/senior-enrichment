import axios from 'axios'

// ACTION TYPES
const GET_STUDENT = 'GET_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS'

// ACTION CREATORS
export function getStudent (student){
  const action = { type: getStudent, student }
  return action
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students }
  return action
}

// THUNK CREATORS

export function fetchStudents(dispatch){
  return axios.get('/api/students', student)
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students)
      dispatch(action)
    })
}

// REDUCER
export default function reducer( state = [], action) {

  switch(action.type){

    case GET_STUDENTS:
      return action.students

    case GET_STUDENT:
      return [...state, action.student]

    default:
      return state
  }
}
