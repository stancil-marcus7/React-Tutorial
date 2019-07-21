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
    otherState: 'some other value'
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

  nameChangedHnadler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 12},
        //event.target.value will be the new name the user typed
        {name: event.target.value, age: 81},
        {name: "Stephanie", age: 70}
      ]
    })
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

    return (
      <div className="App">
        <h1>This is an React App</h1>
        <p>This is really working!</p>
        {/* One way of switching names with the click but is not recommended */}
        <button 
        //Using constant variable "style" to give button inline styling
        style={style}
        onClick={() => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          // The "click" property will allow the Person component to change the names and ages with switchNameHandler
          // The recommended way to switch name with click
          click={this.switchNameHandler.bind(this, 'Max!')}
          //Allows user to change the name of Manu (the second person component)
          changed={this.nameChangedHnadler}>My hobbies</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
 