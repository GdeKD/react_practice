import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name: 'Max', age: 34},
      { name: 'Alce', age: 21},
      { name: 'Jimmy', age: 63}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> This is React App </h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobby is Swimming </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is React App'));
  }
}

export default App;
