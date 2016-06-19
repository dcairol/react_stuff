'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import TodoList from './TodoList';
let data = require('./data');

class App extends Component {
  render(){
    return(
      <div>
        {data.map((list) => {
            return (<TodoList items={list.tasks} label={list.label} key={list.key} />);
          })}
      </div>
      );
  }
}

render(<App />, document.getElementById('root'));
