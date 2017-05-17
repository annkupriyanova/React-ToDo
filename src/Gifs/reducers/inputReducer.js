import { INPUT_CHANGE, NUMBER_OF_ELEMENTS_CHANGE } from '../actions/inputActions'

const inputReducer = (state={ value: 0, numberOfElements: 0 }, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {...state, ...{ value: action.value }};
        
        case NUMBER_OF_ELEMENTS_CHANGE:
            return {...state, ...{ numberOfElements: action.numberOfElements }};
        
        default:
            return state;
    }
}

export default inputReducer;

