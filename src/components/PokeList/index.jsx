import React from 'react'
import Card from '../Card'
import { PokeListWrapper } from './styles'
import { Link } from 'react-router-dom'
import Loader from '../Loader'

const PokeList = ({ pokemons, loading }) => {
  return (
    <PokeListWrapper>
      {pokemons.map((pokemon) => (
        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          key={pokemon.id}
          to={`/pokemon/${pokemon.id}`}
        >
          <Card
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
          />
        </Link>
      ))}
    </PokeListWrapper>
  )
}

export default PokeList
