import { combineReducers } from 'redux'

import campuses from './campuses'
import campus from './campus'

import students from './students'

const rootReducer = combineReducers({ campuses, campus, students })


export default rootReducer

// export default combineReducers({campuses});
