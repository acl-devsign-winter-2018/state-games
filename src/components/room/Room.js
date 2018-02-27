import React, { Component } from 'react';
import ChooseItems from './item/ChooseItems';
import './room.css';

const directionsParsed = {
  e: <span className="fa fa-arrow-right fa-3x"></span>,
  w: <span className="fa fa-arrow-left fa-3x"></span>,
  n: <span className="fa fa-arrow-up fa-3x"></span>,
  s: <span className="fa fa-arrow-down fa-3x"></span>
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
              <button id={key} onClick={() => onMove(directions[key])}>{directionsParsed[key]}</button>              
            </li>
          ))}
        </ul>
        {pokemon && <img className="action-pokemon" src={pokemon[0].image} alt={pokemon[0].key}/>}
        {action && <p className="action">{action.description}</p>}
        {action.pokemon && <img className="action-pokemon" src={action.pokemon.image} alt={action.pokemon.key}/>}
      </div>
    );
  }

}