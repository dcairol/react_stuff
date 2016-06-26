'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import CardList from './CardList';

class App extends Component {
  render(){
    return(
      <div>
        {this.props.data.map((list) => {
            return (<CardList cards={list.tasks} title={list.title} key={list.key} />);
          })}
      </div>
      );
  }
}

export default App;