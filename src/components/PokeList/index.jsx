import React, { useState } from 'react'
import Card from '../Card'
import { PokeListWrapper } from './styles'

const PokeList = ({ pokemons, infoPokemon }) => (
  <PokeListWrapper>
    {pokemons.map((pokemon) => (
      <Card
        onClick={() => infoPokemon(pokemon)}
        key={pokemon.id}
        id={pokemon.id}
        image={pokemon.sprites.other.dream_world.front_default}
        name={pokemon.name}
        type={pokemon.types[0].type.name}
      />
    ))}
  </PokeListWrapper>
)

export default PokeList
