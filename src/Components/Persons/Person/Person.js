import React, {Component, Fragment} from 'react';
//Added import from Person.css
import PropTypes from 'prop-types';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import classes from './Person.module.css';

//ES6 version of component
//Dont need import from component because we are exporting a function and not a compnent
//Class based components require importing Component, "this" before props, and the render() function
class Person extends Component{

    constructor(props) {
        super(props);
        //Another way of making a reference
        this.inputElementRef = React.createRef();
    }

    //Puts focus on the last element
    componentDidMount(){
        this.inputElementRef.current.focus();
    }

        render() {
            console.log('[Person.js] rendering ...')
        //Returning JSX with paragraph that says "I'm a person"
        //Out put dynamic content like the random number for the age of the person
        //In class based components it would be this.props
        //Must use parenthesis to return multiple lines
        return(
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                {/* Props.children accesses anything within the JSX elements */}
                {/* onClick is the event listener and it uses props.click from the person compnent in app.js to access switchNameHandler */}
                <p>{this.props.children}</p>
                {/* Included value={props.name} so that we can see the names of the person's in the input boxes */}
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    //One way of implementing a ref
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    //The way of implementing a ref by using the constructor
                    ref={this.inputElementRef}/>
            </Aux>
        )
    }
}


//This ensures that you and your team are using a component's props correctly
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
