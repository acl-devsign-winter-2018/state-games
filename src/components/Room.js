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
    const { room } = this.props;
    const { title, description, doors } = room;

    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Doors</h3>
        <ul className="doors">
          {Object.keys(doors).map(key => (
            < li key={key}>
              <button>{directions[key]}</button>
            </li>
          ))}
        </ul>
      </div >
    );
  }
}