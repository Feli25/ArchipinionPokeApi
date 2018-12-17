import React, { Component } from 'react'
import api from '../api'
import Pokemon from './Pokemon'

export default class ValidationComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      value: "",
      loading:false,
      filteredPoke: ""
    }
  }
  remove=(i)=>{
    var newArray = this.state.filteredPoke
    newArray.splice(i, 1)
    this.setState({
      filteredPoke: newArray
    })
  }
  handleSubmit=()=>{
    let length = this.state.value.length
    this.setState({loading:true})
      var newPoke = []
      for(let i=0; i<length; i++){
        var randomPoke = Math.floor(Math.random()*151)
        api.getPokemonDetail(randomPoke)
          .then(pokemon=>{newPoke.push(pokemon)})
      };
      setTimeout(()=>{
        this.setState({
        filteredPoke: newPoke,
        loading: false
      }); }, 
      3000)
  }

  render() {
    return (
      <div>
          {this.state.value.length <5 ? <span className="text-tooshort">Text too short</span>:<button onClick={this.handleSubmit}>Submit</button>}
          {this.state.loading && <p>Loading....</p>}
          <div className="poke-container">
          {this.state.filteredPoke !== "" && this.state.filteredPoke.map((poke,i)=>
            <Pokemon key={i} name={poke.name} image={poke.id} weight={poke.weight} onClick={()=>this.remove(i)} type={poke.types[0].type.name}/>
          )}
          </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.input, filteredPoke: ""})
  }

}
