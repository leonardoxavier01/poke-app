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

const Card = ({ id, image, name, type, onClick }) => {
  return (
    <Link
      style={{ color: 'inherit', textDecoration: 'inherit' }}
      to={`/pokemon/${id}`}
    >
      <CardWrapper onClick={onClick}>
        <PokemonContainer>
          <small className="id">#0{id}</small>
          <SvgCard color={type} />
          <PokemonImage src={image} alt={name} />
          <PokemonName>{name}</PokemonName>
          <PokeType>
            <small>{type}</small>
            <img src={Type[type]} alt="Type Icon" />
          </PokeType>
          <Button color={'#c145ae'}>See More</Button>
        </PokemonContainer>
      </CardWrapper>
    </Link>
  )
}

export default Card
