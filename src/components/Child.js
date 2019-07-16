import React, { Component } from 'react';

class Child extends Component {
  state = {  }
  render() { 
    return (
      <div style={{border: '1px solid blue'}} >
        <h1 style={{color: 'blue'}}>child</h1>
        <p>your name is: {this.props.name}</p>
        <button onClick={this.props.resetName}>reset name</button>
      </div>
     );
  }
}
 
export default Child;