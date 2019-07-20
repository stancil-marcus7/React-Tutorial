//use useState for hooks
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
//You can omit the .js at the end
import Person from './Person/Person'


//Made this a function
const App = props =>{
  //Remember state is a JavaScript object
  //PersonsState gives acess to objects and setPersons state allows us to set a new state
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: "Max", age: 12},
      {name: "Manu", age: 81},
      {name: "Stephanie", age: 500}
    ],
  });

  //Took otherState object out from above and this allows it to maintain the same state when the button changes
  //Took otherState object out of switchNameHandler aswell
  const [otherState, setOtherState] = useState('some other value')

  //Used this to see what happens to state when the button is pushed
  //otherState is not included in state when button is pushed
  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    //console.log('Was clicked');
    //We should not change the state lke this: this.state.persons[0].name = "Maximillian"; this will mutate the state
    //This sets the resets the state appropriately
    setPersonsState({
      persons: [
        {name: "Maximillian", age: 12},
        {name: "Manu", age: 81},
        {name: "Stephanie", age: 70}
      ],
      //Must include this so that otherState will change along with the persons object when button is pushed
    });
  };
 
    return (
      <div className="App">
        <h1>This is an React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  
}

export default App;


 