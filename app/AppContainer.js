'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

import 'whatwg-fetch';

const URL = "http://kanbanapi.pro-react.com/cards";
const HEADERS = {
  'Content-Type': 'application/json',
  'Authentication': 'time_to_take_the_pressure_off'
}

class AppContainer extends Component{

  constructor(){
    super();
    this.state = {data: []};
  }

  render(){
    return (<App data={this.state.data} />);
  }

  arrangeByLists(responseData){
    const lists = [
      {title: 'Todo', key: 'todo', tasks: []},
      {title: 'In Progress', key: 'in-progress', tasks: []},
      {title: 'Done', key: 'done', tasks: []},
      ];
    return new Promise((resolve) => {
      responseData.forEach((card) => {
        const list = lists.find((aList) => { return aList.key === card.status });
        list.tasks.push(card);
      });
      resolve(lists);
    });
  }

  componentDidMount(){
    fetch(URL, {headers: HEADERS})
      .then((response) => { return response.json() })
      .then(this.arrangeByLists)
      .then((responseData) => {
        this.setState({data: responseData});
      });
  }
}

render(<AppContainer />, document.getElementById('root'));