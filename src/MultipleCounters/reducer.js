import { ADD_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions'

const uuidV1 = require('uuid/v1')

const initialState = {
    counters: []
}

export default function multipleCounters(state = initialState, action){
    switch (action.type){
        case ADD_COUNTER:
            return { ...state, ...{ counters: [...state.counters, { value: 0, key: uuidV1() }]}}
        
        case INCREMENT_COUNTER:
            return { ...state, ...{
                counters: state.counters.map((elm, i) => {
                    if (i === action.index) 
                        return { ...elm, ...{ value: elm.value + 1 }}
                    return elm
                })
            }}
        
        case DECREMENT_COUNTER:
            return { ...state, ...{
                counters: state.counters.map((elm, i) => {
                    if (i === action.index) 
                        return { ...elm, ...{ value: elm.value - 1 }}
                    return elm
                })
            }}

        default: 
            return state
    }
}