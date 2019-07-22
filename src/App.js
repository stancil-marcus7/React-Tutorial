import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//You can omit the .js at the end
import Person from './Person/Person'

class App extends Component {
  //Remember state is a JavaScript object
  state = {
    persons: [
      {name: "Max", age: 12},
      {name: "Manu", age: 81},
      {name: "Stephanie", age: 500}
    ],
    otherState: 'some other value',
    //This property will be used to show the Persons or not
    showPersons: false
  }

  //New name is a veraible that will be used to switch the names
  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //We should not change the state lke this: this.state.persons[0].name = "Maximillian"; this will mutate the state
    //This sets the resets the state appropriately
    this.setState({
      persons: [
        {name: newName, age: 12},
        {name: "Manu", age: 81},
        {name: "Stephanie", age: 70}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 12},
        //event.target.value will be the new name the user typed
        {name: event.target.value, age: 81},
        {name: "Stephanie", age: 70}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //This will alternate showPersons from true to false
    this.setState({showPersons: !doesShow});
  }

  render(){

    //We use this variable to do inline styling for the button
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    //persons is the variable that we will use to determine whether to show or unshow the Persons components
    let persons = null;

    //if this.state.showPersons is true then the Person components will show; if false then they will unshow
    if (this.state.showPersons){ 
      persons = (
        <div>
          {/* Use map function to perform conditional rendering using Javascript */}
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>This is an React App</h1>
        <p>This is really working!</p>
        {/* One way of switching names with the click but is not recommended */}
        <button 
        //Using constant variable "style" to give button inline styling
        //Button is used to hide and unhide Person components
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* Use persons variable to render Persons components */}
        {persons}
      </div>
    );
  }
}

export default App;
 