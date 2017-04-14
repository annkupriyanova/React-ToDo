import React, { Component } from 'react';
import logo from './logo.svg';
import Timer from './Timer'


class App extends Component {
  constructor(){
    super()
    this.state = { time: 0, isActive: false}
  }

  handleTimerClick = () => {
    this.prevTime = this.state.time
    if (!this.state.isActive){
      this.startTime = new Date()
      this.timerID = setInterval(() => this.tick(), 1000)
    }
    else {
      clearInterval(this.timerID)
      this.setState(prevState => ({time: prevState.time, isActive: !prevState.isActive}))
      this.prevTime = this.state.time
    }
  }

  

  tick(){

    var newTime = this.prevTime * 1000 + (new Date() - this.startTime)
    this.setState({ time: Math.floor(newTime/1000), isActive: true})
  }

  convertTime(time){
    var sec   = (time < 60)? time : Math.abs(time%60); 
    var min   = (time < 3600)? Math.floor(time/60) : Math.abs(Math.floor(time/60)%60); 
    var hours = (time < 86400)? Math.floor(time/60/60) : Math.abs(Math.floor(time/60/60)%24); 
    if (sec.toString().length   == 1) sec   = '0' + sec;
    if (min.toString().length   == 1) min   = '0' + min;
    if (hours.toString().length == 1) hours = '0' + hours;
    return `${hours}:${min}:${sec}`
  }

  render() {  
    return (
        <Timer time={this.convertTime(this.state.time)} onTimerClick={this.handleTimerClick} 
              btnName={ this.state.isActive? "Pause" : "Play"} />
    );
  }
}

export default App;
