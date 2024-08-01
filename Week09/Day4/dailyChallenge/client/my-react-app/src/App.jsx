import React from "react";
import FormComp from "./Components/FormComp";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {message : null}
  }
  async componentDidMount(){
    const url = 'http://localhost:3001/api/hello';
    try {
      const res = await fetch(url);
      const resText = await res.text();
      this.setState({message: resText});
    } catch (error) {
      console.error(error);
    }
  }
  render(){
    return (
      <div>
          
          <FormComp setMessage = {message => this.setState({message})}/>
          <p>{this.state.message}</p>
      </div>
  )
  }
}