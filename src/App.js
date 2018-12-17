import React, { Component } from 'react';
import Navbar from './components/Navbar'
import ValidationComponent from './components/ValidationComponent'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: "",
    }
  }
  handleChange=(e)=>{
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <input className="poke-input" type="text" onChange={this.handleChange} value={this.state.input} placeholder="Type here"/>
        <p>The text is {this.state.input.length} characters long</p>
        <ValidationComponent input={this.state.input}/>
      </div>
    );
  }
}

export default App;
