import axios from 'axios'

// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'
// const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
// const SELECT_CAMPUS = 'SELECT_CAMPUS'
// const DESTROY_CAMPUS = 'DESTROY_CAMPUS'

// ACTION CREATORS

const getCampuses = (campuses) => {
  const action = { type: GET_CAMPUSES, campuses }
  return action
}
export const AddCampus = (campus) => {
  const action = { type: ADD_CAMPUS, campus }
  return action
}
//
// const updateCampus = (campus) => {
//   const action = { type: UPDATE_CAMPUS, campus }
//   return action
// }
//
// const selectCampus = (campus) => {
//   const action = { type: SELECT_CAMPUS, campus }
//   return action
// }
//
// const destroyCampus = (campus) => {
//   const action = { type: DESTROY_CAMPUS, campus }
//   return action
// }

// REDUCER
export default function reducer ( campuses = [], action) {

  switch(action.type){

    case GET_CAMPUSES:
      return action.campuses

    case ADD_CAMPUS:
      return [action.campus, ...campuses]

    // case UPDATE_CAMPUS:
    // return state.map(campus => (
    //   action.campus.id === user.id ? action.campus : campus
    // ))

    // case SELECT_CAMPUS:
    //   return [action.campus, ...state]

    // case DESTROY_CAMPUS:
    //   return state.filter(campus => campus.id !== action.id)

    default:
      return campuses
  }
}

// THUNK CREATORS

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus/campuses')
  .then(res => dispatch(getCampuses(res.data)))
  .catch(err => console.erro(err))
}

export const createCampus = () => dispatch => {
  axios.post('/api/campus/create')
  .then(res => dispatch(addCampus(res.data)))
  .catch(err => console.error(err))
}
