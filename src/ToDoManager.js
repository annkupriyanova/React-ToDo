import React, { Component } from 'react';
import ToDo from './ToDo'
import Timer from './Timer'
import { Button, Form, FormGroup, FormControl, Table } from 'react-bootstrap'
const uuidV1 = require('uuid/v1');

class ToDoManager extends Component {
    constructor(){
        super()
        this.state = { todos : [] , timers: [], value : "" }
    }

    onChange = (e) => this.setState({ value : e.target.value});

    onAddToDo = (e) => {
        this.setState(function(prevState){
            var newToDo = { name : this.state.value, isChecked: false, key: uuidV1()}
            var newTimer = { time: 0, isActive: false }
            return {todos: [...prevState.todos, newToDo], timers: [...prevState.timers, newTimer],
                     value: ""}
        });
        e.preventDefault();
    }

    onDeleteAll = () => {
        clearInterval(this.timerID)
        this.setState({ todos : [], timers: []})
    }

    handleDeleteItem = (index) => {
        clearInterval(this.timerID)
        this.setState(prevState =>
             ({ todos : [...prevState.todos.slice(0, index), ...prevState.todos.slice(index+1)],
                 timers : [...prevState.timers.slice(0, index), ...prevState.timers.slice(index+1)]}))    
    }

    handleCheckboxChange = (index) => {
        this.setState(function(prevState) {
            var newToDos = prevState.todos
            newToDos[index].isChecked = !newToDos[index].isChecked

            if (prevState.timers[index].isActive){
                clearInterval(this.timerID)
                var newTimers= prevState.timers
                newTimers[index].isActive = false
                return {todos: newToDos, timers: newTimers}            
            }
                        
            return {todos: newToDos}
        })
    }

    handleTimerClick = (index) => {
    var curTimer = this.state.timers[index]
    this.prevTime = curTimer.time
    if (!curTimer.isActive){
        //check other timers and stop those that active
        this.state.timers.forEach((elm,i) => {
          if (elm.isActive){
            clearInterval(this.timerID)
            this.setState(prevState => {
                var newTimers= prevState.timers
                newTimers[i].isActive = false
                return {timers: newTimers}
            })
          }
        })
      this.startTime = new Date()
      this.timerID = setInterval(() => this.tick(index), 1000)
    }
    else {
      clearInterval(this.timerID)
      this.setState(prevState => {
          var newTimers= prevState.timers
          newTimers[index].isActive = false
          return {timers: newTimers}
        })
      //this.prevTime = this.state.time
    }
  }

  tick(index){

    var newTime = this.prevTime * 1000 + (new Date() - this.startTime)
    this.setState(prevState => {
          var newTimers= prevState.timers
          newTimers[index] =  {time: Math.floor(newTime/1000), isActive: true, key: newTimers[index].key}
          return {timers: newTimers}
        })
  }

  convertTime(time){
    var sec   = (time < 60)? time : Math.abs(time%60); 
    var min   = (time < 3600)? Math.floor(time/60) : Math.abs(Math.floor(time/60)%60); 
    var hours = (time < 86400)? Math.floor(time/60/60) : Math.abs(Math.floor(time/60/60)%24); 
    if (sec.toString().length  === 1) sec   = '0' + sec;
    if (min.toString().length  === 1) min   = '0' + min;
    if (hours.toString().length === 1) hours = '0' + hours;
    return `${hours}:${min}:${sec}`
  }

    render() {
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
                        { this.state.todos.map((elm, index) => 
                            <tr key={elm.key}>
                                <td><ToDo name={elm.name} isChecked={elm.isChecked} 
                                    onDelete={this.handleDeleteItem.bind(this, index)} 
                                    onCheckboxChange={this.handleCheckboxChange.bind(this, index)} /></td>
                                <td><Timer time={this.convertTime(this.state.timers[index].time)} 
                                    onTimerClick={this.handleTimerClick.bind(this, index)} 
                                    btnName={ this.state.timers[index].isActive? "Pause" : "Play"} /></td>
                            </tr>
                        )}
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
