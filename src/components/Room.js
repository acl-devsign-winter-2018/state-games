import React, { Component } from 'react';
import ChooseItems from './ChooseItems';
import './Room.css';

const directions = {
  n: 'North',
  s: 'South',
  e: 'East',
  w: 'West'
};

export default class Room extends Component {
  render() {
    const { room, onMove, onItem, action } = this.props;
    const { title, description, image, doors, items } = room;

    return (
      <div>
        <h2>{title}</h2>
        <div className="room" style={{ backgroundImage: `url(${image})` }}>
          {items.length > 0 && <h3>In this room:</h3>}
          <ChooseItems items={items} onItem={onItem}/>
        </div>
        <div>
          <p>{description}</p>
          <h3>Doors</h3>
          <ul>
            {Object.keys(doors).map(key => {
              return (
                <li key={key}>
                  <button className="doors" onClick={() => onMove(doors[key])}>{directions[key]}</button>
                </li>
              );
            })}
          </ul>
          {action && <p className="action">{action}</p>}
        </div>
      </div>
    );
  }
}