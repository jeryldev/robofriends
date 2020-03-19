import React, { Component } from 'react';
import 'tachyons';

const Card = ({ id, name, email }) => {
  // destructure
  // const { id, name, email } = props;
  return (
    <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robot image' />
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  );
};

export default Card;
