export const ADD_COUNTER = 'ADD_COUNTER'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function addCounter(){
    return {
        type: ADD_COUNTER
    }
}

export function incrementCounter(index){
    return {
        type: INCREMENT_COUNTER,
        index: index
    }
}

export function decrementCounter(index){
    return {
        type: DECREMENT_COUNTER,
        index: index
    }
}

