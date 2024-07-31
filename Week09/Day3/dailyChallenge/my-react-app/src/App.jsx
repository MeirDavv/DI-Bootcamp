import { useState } from 'react'
import React from 'react'
import FormComponent from './Components/FormComponent'
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputsObj : {}
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let inputs = Array.from(event.target.getElementsByTagName('input'));
    const selects = Array.from(event.target.getElementsByTagName('select'));
    const inputsObj = {};
    inputs.forEach(input => {
      if(input.type ==='radio'){
        if (input.checked) {
          inputsObj[input.name] = input.value;
        }
      }
      else if (input.type === 'checkbox'){
        inputsObj[input.id] = input.checked;
      }
      else{
        inputsObj[input.id] = input.value;
      }

        })
    selects.forEach(select => {
      inputsObj[select.id] = select.value;
    })
    this.setState({ inputsObj }, () => {
      // Create query string
      const queryString = new URLSearchParams(inputsObj).toString();
      // Update URL
      window.history.pushState(null, null, `/?${queryString}`);
    });
  }

  render(){
    return (
      <div>
        <FormComponent handleSubmit = {this.handleSubmit} inputs={this.state.inputsObj}/>
      </div>
    )
  }
}

export default App;

