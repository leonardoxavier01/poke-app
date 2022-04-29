import React from 'react'
import Button from '../Button';
import * as Type from '../../assets/images/typesPokemons/'
import SvgCard from '../SvgCard';
import { CardWrapper, PokemonContainer, PokemonImage, PokemonName, PokeType } from './styles';

const Card = ({ id, image, name, type }) => {
    return (
        <CardWrapper >
            <PokemonContainer>
                <small className='id'>#0{id}</small>
                <SvgCard color={type}/>
                <PokemonImage src={image} alt={name} />
                <PokemonName>{name}</PokemonName>
                <PokeType><small>{type}</small><img src={Type[type]} alt="Type Icon" /></PokeType>
                <Button color={'#44cca6'}>See More</Button>
            </PokemonContainer>
        </CardWrapper>
    )
}

export default Card













