import React, { Component } from 'react';
import './player.css';

export default class Player extends Component {

  render() {
    const { player } = this.props;
    return (
      <div className="playerStats">
        <h2>{player.name}</h2>
        <ul>
          <li>Health: {player.health}</li>
          <li>Skill: {player.skill}</li>
          <li>Disguise: {player.disguise}</li>
        </ul>
      </div>
    );
  }
}