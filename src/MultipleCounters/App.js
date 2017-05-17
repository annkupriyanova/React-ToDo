import React from 'react'
import { connect } from 'react-redux'
import MultipleCounters from './MultipleCounters'
import { incrementCounter, decrementCounter, addCounter } from './actions'

const mapStateToProps = (state) => ({ counters: state.counters })

const mapDispatchToProps = (dispatch) => ({
        handleIncrement:  (index) => { dispatch(incrementCounter(index)) },
        handleDecrement:  (index) => { dispatch(decrementCounter(index)) },
        handleAddCounter: () => { dispatch(addCounter()) }        
    })

const App = connect(mapStateToProps, mapDispatchToProps)(MultipleCounters)

export default App