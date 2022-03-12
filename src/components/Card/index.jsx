import React from 'react'
import { PokemonUl } from './styles'

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () =>
  Array(150)
    .fill()
    .map((_, index) =>
      fetch(getPokemonUrl(index + 1)).then((response) => response.json())
    )

const generateHTML = (pokemons) =>
  pokemons.reduce((accumulator, { name, id, types }) => {
    const elementTypes = types.map((typeInfo) => typeInfo.type.name)

    accumulator += `
    <li className= 'card ${elementTypes[0]}'>
    <img className= 'cardImage' alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png" />
    <h2 className='cardTitle'>${id}. ${name} </h2>
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

export default Card
