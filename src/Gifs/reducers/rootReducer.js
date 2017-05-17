import { combineReducers } from 'redux'
import { INPUT_CHANGE, NUMBER_OF_ELEMENTS_CHANGE } from '../actions/inputActions'
import { FETCH_GIFS_REQUEST, FETCH_GIFS_SUCCESS, FETCH_GIFS_FAILURE }  from '../actions/gifsActions'

const inputReducer = (state = "", action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return action.value;
        
        default:
            return state;
    }
}

const numberReducer = (state = 1, action) => {
    switch (action.type) {
        case NUMBER_OF_ELEMENTS_CHANGE:
            return action.elements;
            
        default:
            return state;
    }
}

const statusReducer = (state = "", action) => {
    switch (action.type) {
        case FETCH_GIFS_REQUEST:
            return `Fetching ${action.value}...`;
        
        case FETCH_GIFS_SUCCESS:
            return "Fetching is done successfully";

        case FETCH_GIFS_FAILURE:
            return `Error occured while loading data: ${action.error.message}`;
        
        default:
            return state;
    }
}

const gifsReducer = (state = [], action) => {
    switch (action.type) {       
        case FETCH_GIFS_SUCCESS:
            return action.urls;
        
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    value: inputReducer, 
    elements: numberReducer,
    status: statusReducer,
    urls: gifsReducer
})

export default rootReducer