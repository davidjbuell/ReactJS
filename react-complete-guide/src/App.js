import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: 'David', age: 39 },
      { name: 'Amir', age: 39 },
      { name: 'Tami', age: 39 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 39 },
        { name: 'Amir', age: 39 },
        { name: 'Tami', age: 29 }
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'David', age: 39 },
        { name: event.target.value, age: 39 },
        { name: 'Tami', age: 29 }
      ]
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      cursor: 'pointer',
      font: 'inherit',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={() => this.toglePersonHandler()}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sally')}
          changed={this.nameChangedHandler}>My Hobbies: Coding</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
