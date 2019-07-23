import React from 'react';
//Added import from Person.css
import classes from './Person.module.css'

//ES6 version of component
//Dont need import from component because we are exporting a function and not a compnent
const person = (props) => {
    //Returning JSX with paragraph that says "I'm a person"
    //Out put dynamic content like the random number for the age of the person
    //In class based components it would be this.props
    //Must use parenthesis to return multiple lines
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            {/* Props.children accesses anything within the JSX elements */}
            {/* onClick is the event listener and it uses props.click from the person compnent in app.js to access switchNameHandler */}
            <p>{props.children}</p>
            {/* Included value={props.name} so that we can see the names of the person's in the input boxes */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )

}

export default person;