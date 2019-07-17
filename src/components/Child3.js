import React, { Component } from 'react';

class Child3 extends Component {
  render() { 
    console.log('child3 props',this.props)
    let mappedData = this.props.data.map( element => {
      return (
        <div key={element.id} >
          <p>{element.first_name} {element.last_name}</p>
        </div>
      )
    })
    return (
      <div style={{border: '1px solid purple'}}>
        <h1 style={{color: 'purple'}} >child3</h1>
        {mappedData}
      </div>
     );
  }
}
 
export default Child3;