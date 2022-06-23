import PokeType from '../PokeType'
import { Types } from './styles'
import { themePokemons } from '../../styles/theme'

const BoxTypes = ({ pokemon }) => {
  return (
    <Types>
      {pokemon.types.map((poke, index) => {
        return (
          <PokeType
            key={index}
            color={themePokemons[poke.type.name]}
            type={poke.type.name}
          />
        )
      })}
    </Types>
  )
}

export default BoxTypes
