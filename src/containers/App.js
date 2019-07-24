import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass'
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';



class App extends Component {

  //This is called first
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    //You could set state here with this.state
  }
  //Remember state is a JavaScript object
  state = {
    persons: [
      {id: '12dsfs', name: "Max", age: 12},
      {id: 'sdfsdf', name: "Manu", age: 81},
      {id: 'dsfsdf', name: "Stephanie", age: 500}
    ],
    otherState: 'some other value',
    //This property will be used to show the Persons or not
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  }

  //This is called second
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps')
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  //This is called fourth
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    //By using the anonymous function with prevState and props we can correctly update a state which relies on the previous state
    this.setState((prevState, props) => {
     return {
       persons: persons, 
       changeCounter: prevState.changeCounter +1
      }
    });
  };

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

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  //This is called third
  render(){
    console.log('[App.js render');

    //persons is the variable that we will use to determine whether to show or unshow the Persons components
    let persons = null;

    // Because all the deleting and changing is done in the Persons component this is all we need to display the Persons with the correct functionality
    if (this.state.showPersons){ 
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
    }

    return (
      //Must wrap app in StyleRoot for Radium media queries to work
        <Aux>
          <button onClick={() => {
            this.setState({showCockpit: false});
          }}
          >Remove Cockpit
          </button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}>
          {this.state.showCockpit ? (
              <Cockpit
              //Used the property from the App component on index.js to get title for app in Cockpit component
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.lengthX}
              clicked={this.togglePersonsHandler}/>
          ): null}
          {/* Use persons variable to render Persons components */}
          {persons}
          </AuthContext.Provider>
          </Aux>
    );
  }
}

export default withClass(App, classes.App);
 