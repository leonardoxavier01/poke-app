

/* import { PokemonUl } from './styles'

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

export function filterPokemons(filter) {
  console.log(filter)
  console.log(pokemons)
  let resultPokemon = pokemons.filter(p => p.name.includes(filter))
  let htmlResults = generateHTML(resultPokemon)
  insertPokemonsIntoPage(htmlResults)
}

var pokemons = new Array(12);

const generatePokemonPromises = () =>
  pokemons.fill()
    .map((_, index) =>
      fetch(getPokemonUrl(index + 1)).then((response) => response.json())
    )

const generateHTML = (pokemons) =>
  pokemons.reduce((accumulator, { name, id, types }) => {
    const elementTypes = types.map((typeInfo) => typeInfo.type.name)

    accumulator += `
    <li className= 'card ${elementTypes[0]}'>
    <img className= 'cardImage' alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png" />
    <h2 className='cardTitle'> ${name} </h2>
    <p className='cardSubtitle'>${elementTypes.join(' | ')} </p>
    <Button>See More</Button>
    </li>
    `
    return accumulator
  }, '')

const insertPokemonsIntoPage = (pokemons) => {
  const ul = document.querySelector('[data-js= "pokedex"]')
  ul.innerHTML = pokemons
}

const pokemonPromises = generatePokemonPromises()

Promise.all(pokemonPromises).then(generateHTML).then(insertPokemonsIntoPage)

const Card = () => (
  <>
    <PokemonUl data-js="pokedex" className="pokedex"></PokemonUl>
  </>
)

export default Card  */

import { render } from '@testing-library/react'
import React, { Component } from 'react'
import api from '../api'



class Card extends Component {

  state = {
    pokemons: [],
  }

  async componentDidMount() {
    const response = await api.get('/pokemon?limit=10&offset=0');

    /*  console.log(response.data.results)  */

    this.setState({ pokemons: response.data.results });


  }

  render() {

    const { pokemons } = this.state;

    console.log(pokemons); 


    return (
      <div>
        <h1>Teste pokemon</h1>
        <ul>
          {pokemons.map(pokemon => (
            <li>
              <h2>Titulo:{pokemon.name} </h2>
            </li>
          ))}
        </ul>
      </div>
    );
  };
};

export default Card













