import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Player extends Component {

  render() {
    const { player } = this.props;
    return (
      <div>
        <h2>{player.name}</h2>
        <ul>
          <li>{player.health}</li>
          <li>{player.skill}</li>
          <li>{player.disguise}</li>
        </ul>
      </div>
    );
  }
}