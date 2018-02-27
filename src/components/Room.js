import React, { Component } from 'react';
import ChooseItems from './ChooseItems';
import './Room.css';

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
}

export default class Room extends Component {
  render() {
    const { room, onMove, onItem, action } = this.props;
    const { title, description, image, doors, items } = room;

    return (
      <div style={{ backgroundImage: `url(${image})`}}>
        <h2>{title}</h2>
        <p>{description}</p>
        {items.length > 0 && (
          <div>
            <ul>
              {items.map(item => (
                <li key={item.key}>
                  <button onClick={() => onItem(item)}>{item.description}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <h3>Doors</h3>
        <ul className="doors">
          {Object.keys(doors).map(key => {
            <li key={key}>
              <button onClick={() => onMove(doors[key])}>{directions[key]}</button>
            </li>
          })}
        </ul>
        {action && <p className="action">{action}</p>}
      </div>
    )
  }
}