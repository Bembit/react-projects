import React, {Component} from 'react';
import './Pokecard.css';

    // const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    // let imgSrc = `${POKE_API}${this.props.id}.png`;
    const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component {
    render() {

        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}></img>
                <div>Type: {this.props.type}</div>
                <div>Experience: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;