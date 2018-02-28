import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Room extends Component {


  
  render() {
    const passage = {
      d: 'Dojo'
    };
    const { room } = this.props;
    console.log('room from props: ', room);

    const { title, description, items, doors } = room;
    console.log(doors);

    

    return (
      <div className="room">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Doors</h3>
        <ul>
          {Object.keys(doors).map(key => (
            <li key={key}>{passage[key]}
            </li>
          ))} 
        </ul>
      
      </div>

    );
  }
}