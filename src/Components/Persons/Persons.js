import React, {Component} from 'react';
//We imported the person component so we can use it
import Person from './Person/Person';

//If it's one line you can skip the return statment and just add the parenthesis (we omitted the parenthesis later on because we didin't need them)
//The Persons component has persons, clicked and changed props; if you get confused, look at how the data is displayed in App.js
//Class based components require importing Component, "this" before props, and the render() function
class Persons extends Component{

  //First in update lifecylce
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  //Second in update lifecylce
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    //Wil send message from getSnapshotBeforeUpdate
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering ...');
    return this.props.persons.map((person, index) => {
        return <Person 
          //This will allow us to delete a Person component by clicking them; must use arrow function to use paramaters in function calls
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          //Use the key property so that React will know exactly which component it's dealing with
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}/>
      })
  }
  };

export default Persons;
