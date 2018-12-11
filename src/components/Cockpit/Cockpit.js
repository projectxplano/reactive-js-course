import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) =>{
    let buttonClass= '';
    const styleClasses = [];
    if(props.persons.length <= 2){
      styleClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      styleClasses.push(classes.bold);
    }
    if(props.showPersons){
        buttonClass = classes.Red; 
    }
    return (
        <div className={classes.Cockpit}>              
        <h1>{props.title}</h1>
        <p className={styleClasses.join(' ')}> "It is working" </p>  
        <button className={buttonClass} onClick={props.clicked}>Toggle Persons</button> 
    </div>
    );

};

export default cockpit;