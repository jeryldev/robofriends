import React, { Component } from 'react';
import './HelloStateless.css';

const HelloStateless = props => {
  return (
    <div className='f1 tc'>
      <h1>Hello World!</h1>
      <h3>Welcome to React, {props.name}!</h3>
      <p>{props.greeting}!</p>
    </div>
  );
};

// class Hello extends Component {
//   render() {
//     return (
//       <div className='f1 tc'>
//         <h1>Hello World!</h1>
//         <h3>Welcome to React, {this.props.name}!</h3>
//         <h3>{this.props.greeting}</h3>
//       </div>
//     );
//   }
// }

export default HelloStateless;
