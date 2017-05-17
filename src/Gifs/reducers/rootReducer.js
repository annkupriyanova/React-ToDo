import { combineReducers } from 'redux'
import { inputReducer } from './inputReducer'
import { gifsReducer } from './gifsReducer'

const rootReducer = combineReducers({
    inputReducer,
    gifsReducer
});

export default rootReducer