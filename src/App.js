import React, {Component} from 'react';
import Child from './components/Child'
import Child2 from './components/Child2'
import Child3 from './components/Child3'
import axios from 'axios'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = { 
      userInput: '',
      name: '',
      films: [],
      data: []
  }

  this.resetName = this.resetName.bind(this)
  }


   componentDidMount(){
    this.getFilms()
    this.getData()
   }

getData(){
  axios.get(`/api/getData`).then(response => {
    // console.log(response)
    this.setState({
      data: response.data
    })
  })
}

   getFilms(){
    //  console.log('in function')
     axios.get(`https://swapi.co/api/films/`).then( response => {
      //  console.log('in axios call')
       console.log(response.data.results)
       this.setState({
         films: response.data.results
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
    console.log(this.props)
    return ( 
      <div className='App' >
        <div className="parent">
        <h1 style={{color: 'red'}}>PARENT</h1>
        <input type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <button onClick={() => this.addName()} >add your name</button>
        <Child name={this.state.name} resetName={this.resetName}/>
        <Child2 films={this.state.films}/>
        <Child3 data={this.state.data} />
        </div>
      </div>
     );
  }
}
 
export default App;


