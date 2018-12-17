import React, { Component } from 'react'

export default class Pokemon extends Component {
  delete=()=>{
    this.props.onClick()
  }
  render() {
    return (
      <div className="card pokemon-card">
        <img className="card-img-top poke-image" src={`https://pokemon-fight.surge.sh/images/pokemons/${this.props.image}.png`}   alt="Failed to load"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Weight: {this.props.weight}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Type: {this.props.type}</h6>
          <button onClick={this.delete}><img src="/images/bin.png" alt="delete" width="40px"/></button>
        </div>
      </div>
    )
  }
}
