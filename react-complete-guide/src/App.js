import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { id: '123', name: 'David', age: 39 },
      { id: '234', name: 'Amir', age: 39 },
      { id: '345', name: 'Tami', age: 39 }
    ]
  }

  deletePersonhandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id: '123', name: 'David', age: 39 },
        { id: '234', name: event.target.value, age: 39 },
        { id: '345', name: 'Tami', age: 29 }
      ],
      showPersons: false  
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      cursor: 'pointer',
      font: 'inherit',
      padding: '8px'
    };

    // conditional content
    let persons = this.state.showPersons ?
      <div>
        {this.state.persons.map((person, index) => {
          return <Person name={person.name}
                         age={person.age}
                         key={person.id}
                         click={() => this.deletePersonhandler(index)}
                         changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div> : null;

    return (
      <div className="App">

        <h1>His, I'm a React App</h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>

        {persons}

      </div>
    );
  }
}

export default App;
