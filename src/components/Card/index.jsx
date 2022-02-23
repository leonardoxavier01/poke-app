import React from "react";
import { CardWrapper, PokemonContainer, PokemonImage, } from "./styles";
import Button from '../Button'
import SvgCard from "./Svg";

import venusaur from '@assets/images/pokemon/venusaur.png'

const Card = (props) => (
    <CardWrapper>
        <PokemonContainer>
            <SvgCard color={props.color} />
            <PokemonImage src={props.img} />
        </PokemonContainer>
        <h3>{props.name}</h3>
        <Button>See More</Button>
    </CardWrapper>
)




export default Card