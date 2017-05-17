import React, {Component} from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'


class Input extends Component {
    handleSubmit = e => {
        const { fetchGifs } = this.props
        fetchGifs()
        e.preventDefault()
    }
    
    render() {
        const { value, elements, elementsChange, inputChange } = this.props

        return (
            <Form inline onSubmit={ this.handleSubmit }>
                <FormGroup>
                    <FormControl type="text" value={value} 
                            placeholder="Type of GIF" onChange={ e => inputChange(e.target.value) }
                            required />
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormControl type="number" value={ elements } min={0}
                                onChange={ e => elementsChange(e.target.value) }/>
                </FormGroup>
                {' '}
                <Button type="submit" bsStyle="primary">Load GIFs</Button>
            </Form>   
        );
    }
}

export default Input;