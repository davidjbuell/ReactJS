import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent  {
    
    constructor ( props ) {
        super ( props );
        this.lastPersonRef = React.createRef();
        console.log ( '[Persons.js] Inside Constructor', props );
    }

    componentWillMount () {
        console.log ( '[Persons.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        this.lastPersonRef.current.focus();
        console.log ( '[Persons.js] Inside componentDidMount()' );
    }
    componentWillReceiveProps ( nextProps) {
        console.log ( '[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps );
    }

    // shouldComponentUpdate ( nextProps, nextState ) {
    //     console.log ( '[UPDATE Persons.js] Inside shouldcomponentUpdate()', nextProps, nextState );
    //     return nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate ( nextProps, nextState ) {
        console.log ( '[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log ( '[UPDATE Persons.js] Inside componentDidUpdate()' );
    }

    render () {
        console.log('[Persons.js] Inside render()');
        
        return this.props.persons.map( (person, index) => {
            return <Person name={ person.name }
                            age={ person.age }
                            key={ person.id }
                            ref={ this.lastPersonRef }
                            position={ index}
                            clicked={ () => this.props.clicked(index) }
                            changed={ (event) => this.props.changed(event, person.id) } />
        });
    }
}

  export default Persons;