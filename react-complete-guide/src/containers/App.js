import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withclass from '../hoc/withClass';
import css from '../containers/App.module.css';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor (props) {
    super (props);
    console.log( '[App.js] Inside Constructor', props );
    this.state = {
      persons: [
        { id: '123', name: 'David', age: 39 },
        { id: '234', name: 'Amir', age: 39 },
        { id: '345', name: 'Tami', age: 39 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }

  // shouldComponentUpdate ( nextProps, nextState ) {
  //     console.log( '[UPDATE App.js] Inside shouldcomponentUpdate()', nextProps, nextState );
  //     return nextState.persons !== this.state.persons
  //         || nextState.showPersons !== this.state.showPersons;
  // }

  static getDerivedStateFromProps ( nextProps, prevState ) {
    console.log(
      "[UPDATE App.js] Inside getDerivedStateFromProps",
      nextProps,
      prevState
    );

    return prevState;
  }

  static getSnapshotBeforeUpdate () {
    console.log(
      "[UPDATE App.js] Inside getSnapshotBeforeUpdate"
    );
  }

  componentDidUpdate () {
      console.log( '[UPDATE App.js] Inside componentDidUpdate()' );
  }

  deletePersonhandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( { persons: persons } );
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons : !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState( {authenticated: true} );
  }

  render() {
    console.log('[App.js] Inside render()')

    // conditional content
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
                  persons={ this.state.persons }
                  clicked={ this.deletePersonhandler }
                  changed={ this.nameChangedHandler } />;
    }

    return (
      <>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={ this.props.title }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
          login={ this.loginHandler }
          clicked={ this.togglePersonsHandler }
        />
        <AuthContext.Provider value={this.state.authenticated}>{ persons }</AuthContext.Provider>
      </>
    );
  }
}

export default withclass(App, css.App);