import React from 'react';


//ES6 version of component
//Dont need import from component because we are exporting a function and not a compnent
const person = (props) => {
    //Returning JSX with paragraph that says "I'm a person"
    //Out put dynamic content like the random number for the age of the person
    //In class based components it would be this.props
    //Must use parenthesis to return multiple lines
    return(
        <div>
            <p>I'm {props.name} and I'm {props.age} years old</p>
            {/* Props.children accesses anything within the JSX elements */}
            <p>{props.children}</p>
        </div>
    )

}

export default person;
