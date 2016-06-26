'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import update from 'react-addons-update';

class ContactsApp extends Component{

  constructor(){
    super(...arguments);
    this.state = { filterText: "" };
  }

  render(){
    return(
      <div>
        <SearchBar cbk={this.cbk.bind(this)} />
        <ContactList contacts={this.props.contacts}  filterText={this.state.filterText} />
      </div>
      );
  }

  cbk(filterText){
    this.setState({filterText});
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component{
  render(){
    return(
      <input ref='search' type='search' placeholder='search' onChange={ () => { this.props.cbk(this.refs.search.value) } } />
      );
  }
}

class ContactList extends Component{
  render(){
    const contacts = this.props.contacts.filter((contact) => { return contact.name.toLowerCase().indexOf(this.props.filterText) !== -1 });
    return(
      <div>
        {this.props.contacts.map((contact, index) => {
          return (<div key={index}><span>{contact.name}</span></div>);
        })}
      </div>
      )
  }
}

class ContactsAppContainer extends Component{
  constructor(){
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount(){
    fetch('/contacts.json')
      .then((response) => { return response.json() })
      .then((responseData) => {
        responseData = update(responseData, {0: {$apply: (a) => { return {name: `${a.name}z`} }}});
        this.setState({contacts: responseData});
      })
    .catch((error) => {
      console.log(`Error fetching data ${error.message}`);
    });
  }

  render(){
    return(<ContactsApp contacts={this.state.contacts} />);
  }
}

render(<ContactsAppContainer />, document.getElementById('root'))