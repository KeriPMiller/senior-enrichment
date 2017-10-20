import axios from 'axios'

// ACTION TYPES
const GET_ONE_STUDENT = 'GET_ONE_STUDENT'

// ACTION CREATORS
const getOneStudent = (student) => {
  const action = { type: GET_ONE_STUDENT, student }
  return action
}

// REDUCER
export default function reducer ( student = [], action) {

  switch(action.type){

    case GET_ONE_STUDENT:
      return action.student

    default:
      return student
  }
}

// THUNK CREATORS

export const fetchOneStudent = (studentId) => dispatch => {
  axios.get(`/api/students/${studentId}`)
  .then(res => res.data)
  .then((student) => {
    return dispatch(getOneStudent(student))
  })
  .catch((err) => { console.log(err) })
}
