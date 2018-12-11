import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  state ={
   persons : [
    {id: 'wew82145', name: 'Evan', age: 15},
    {id:'yrw44882', name: 'Ivan', age: 18},
    {id:'uew83421', name: 'Tom', age: 14}
  ],
  showPersons: false
  }

  handleClick = (newName, newAge, index) =>{
    const newPerson = {name: newName, age: newAge};  
    const newPersons = [...this.state.persons ];
    newPersons[index] = newPerson;    
    this.setState({persons : newPersons});
  }

  handleDelete = (index) => {    
    const newPersons = this.state.persons.slice();   
    newPersons.splice(index, 1)
    this.setState({persons: newPersons})
  }

  handleToggle = () =>{   
    const showingPersons = this.state.showPersons;
    this.setState({
      showPersons: !showingPersons
    })
  }

  findIndexById = (id) =>{
    return this.state.persons.findIndex(
      p => {return p.id === id}
      );
  }

  handleChange = (event, id) =>{
    //clone person array in state
    const newPersons = [...this.state.persons ];
    newPersons[this.findIndexById(id)].name = event.target.value;
    this.setState({persons : newPersons});
  }
 
  render() {
    let persons = null;
    if ( this.state.showPersons ) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.handleDelete}
        changed={this.handleChange} />;
    }  

    return (      
      <div className={classes.App}>       
          <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons= {this.state.persons}
          clicked= {this.handleToggle} 
          />
          {persons}
      </div>
    );
  }
}

export default App;
