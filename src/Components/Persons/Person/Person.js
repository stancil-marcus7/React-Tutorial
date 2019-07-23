import React, {Component} from 'react';
//Added import from Person.css
import classes from './Person.module.css'

//ES6 version of component
//Dont need import from component because we are exporting a function and not a compnent
//Class based components require importing Component, "this" before props, and the render() function
class Person extends Component{
    render() {
        console.log('[Person.js] rendering ...')
    //Returning JSX with paragraph that says "I'm a person"
    //Out put dynamic content like the random number for the age of the person
    //In class based components it would be this.props
    //Must use parenthesis to return multiple lines
    return(
        <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
            {/* Props.children accesses anything within the JSX elements */}
            {/* onClick is the event listener and it uses props.click from the person compnent in app.js to access switchNameHandler */}
            <p>{this.props.children}</p>
            {/* Included value={props.name} so that we can see the names of the person's in the input boxes */}
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
    )
    }
    

}

export default Person;
