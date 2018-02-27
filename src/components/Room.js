import React, { Component } from 'react';
import './Room.css';

const directions = {
  u: 'Up',
  d: 'Down'
};

export default class Room extends Component {
  render() {
    const { room, onStairs } = this.props;
    const { title, description, stairs } = room;

    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Stairs</h3>
        <ul className="stairs">
          {Object.keys(stairs).map(key => (
            <li key={key}>
              <button onClick={() => onStairs(stairs[key])}>{directions[key]}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}