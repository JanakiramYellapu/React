import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons :[
      {name : "Janakiram", age: 26},
      {name : "vinay", age : 28}
    ]
  }

  switchNameHandler = ()=>{
    // console.log("Hello")
    this.setState({
      persons :[
        {name : "Janakiram Yellapu", age:25},
        {name : "Vinay", age : 23}
      ]
    });
  }

  render(){
    return (
      <div className="App">
        <h1> Hi Hello Namaste </h1>
        <button onClick ={this.switchNameHandler}>Switch Name </button>
        <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age}> I'm learining </Person>
        <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}></Person>
      </div>
    );
  }
}

export default App;
