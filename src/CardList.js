import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponent = robots.map(user => {
    // console.log(user);
    // console.log(robots);
    return (
      <Card
        // id={robots[index].id}
        // name={robots[index].name}
        // email={robots[index].email}
        id={user.id}
        name={user.name}
        email={user.email}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export default CardList;
