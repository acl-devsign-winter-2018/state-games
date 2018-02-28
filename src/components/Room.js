import React, { Component } from 'react';
import './room.css';
import SelectItem from './SelectItem.js';

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default class Room extends Component {

  handleBackgroundImage(props){
    const imageUrl = require(`../img/${props.image}.jpg`);
    return <div style={{ backgroundImage: `url(${imageUrl}` }}/>;
  }
 
  render(){
    const { room, onMove, onItem, action } = this.props;
    const { title, description, image, doors, items } = room;
    const imageUrl = require(`../img/${image}`);

    return (
      <section className="room">
        <h2>{title}</h2>
        <div className="imgDiv" style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div>
          {items.length > 0 && <h3>You find in the room:</h3>}
          <SelectItem items={items} onItem={onItem}/>
          <p>{description}</p>
          <h3>Doors</h3>
          <ul className="doors">
            {Object.keys(doors).map(key => (
              <li key={key}>
                <button onClick={() => onMove(doors[key])}>{directions[key]}</button>
              </li>
            ))}
          </ul>
          {action && <p className="action">{action}</p>}
        </div>
      </section>
    );
  }
}