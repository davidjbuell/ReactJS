import React, { Component } from 'react';
import propTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import { AuthContext } from '../../../containers/App';
import css from './Person.module.css';

class Person extends Component {

    constructor ( props ) {
      super ( props );
      this.inputElement = React.createRef();
      console.log ( '[Person.js] Inside Constructor', props );
    }
  
    componentWillMount () {
      console.log ( '[Person.js] Inside componentWillMount()' );
    }
  
    componentDidMount () {
      console.log ( '[Person.js] Inside componentDidMount()' );
    }

    focus () {
        this.inputElement.current.focus();
    }

    render () {
        console.log ( '[Person.js] Inside render()' );

        return ( 
            <>
                <AuthContext.Consumer>
                    { auth => auth ? <p>I'm authenticated</p> : null }
                </AuthContext.Consumer>
                <p onClick={ this.props.clicked }>I'm { this.props.name } and I am { this.props.age } years old!</p>
                <p>{ this.props.children }</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={ this.props.changed }
                    value={ this.props.name } />
            </>
        )
    }
}

Person.propTypes = {
    clicked: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
}

export default withClass(Person, css.Person);