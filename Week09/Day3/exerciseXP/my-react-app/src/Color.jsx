import React, { Component } from 'react';

// Child Component
class Child extends Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

// Parent Component
class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    alert("useEffect reached");
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  }

  deleteHeader = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is <span style={{color: this.state.favoriteColor}}>{this.state.favoriteColor}</span></h1>
        <button onClick={this.changeColor}>Change Color to Blue</button>
        {this.state.show && <Child />}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default Color;
