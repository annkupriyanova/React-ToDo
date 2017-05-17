import React from 'react'

const Counter = ({ value, onIncrement, onDecrement }) => ( 
    <div>
        <button onClick={ onIncrement }>+</button>
        <label>{ value }</label>
        <button onClick={ onDecrement }>-</button>
    </div>
)

export default Counter