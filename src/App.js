import React from 'react';
import logo from './logo.svg';
import './App.css';
//You can omit the .js at the end
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>This is an React App</h1>
      <p>This is really working!</p>
      <Person name="Marcus" age="21"/>
      <Person name="Alex" age="13"/>
      <Person name="George" age="100"/>
    </div>
  );
}

export default App;
 