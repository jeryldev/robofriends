import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardsArray = robots.map(user => {
    // console.log(user);
    // console.log(robots);
    return (
      <Card
        // id={robots[index].id}
        // name={robots[index].name}
        // email={robots[index].email}
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
      />
    );
  });

  return <div>{cardsArray}</div>;
};

export default CardList;
