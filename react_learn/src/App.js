import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons :[
      {id: 'asfa1', name : "Janakiram", age: 26},
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id : 'asdf11', name : "vinay", age : 28}
    ],
    showPersons : false
  }

  

  nameChangedHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons : persons
    });
  }

  
  togglePersonHandler = (index) =>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons : !doesShow
    })
  }

  deleteNameHandler = (index) =>{
    const persons  = this.state.persons
    persons.splice(index, 1)
    this.setState({persons : persons})
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
          {this.state.persons.map( (person, index) =>{
              return <Person
                      click = {() => this.deleteNameHandler(index)}
                       name = {person.name}
                        age = {person.age} 
                        key = {person.id}
                        changed = {(event) => this.nameChangedHandler(event, person.id)}/>
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
