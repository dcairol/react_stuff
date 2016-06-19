'use strict';

import React, {Component} from 'react';

class ListItem extends Component{
  render(){
    return(
      <li>
        <input type='checkbox' defaultChecked={this.props.done} />{this.props.title}
      </li>
      );
  }
}

export default ListItem;