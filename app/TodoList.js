import React, {Component} from 'react';
import {render} from 'react-dom';
import ListItem from './ListItem';

class TodoList extends Component{
  render(){
    return(
      <div>
      <h1>{this.props.label}</h1>
        {this.props.items.map((item,index) => {
          return(
            <ListItem done={item.done} title={item.title} key={index}/>
            )})}
      </div>
    );
  }
};

export default TodoList;