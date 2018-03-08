import React, { Component } from 'react';
import './room.css';
import PropTypes from 'prop-types';

const passage = {
  d: 'Dojo',
  h: 'Hideout'
};

export default class Room extends Component {

  static propTypes = {
    onRest: PropTypes.func.isRequired,
  };
  
  doAction = () => {
    this.props.onAction(1);
  }; 
  
  render() {

    const { room, onMove} = this.props;
    const { title, description, actions, doors } = room;

    return (
      <div className="room">
        <h2>{title}</h2>
        <p>{description}</p>
        
        <h3>Actions</h3> 
        <ul>      
          {actions.map(item => (          
            <li  className="itemList" key={item.key}>
              <button onClick={this.doAction}>{item.key}</button>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>  

        <h3>Doors</h3>
        <ul>
          {Object.keys(doors).map(key => (
            <li key={key}>
              <button onClick={() => onMove(doors[key])}>{passage[key]}</button>
            </li>
          ))} 
        </ul>     
      </div>
    );
  }
}