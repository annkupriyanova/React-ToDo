import React, { Component } from 'react';
import logo from './logo.svg';
import Timer from './Timer'
const uuidV1 = require('uuid/v1');


class TimerBunch extends Component {
  constructor(){
    super()
    this.state = {timers: []}
  }

  addTimer = () => {
    this.setState((prevState) => ({ timers: [...prevState.timers, 
                                        {time: 0, isActive: false, key: uuidV1()}] }))   
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
                return newTimers
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
          return newTimers
        })
      this.prevTime = this.state.time
    }
  }

  

  tick(index){

    var newTime = this.prevTime * 1000 + (new Date() - this.startTime)
    this.setState(prevState => {
          var newTimers= prevState.timers
          newTimers[index] =  {time: Math.floor(newTime/1000), isActive: true, key: newTimers[index].key}
          return newTimers
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
            <button onClick={this.addTimer}>Add timer</button>
            {this.state.timers.map((elm, index) => 
                <Timer time={this.convertTime(elm.time)} 
                        onTimerClick={this.handleTimerClick.bind(this, index)} 
                        btnName={ elm.isActive? "Pause" : "Play"}
                        key={elm.key} />
            )}
        </div>
        
    );
  }
}

export default TimerBunch;
