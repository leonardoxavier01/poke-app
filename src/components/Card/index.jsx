import React from 'react'
import {CardWrapper, PokemonContainer, PokemonImage, PokemonName, PokemonUl} from './styles'
import Button from '../Button'
import SvgCard from './Svg'
import * as Pokemons from '../../assets/images/pokemons'
import Icon from '../Icon'

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () =>
  Array(20)
    .fill()
    .map((_, index) =>
      fetch(getPokemonUrl(index + 1)).then((response) => response.json())
    )

const generateHTML = (pokemons) =>
  pokemons.reduce((accumulator, { name, id, types }) => {
    const elementTypes = types.map((typeInfo) => typeInfo.type.name)

    accumulator += `
    <li class= "card ${elementTypes[0]}">
    <img class= "card-image" alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png" />
    <h2 class="card-title">${id}. ${name} </h2>
    <p class="card-subtitle">${elementTypes.join(' | ')} </p>
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
  <><PokemonUl data-js="pokedex" className='pokedex'></PokemonUl>
    {/* <CardWrapper>
       <PokemonContainer>
        <SvgCard color={[color]} />
        <PokemonImage src={Pokemons[name]} />
        <PokemonName>{name}</PokemonName>
        <Button>See More</Button>
      </PokemonContainer>
    </CardWrapper> */}
  </>
)

export default Card
