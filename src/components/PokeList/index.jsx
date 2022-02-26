import React from 'react'
import { PokeListContainer, PokeListWrapper } from './styles'
import Card from '../Card'

const PokeList = () => (
  <PokeListContainer>
    <PokeListWrapper>
      <Card name="Venusaur" color="#E5FADA" />
      <Card name="Abra" color="#F9E3E9" />
      <Card name="Poliwhirl" color="#E0EBFF" />
      <Card name="Chandelure" color="#EFE4FF" />
      <Card name="Shelmet" color="#FBFFDB" />
      <Card name="Charizard" color="#F6E1D4" />
      <Card name="Vullaby" color="#ECE0DC" />
      <Card name="Arcanine" color="#F6E1D4" />
      <Card name="Froakie" color="#E0EBFF" />
    </PokeListWrapper>
  </PokeListContainer>
)

export default PokeList

{/* <Card img={Venusaur}
    name={'Venusaur'}
    color={'#E5FADA'}/> */}
