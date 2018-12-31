import React from 'react';
import css from './Cockpit.module.css';

const cockpit = (props) => {

    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = css.red;
    }
    if (props.persons.length <= 2) {
      classes.push( css.red );
    }
    if (props.persons.length <= 1) {
      classes.push( css.red );
    }

    return (
        <div className={ css.Cockpit }>
            <h1>{ props.appTitle }</h1>
            <p className={ classes.join(' ') }>This is really working!</p>
            <button
                className={ btnClass }
                onClick={ props.clicked }>
                    Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;