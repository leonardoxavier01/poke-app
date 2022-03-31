import Button from './Button';
import React from 'react'
import { CardWrapper, PokemonContainer, PokemonImage, PokemonName, PokeType } from './Card/styles';

const Testpokemon = ({ id, image, name, type }) => {
    return (
        <CardWrapper >
            <PokemonContainer>
                <PokeType><small>#0{id}</small></PokeType>
                <PokemonImage src={image} alt={name} />
                <PokemonName>{name}</PokemonName>
                <PokeType><small>{type}</small><img src={`https://codeboost.com.br/projetos/pokeapi/img/${type}.svg`} alt="" /></PokeType>
                <Button>See More</Button>
            </PokemonContainer>
        </CardWrapper>
    )
}

export default Testpokemon