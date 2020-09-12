import React from 'react';
import './ListItem.css';

function ListItem(props) {
  return (
      <div className="ListItem">
        <div className="ListItem-testID">{props.test_id}</div>
        <div className="ListItem-name">{props.name}</div>
      </div>
  );
}

export default ListItem;