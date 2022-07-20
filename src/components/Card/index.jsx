import Button from '../Button'
import * as Type from '../../assets/images/typesPokemons/'
import SvgCard from '../SvgCard'
import { Link } from 'react-router-dom'
import {
  CardWrapper,
  PokemonContainer,
  PokemonImage,
  PokemonName,
  PokeType,
} from './styles'

const Card = (props) => {
  return (
    <Link
      style={{ color: 'inherit', textDecoration: 'inherit' }}
      to={`/pokemon/${props.id}`}
    >
      <CardWrapper>
        <PokemonContainer>
          <small className="id">#0{props.id}</small>
          <SvgCard color={props.type} />
          <PokemonImage
            src={props.image}
            alt={`imagem pokemon ${props.name}`}
          />
          <PokemonName>{props.name}</PokemonName>
          <PokeType>
            <small>{props.type}</small>
            <img src={Type[props.type]} alt="Type Icon" />
          </PokeType>
          <Button color={'#c145ae'}>See More</Button>
        </PokemonContainer>
      </CardWrapper>
    </Link>
  )
}

export default Card
