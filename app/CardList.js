import React, {Component} from 'react';
import {render} from 'react-dom';
import ListItem from './ListItem';
import Card from './Card';

class CardList extends Component{
  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
      {this.props.cards.map((card, index) => {
        return(<Card key={index} title={card.title} tasks={card.tasks} />);
      })}
      </div>
    );
  }
};

export default CardList;