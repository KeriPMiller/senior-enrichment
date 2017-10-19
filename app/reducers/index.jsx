import { combineReducers } from 'redux'

import campuses from './campuses'
import students from './students'

const rootReducer = combineReducers({ campuses, students })


export default rootReducer

// export default combineReducers({campuses});
