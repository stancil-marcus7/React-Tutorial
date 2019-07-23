import React, {Component} from 'react';
import classes from './App.module.css';
//You can omit the .js at the end
import Person from './Person/Person'


class App extends Component {
  //Remember state is a JavaScript object
  state = {
    persons: [
      {id: '12dsfs', name: "Max", age: 12},
      {id: 'sdfsdf', name: "Manu", age: 81},
      {id: 'dsfsdf', name: "Stephanie", age: 500}
    ],
    otherState: 'some other value',
    //This property will be used to show the Persons or not
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    //Find the id of the person who's name is to be changed
    const personsIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    
    //Create another person with the same index so that we will change their name immutably
    const person = {
      ...this.state.persons[personsIndex]
    }

    //Assigning the name the user created to the new person
    person.name = event.target.value;

    //Creating another array so that we are changing the state immutably
    const persons = [...this.state.persons];

    //Putting the person who's name the user just changed into the new array we just created
    persons[personsIndex] = person;

    //Finally changing the state immutably
    this.setState({persons: persons})
  }

  //This function takes a Person components index and splices it from the array of persons and then resets the state
  deletePersonHandler = (personsIndex) => {
    //Must make copy of array before deleting objects from array. Using splice is one way of doing that
    // const persons = this.state.persons.slice();

    //Another way of creating new array called spreading; ES6 feature; update state immutably
    const person = [...this.state.persons];
    person.splice(personsIndex, 1);
    this.setState({persons: person})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //This will alternate showPersons from true to false
    this.setState({showPersons: !doesShow});
  }

  render(){
    //persons is the variable that we will use to determine whether to show or unshow the Persons components
    let persons = null;

    //Used for button class
    let btnClass = '';

    //if this.state.showPersons is true then the Person components will show; if false then they will unshow
    if (this.state.showPersons){ 
      persons = (
        <div>
          {/* Use map function to perform conditional rendering using Javascript */}
          {this.state.persons.map((person, index) => {
            return <Person 
              //This will allow us to delete a Person component by clicking them; must use arrow function to use paramaters in function calls
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              //Use the key property so that React will know exactly which component it's dealing with
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );
      
      //If btn is clicked on then it turns red
      btnClass = classes.Red;
    }

    //Use assignedClasses variable to do styling for the button
    const assignedClasses = [];

    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      //Must wrap app in StyleRoot for Radium media queries to work
        <div className={classes.App}>
          <h1>This is an React App</h1>
          {/* This will join the two classes in the "classes" array */}
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          {/* One way of switching names with the click but is not recommended */}
          <button
          //Add btnClass here
          className={btnClass} 
          //Using constant variable "style" to give button inline styling
          //Button is used to hide and unhide Person components
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* Use persons variable to render Persons components */}
          {persons}
        </div>
    );
  }
}

export default App;
 