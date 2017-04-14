import React from 'react';
import { Button } from 'react-bootstrap'


function Timer(props){
    return (
        <div>   
            <p>{props.time.toString()}</p>
            <Button onClick={props.onTimerClick} bsSize="xsmall" bsStyle="info">{props.btnName}</Button>
        </div>
    )
}

export default Timer