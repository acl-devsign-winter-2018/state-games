import React, { Component } from 'react';
import './Room.css';


const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};
 
export default class Room extends Component {


  render() {
    const { room, onMove } = this.props;
    const { title, description, doors } = room;

    return (
      <div>
        <h2>{room.title}</h2>
        <p>{room.description}</p>
        <h3>Doors</h3>
        <ul className="doors">
          {Object.keys(doors).map(key => (
            <li key={key}>
              <button onClick={() => onMove(doors[key])}>{directions[key]}</button>
            </li>))}
        </ul>
      </div> 
    );
  }
}