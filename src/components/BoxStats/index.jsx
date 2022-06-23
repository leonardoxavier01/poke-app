import { StatsPokemon, Stat, StatName, BaseStat, Value } from './styles'
import { themePokemons } from '../../styles/theme'

const BoxStats = ({ pokemon }) => {
  return (
    <StatsPokemon>
      {pokemon.stats.map((poke, index) => {
        return (
          <Stat key={index}>
            <StatName>
              <span>{poke.stat.name}:</span>
            </StatName>
            <BaseStat>
              <Value
                value={poke.base_stat}
                color={themePokemons[pokemon.types[0].type.name]}
              >
                <span>{poke.base_stat}</span>
              </Value>
            </BaseStat>
          </Stat>
        )
      })}
    </StatsPokemon>
  )
}

export default BoxStats
