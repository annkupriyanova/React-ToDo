import React from 'react';
import { Button, Checkbox } from 'react-bootstrap'


const ToDo = (props) => {
    const name = !props.isChecked? props.name : <s>{props.name}</s>
    return (
        <tr>
            <td>
                <Checkbox checked={props.isChecked} onChange={props.onCheckboxChange}>
                    <b>{name}</b>
                </Checkbox>
                <Button onClick={props.onDelete} bsSize="xsmall">Delete</Button>
            </td>
            <td>
                <p>{props.time.toString()}</p>
                <Button onClick={props.onTimerClick} bsSize="xsmall" 
                        bsStyle="info">{props.btnName}</Button>
            </td>
        </tr>
    );
}

export default ToDo;