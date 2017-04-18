import React, { Component } from 'react';
import { Button, Checkbox } from 'react-bootstrap'


class ToDo extends Component {

    render() {
        const name = !this.props.isChecked? this.props.name : <s>{this.props.name}</s>
        return (
            <tr>
                <td>
                    <Checkbox checked={this.props.isChecked} onChange={this.props.onCheckboxChange}>
                        <b>{name}</b>
                    </Checkbox>
                    <Button onClick={this.props.onDelete} bsSize="xsmall">Delete</Button>
                </td>
                <td>
                    <p>{this.props.time.toString()}</p>
                    <Button onClick={this.props.onTimerClick} bsSize="xsmall" 
                            bsStyle="info">{this.props.btnName}</Button>
                </td>
            </tr>
        );
    }
}

export default ToDo;