import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import ListItem from './ListItem'

class Card extends Component{

  constructor(){
    super(...arguments);
    this.state = {
      visible: true
    };
  }

  render(){
    return (<div className="card">
      <span>{this.props.title}</span>
      <div className={this.props.tasks.length ? "visible" : 'hidden'}>
        <a href="#" onClick={() => {this.toggle()}}>{this.state.visible ? "Hide" : "Show"}</a>
        <div className={this.state.visible ? "visible" : "hidden"}>
          {this.props.tasks.map((item,index) => {
          return (<ListItem done={item.done} name={item.name} key={index} />)})}
        </div>
      </div>
      <div className={!this.state.newTask ? "hidden" : ""}>
        <input ref="newTask" type="text" placeholder="Something to do" /><input type="button" value="Submit" onClick={() => {
        this.submit() }} /><input type="button" value="Cancel" onClick={() => {this.clearAndHide()}} />
      </div>
      <div><a href="#" onClick={() => {this.addTask()}}>Add task</a></div>
    </div>)
  }

  submit(){
    this.doAddTask();
    this.clearAndHide();
  }

  clearAndHide(){
    this.clearField();
    this.setState({newTask: false, visible: this.state.visible});
  }

  doAddTask(){
    this.props.tasks.push({completed: false, name: this.refs.newTask.value});
  }

  clearField(){
    this.refs.newTask.value = "";
  }

  addTask(){
    this.setState({
      newTask: true,
      visible: this.state.visible
    });
  }

  toggle(){
    this.setState({visible: !this.state.visible});
  }
}

Card.defaultProps = {
  tasks: []
}

Card.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
}

export default Card;