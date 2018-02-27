import React, { Component } from 'react';


const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};
 
export default class Room extends Component {


  render() {
    const { room } = this.props;
    const { title, description, doors } = room;

    return (
      <div>
        <h2>{room.title}</h2>
        <p>{room.description}</p>
        <h3>Doors</h3>
        <ul>
          {Object.keys(doors).map(key => (
            <li key={key}>
              <button>{directions[key]}</button>
            </li>))}
        </ul>
      </div> 
    );
  }
}