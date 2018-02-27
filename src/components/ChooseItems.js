import React, { Component } from 'react';



export default class ChooseItems extends Component {
  render() {

    const { items, onItem } = this.props;
    if(!items || items.length === 0) return null;
    
    return (
  
      <ul>
        {items.map(item => (
          <li key={item.key}>
            <button onClick={() => onItem(item)}>{item.description}</button>
          </li>
        ))}
      </ul>
    );
  }

}