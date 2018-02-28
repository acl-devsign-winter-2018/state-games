import React, { Component } from 'react';
import './Room.css';
import ChooseItems from '../items/ChooseItems';

const directions = {
  n: 'North',
  s: 'South',
  e: 'East',
  w: 'West'
};

export default class Room extends Component {
  render() {
    const { room, onMove, action, onItem } = this.props;
    const { title, description, doors, items } = room;

    return (
      <div className="room">
        <h2>{title}</h2>
        <p>{description}</p>
        { items.length > 0 && <h4>You Find:</h4> }
        <ChooseItems items={items} onItem={onItem}/>
        <h4>Food Gateway</h4>
        <ul className="gateway">
          {Object.keys(doors).map(key => (
            <li key={key}>
              <button onClick={() => onMove(doors[key])}>{directions[key]}</button>              
            </li>
          ))}
        </ul>
        {action && <p className="action">{action}</p>}
      </div>
    );
  }
}