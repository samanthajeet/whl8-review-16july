import React, { Component } from 'react';

class Child2 extends Component {
  state = {  }
  render() { 
    // console.log(this.props)
    let mappedFilms = this.props.films.map( film => {
      return(
        <div key={film.episode_id} >
          <h3>{film.title}</h3>
        </div>
      )
    })
    return ( 
      <div style={{border: '1px solid green'}}>
        <h1 style={{color: 'green'}}>child2</h1>
        {mappedFilms}
      </div>
     );
  }
}
 
export default Child2;