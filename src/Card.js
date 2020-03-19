import React, { Component } from 'react';
import 'tachyons';

const Card = props => {
  return (
    <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img src='https://robohash.org/test?size=200x200' alt='robot image' />
      <div>
        <h2>Jeryl</h2>
      </div>
      <div>
        <h2>test@test.com</h2>
      </div>
    </div>
  );
};

export default Card;
