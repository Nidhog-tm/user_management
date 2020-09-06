import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    const {
      test_id,
      name
    } = this.props;

    return (
      <div className="ListItem">
        <div className="ListItem-testID">{test_id}</div>
        <div className="ListItem-name">{name}</div>
      </div>
    );
  }
}

export default ListItem;