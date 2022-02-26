import React from 'react'
import { CardWrapper, PokemonContainer, PokemonImage, PokemonName,
} from './styles'
import Button from '../Button'
import SvgCard from './Svg'
import * as Pokemons from '../../assets/images/pokemons'
import Icon from '../Icon'

/* const Card = (props) => (
  <CardWrapper>
    <PokemonContainer>
      <SvgCard color={props.color} />
      <PokemonImage src={props.img} />
    </PokemonContainer>
    <h3>{props.name}</h3>
    <Button>See More</Button>
  </CardWrapper>
)
 */
const Card = ({ name, color }) => (
  <CardWrapper>
    <PokemonContainer>
      <SvgCard color={[color]} />
      <PokemonImage src={Pokemons[name]} />
      <PokemonName>{name}</PokemonName>
      <Button>See More</Button>
    </PokemonContainer>
  </CardWrapper>
)

export default Card
