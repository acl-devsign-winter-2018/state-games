import React, { Component } from 'react';
import ChooseItems from './ChooseItems';
import './Player.css';

export default class Player extends Component {

  render() {
    const { player } = this.props;

    return (
      <div>
        <div>{player.name}</div>
        <ul>
        </ul>
      </div>
    )
    
  }
}