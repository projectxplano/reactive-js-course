import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';



class App extends Component {
  state ={
   persons : [{id: 'wew82145', name: 'Evan', age: 15},
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

  handleDelete = (id) => {
    //Clone the state, can use spread operator as well
    //console.log('Deleting id ' + id);
    const newPersons = this.state.persons.slice();
    const deleteIndex = this.findIndexById(id);
    //console.log('find index" ' + deleteIndex);
    newPersons.splice(deleteIndex, 1)
    this.setState({persons: newPersons})
  }

  togglePersons = () =>{
   //console.log('Toggling ');
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

  handleChange = (id, event) =>{
    //clone person array in state
    const newPersons = [...this.state.persons ];
    newPersons[this.findIndexById(id)].name = event.target.value;
    this.setState({persons : newPersons});
  }

  renderPersons = () => {
    

    let buttonClass= '';
    let persons = (<div>
      <button className={buttonClass} onClick={this.togglePersons}>Toggle Persons</button>
      </div>);
    if(this.state.showPersons){  
      buttonClass = classes.Red;   
     persons = (
     
      <div>
        <button className={buttonClass} onClick={this.togglePersons}>Toggle Persons</button>
        {
          this.state.persons.map(
            (person, index) => {
              return <Person name={person.name} 
                              age={person.age} 
                              key={person.id}
                              click={this.handleDelete.bind(this, person.id)} 
                              changed={this.handleChange.bind(this, person.id)}
                      />} )
        }
      </div>
      );
      

    }
     
     
     return persons;
  }

  render() {
    //let styleClasses = ['red', 'bold'].join(' ');
    let styleClasses = [];
    if(this.state.persons.length <= 2){
      styleClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      styleClasses.push(classes.bold);
    }
            
   


    return (
      
        <div className={classes.App}>       
          <h1 className="App-title">My first react app</h1>
          <p className={styleClasses.join(' ')}> "It is working" </p>          
          {this.renderPersons()}         
       
      </div>

      
      
    );
  }


}

export default App;
