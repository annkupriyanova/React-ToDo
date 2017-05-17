import React from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'

const Input = (props) => {
    const { value, numberOfElemnts, inputChange, numberOfElemntsChange, submitClick } = props
    
    return (
        <Form inline onSubmit={ submitClick }>
            <FormGroup>
                <FormControl type="text" value={value} 
                        placeholder="Type of GIF" onChange={ e => inputChange(e.target.value) }
                        required />
            </FormGroup>
            {' '}
            <FormGroup>
                <FormControl type="number" value={ numberOfElemnts } min={0}
                            onChange={ numberOfElemntsChange }/>
            </FormGroup>
            {' '}
            <Button type="submit" bsStyle="primary">Load GIFs</Button>
        </Form>            
    )
}

export default Input