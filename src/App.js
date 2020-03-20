import React, { Fragment } from 'react';
import CardsList from './CardList';
import { robots } from './robots';

const App = () => {
  return (
    <Fragment>
      <h1>RoboFriends</h1>
      <CardsList robots={robots} />
    </Fragment>
  );
};

export default App;
