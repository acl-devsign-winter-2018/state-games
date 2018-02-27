import React, { Component } from 'react';
import './Room.css';

const directions = {
  n: 'North',
  s: 'South',
  e: 'East',
  w: 'West'
};

export default class Room extends Component {
  render() {
    const { room, onMove, action } = this.props;
    const { title, description, doors } = room;

    return (
      <div >
        <h2>{title}</h2>
        <p>{description}</p>

        <h4>Food Gateway</h4>
        <ul>
          {Object.keys(doors).map(key => (
            <li key={key}>
              <button onClick={() => onMove(doors[key])}>{directions[key]}</button>              
            </li>
          ))}
        </ul>
        {action && <p>{action}</p>}
      </div>
    );
  }
}