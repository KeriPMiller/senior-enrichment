import { combineReducers } from 'redux'

import campuses from './campuses'
import campus from './campus'

import students from './students'
import student from './student'

const rootReducer = combineReducers({ campuses, campus, students, student })


export default rootReducer

// export default combineReducers({campuses});
