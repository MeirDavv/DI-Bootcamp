import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.arr = [];
    this.obj = {

    }
    this.state = {
      name: 'John',
      age: 25
    }
  }

  changeName = () => {
    this.setState({name:'Anne'});
  };

  render(){
    return (
      <>
      <h1>Hi, {this.state.name} your age is, {this.state.age}</h1>
      <button onClick={() => this.changeName()}>Change My Name</button>
      </>
    )
  }
}

// function App() {
//   return (
//     <>
//       <div>Hi from function component</div>
//     </>
//   )
// }

export default App
