import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons :[
      {name : "Janakiram", age: 26},
      {name : "vinay", age : 28}
    ],
    showPersons : false
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

  nameChangedHandler = (event)=>{
    this.setState({
      persons :[
        {name : "Janakiram Yellapu", age:25},
        {name : event.target.value, age : 23}
      ]
    });
  }


  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons : !doesShow
    })
  }  

  render(){
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding: '8px',
      cursor : 'pointer'
    };

    let persons = null
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person =>{
              return <Person
                       name = {person.name}
                        age = {person.age} />
            })
          }
        </div> 
      );
    }

    return (
      <div className="App">
        <h1> Hi Hello Namaste </h1>
        <button style ={style} onClick ={this.togglePersonHandler}>Toggle Name </button>
        {persons}
      </div>
    );
  }
}

export default App;
