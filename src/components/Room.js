import React, { Component } from 'react';

export default class Room extends Component {
  render() {
    const { room } = this.props;
    const { title, description } = room;

    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}