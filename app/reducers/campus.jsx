import axios from 'axios'

// ACTION TYPES
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'

// ACTION CREATORS
const getOneCampus =  (campus) => {
  const action = { type: GET_ONE_CAMPUS, campus }
  return action
}

// REDUCER
export default function reducer ( campus = [], action) {

  switch(action.type){

    case GET_ONE_CAMPUS:
      return action.campus

    default:
      return campus
  }
}

// THUNK CREATORS

export const fetchOneCampus = (campusId) => dispatch => {
  axios.get(`/api/campus/${campusId}`)
  .then(res => res.data)
  .then((campus) => {
    return dispatch(getOneCampus(campus))
  })
  .catch((err) => { console.log(err) })
}
