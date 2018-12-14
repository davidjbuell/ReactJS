import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
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
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      border: '1px solid transparent',
      borderRadius: '20px',
      color: 'white',
      cursor: 'pointer',
      font: 'inherit',
      padding: '8px 15px 9px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    // conditional content
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
                          age={person.age}
                          key={person.id}
                          click={() => this.deletePersonhandler(index)}
                          changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">

          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>

          <button
            style={style}
            onClick={this.togglePersonsHandler}>
              Toggle Persons
          </button>

          {persons}

        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);