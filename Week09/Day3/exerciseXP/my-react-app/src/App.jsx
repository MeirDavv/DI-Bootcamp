import { useState } from 'react'
import './App.css'
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Color from './Color';



class BuggyCounter extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render(){
    if(this.state.counter === 5){
      throw new Error('I crashed')
    }

    return(
      <h1 onClick={this.handleClick}>Count: {this.state.counter}</h1>
    )
  }
}

function App() {
  return (
    <div>
      <h1>Click the counter</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <BuggyCounter />

      <Color/>

    </div>
  );
}

export default App;