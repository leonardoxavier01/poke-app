import React from "react";
import { PokeListContainer, PokeListWrapper } from "./styles";
import Card from '../Card'
import Venusaur from '../../assets/images/pokemon/venusaur.png'
import SvgCard from "../Card/Svg";


const PokeList = () => (
    <PokeListContainer>
        <PokeListWrapper>
            <Card img={Venusaur}
            name={'Venusaur'}
            color={'#E5FADA'}/>
        </PokeListWrapper>
    </PokeListContainer>
)

export default PokeList