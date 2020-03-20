import React, { Component } from 'react';
import CardsList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }
  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardsList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
