import React, {Component} from 'react';
import Child from './components/Child'
import Child2 from './components/Child2'
import Child3 from './components/Child3'
import axios from 'axios'
import './App.css';


class App extends Component {
  state = { 
    userInput: '',
    name: '',
    films: []
   }

   componentDidMount(){
    this.getFilms()
   }

   getFilms(){
     axios.get(`https://swapi.co/api/films/`).then( response => {
       console.log(response.data)
       this.setState({
         films: response
       })
     })
   }



   handleChange(e){
     this.setState({
       userInput: e
     })
   }

   addName(){
     this.setState({
       name: this.state.userInput
     })
   }

   resetName(){
     this.setState({
       name: ''
     })
   }

  render() { 
    return ( 
      <div className='App' >
        <div className="parent">
        <h1 style={{color: 'red'}}>PARENT</h1>
        <input type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <button>add your name</button>
        <Child />
        <Child2 films={this.state.frilms}/>
        <Child3 />
        </div>
      </div>
     );
  }
}
 
export default App;
