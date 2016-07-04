'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

import 'whatwg-fetch';

const API_URL = "http://kanbanapi.pro-react.com";
const HEADERS = {
  'Content-Type': 'application/json',
  'Authentication': 'hey'
}

class AppContainer extends Component{

  constructor(){
    super();
    this.state = {data: []};
  }

  render(){
    return (<App data={this.state.data} taskCallbacks={{toggle: this.toggleTask.bind(this), delete: this.deleteTask.bind(this), add: this.addTask.bind(this)}} />);
  }

  arrangeByLists(cards){
    const lists = [
      {title: 'Todo', key: 'todo', tasks: []},
      {title: 'In Progress', key: 'in-progress', tasks: []},
      {title: 'Done', key: 'done', tasks: []},
      ];
    return new Promise((resolve) => {
      cards.forEach((card) => {
        const list = lists.find((aList) => { return aList.key === card.status });
        list.tasks.push(card);
      });
      resolve(lists, cards);
    });
  }

  componentDidMount(){
    this.getTasks();
  }

  getTasks(){
    const url = `${API_URL}/cards`;
    return new Promise((resolve) => {
      fetch(url, {headers: HEADERS})
      .then((response) => { return response.json() })
      .then(this.arrangeByLists)
      .then((lists, cards) => {
        this.setState({data: lists, cards});
        resolve();
      });
    })
  }

  addTask(cardId, name, cbk){
    const url = `${API_URL}/cards/${cardId}/tasks`;
    fetch(url, {
      method:  'POST',
      headers: HEADERS,
      body: JSON.stringify({ name, done: false })
    })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      this.getTasks()
        .then(cbk);
    });
  }

  deleteTask(cardId, taskId){
    const url = `${API_URL}/cards/${cardId}/tasks/${taskId}`;
    fetch(url, { 
      method:  'DELETE',
      headers: HEADERS
    })
    .then((response) => {
      console.log(response);
      this.getTasks();
    });
  }

  toggleTask(cardId, taskId){

  }
}

render(<AppContainer />, document.getElementById('root'));