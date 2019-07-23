import React from 'react';
//We imported the person component so we can use it
import Person from './Person/Person';

//If it's one line you can skip the return statment and just add the parenthesis (we omitted the parenthesis later on because we didin't need them)
//The Persons component has persons, clicked and changed props; if you get confused, look at how the data is displayed in App.js
const persons = (props) => props.persons.map((person, index) => {
        return <Person 
          //This will allow us to delete a Person component by clicking them; must use arrow function to use paramaters in function calls
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          //Use the key property so that React will know exactly which component it's dealing with
          key={person.id}
          changed={(event) => props.changed(event, person.id)}/>
      });

export default persons;
