import Card from '../Card'
import { PokeListWrapper } from './styles'

const PokeList = ({ pokemons, loading }) => {
  return (
    <PokeListWrapper>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          image={
            pokemon.sprites.other.dream_world.front_default ||
            pokemon.sprites.other.home.front_default ||
            pokemon.sprites.front_default
          }
          name={pokemon.name}
          type={pokemon.types[0].type.name}
        />
      ))}
    </PokeListWrapper>
  )
}

export default PokeList
