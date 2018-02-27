import React, { Component } from 'react';
import ChooseItems from './item/ChooseItems';
import './room.css';

const directionsParsed = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default class Room extends Component {

  render() {

    const { room, onMove, onItem, action } = this.props;
    const { title, description, image, directions, items, pokemon } = room;

    return (
      <div className="room" style={{ backgroundImage: `url(${image})` }}>
        <h2>{title}</h2>
        <p>{description}</p>
        { items.length > 0 && <h3>You see:</h3> }
        <ChooseItems items={items} onItem={onItem}/>
        <h3>Directions</h3>
        <ul className="directions">
          {Object.keys(directions).map(key => (
            <li key={key}>
              <button onClick={() => onMove(directions[key])}>{directionsParsed[key]}</button>              
            </li>
          ))}
        </ul>
        {pokemon && <img src={pokemon[0].image} alt={pokemon[0].key}/>}
        {action && <p className="action">{action.description}</p>}
        {action.pokemon && <img className="action-pokemon" src={action.pokemon.image} alt={action.pokemon.key}/>}
      </div>
    );
  }

}