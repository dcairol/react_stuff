'use strict';

import React, {PropTypes, Component} from 'react';

class ListItem extends Component{
  render(){
    return(
      <li>
        <input type='checkbox' defaultChecked={this.props.done} />{this.props.name}
        <a href='#' onClick={() => { this.props.taskCallbacks.delete(this.props.cardId, this.props.id) }} >Delete</a>
      </li>
      );
  }
}

const namePropType = (props, propName, componentName) => {
  const max = 80;
  const value = props[propName];
  if(!value) return new Error(`${propName} is required.`);
  if(value.length > max) return new Error(`${propName} must be less than ${max} characters long`);
}

ListItem.propTypes = {
  name: namePropType,
  taskCallbacks: PropTypes.object,
  cardId: PropTypes.number,
  id: PropTypes.number
}

export default ListItem;