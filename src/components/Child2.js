import React, { Component } from 'react';

class Child2 extends Component {
  state = {  }
  render() { 
    let mappedFilms = this.props.films.map( film => {
      return(
        <h3>{film.title}</h3>
      )
    })
    return ( 
      <div style={{border: '1px solid green'}}>
        <h1 style={{color: 'green'}}>child2</h1>
        <p>{this.props.films}</p>
      </div>
     );
  }
}
 
export default Child2;