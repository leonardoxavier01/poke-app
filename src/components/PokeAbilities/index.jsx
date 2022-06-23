import { AbilitiesStyled, AbilityStyled } from './styles'

const Ability = ({ ability }) => {
  return (
    <AbilityStyled>
      <h3>{ability}</h3>
    </AbilityStyled>
  )
}

const PokeAbilities = ({ pokemon }) => {
  return (
    <AbilitiesStyled>
      {pokemon.abilities.map((poke, index) => {
        return <Ability key={index} ability={poke.ability.name} />
      })}
    </AbilitiesStyled>
  )
}

export default PokeAbilities
