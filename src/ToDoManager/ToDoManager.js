import React, { Component } from 'react';
import ToDo from './ToDo'
import { Button, Form, FormGroup, FormControl, Table } from 'react-bootstrap'
import convertTimeFunction from './convertTimeFunction'
const uuidV1 = require('uuid/v1');

class ToDoManager extends Component {
    constructor(){
        super()
        this.state = { todos : [], value : "", activeTimerIndex : -1}
    }

    onChange = (e) => this.setState({ value : e.target.value});

    onAddToDo = (e) => {
        this.setState(function(prevState){
            var newToDo = { name : this.state.value, isChecked: false, key: uuidV1(), 
                            time: 0}
            return {todos: [...prevState.todos, newToDo], value: ""}
        });
        e.preventDefault();
    }

    onDeleteAll = () => {
        clearInterval(this.timerID)
        this.setState({ todos : []})
    }

    handleDeleteItem = (index) => {
        clearInterval(this.timerID)
        this.setState(prevState =>
             ({ todos : [...prevState.todos.slice(0, index), ...prevState.todos.slice(index+1)]}))    
    }

    handleCheckboxChange = (index) => {
        this.setState(function(prevState) {
            var newToDos = prevState.todos
            newToDos[index].isChecked = !newToDos[index].isChecked

            /*if (prevState.timers[index].isActive){
                clearInterval(this.timerID)
                var newTimers= prevState.timers
                newTimers[index].isActive = false
                return {todos: newToDos, timers: newTimers}            
            }*/
                        
            return {todos: newToDos}
        })
    }

    handleTimerClick = (index) => {
        let todo = this.state.todos[index]
        if(this.state.activeTimerIndex !== -1)
            clearInterval(this.timer)
            if(this.state.activeTimerIndex === index)
                this.setState({activeTimerIndex: -1})
            else
                this.timer = setInterval(() => this.tick(index), 1000)
    }

    tick(index){
        this.setState( prevState => {
            var newToDos= prevState.todos
            newToDos[index].time++
            return {todos: newToDos, activeTimerIndex: index}
            })
    }

    render() {  
        const todosToRender = this.state.todos.map((elm, index) =>    
                            <ToDo key={elm.key} name={elm.name} isChecked={elm.isChecked} 
                                time={convertTimeFunction(this.state.todos[index].time)} 
                                onDelete={this.handleDeleteItem.bind(this, index)} 
                                onCheckboxChange={this.handleCheckboxChange.bind(this, index)} 
                                onTimerClick={this.handleTimerClick.bind(this, index)} 
                                btnName={ this.state.activeTimerIndex === index? "Pause" : "Play"} />   
                        )

        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                        { todosToRender }
                    </tbody>
                </Table>

                <Form inline onSubmit={this.onAddToDo}>
                    <FormGroup>
                        <FormControl type="text" placeholder="What to do?" 
                                    value={this.state.value} onChange={this.onChange} />
                    </FormGroup>
                    {' '}
                    <Button type="submit">Add ToDo</Button>
                    {' '}
                    <Button onClick={this.onDeleteAll} bsStyle="danger" >Fuck it all</Button> 
                </Form>
            </div>
        );
    }
}

export default ToDoManager;
