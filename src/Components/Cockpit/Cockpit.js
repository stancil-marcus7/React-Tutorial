import React from 'react';
import classes from './Cockpit.module.css'


// We used the props from the Cockpit component
const cockpit = (props) => {
    //Use assignedClasses variable to do styling for the button
    //Took this from App.js; will use Cockpit.modules.css to add css to button
    const assignedClasses = [];

    //Used for button class
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return(
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            {/* This will join the two classes in the "classes" array */}
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {/*One way of switching names with the click but is not recommended */}
            <button
            //Add btnClass here
            className={btnClass} 
            //Using constant variable "style" to give button inline styling
            //Button is used to hide and unhide Person components
            onClick={props.clicked}>Toggle Persons</button>
          </div>
    )
}

export default cockpit;