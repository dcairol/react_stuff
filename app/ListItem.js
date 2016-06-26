'use strict';

import React, {PropTypes, Component} from 'react';

class ListItem extends Component{
  render(){
    return(
      <li>
        <input type='checkbox' defaultChecked={this.props.done} />{this.props.name}
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
  name: namePropType
}

export default ListItem;