import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoManager from './ToDoManager/ToDoManager'
import Giphy from './Gifs/Giphy'
import MultipleCounters from './MultipleCounters/MultipleCounters'


class App extends Component {
  render() {  
    return (
        <MultipleCounters />
    );
  }
}

export default App;
