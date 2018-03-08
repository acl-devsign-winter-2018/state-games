import React, { Component } from 'react';

export default class Items extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="items">
        {items.map(items => (
          <li key={item.key}>
            <button></button>
          </li>)
        })}
      </ul>
    )
  }
}