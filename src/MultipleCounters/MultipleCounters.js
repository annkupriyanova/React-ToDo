import React from 'react'
import Counter from './Counter'
const uuidV1 = require('uuid/v1') 

const MultipleCounters = ({ counters = [], handleIncrement, handleDecrement, handleAddCounter }) => (
    <div>
        <button onClick={ handleAddCounter }>Add Counter</button>
        { counters.map((elm, index) => 
            <Counter key={elm.key} value={elm.value} onIncrement={ () => handleIncrement(index) } 
                    onDecrement={ () => handleDecrement(index) } /> )}
    </div>
)

export default MultipleCounters