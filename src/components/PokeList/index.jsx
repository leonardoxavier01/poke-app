import React from 'react'
import { PokeListContainer, PokeListWrapper } from './styles'
import Card from '../Card'

const PokeList = () => (
  <PokeListContainer>
    <PokeListWrapper>
      {render()}
    </PokeListWrapper>
  </PokeListContainer>
)

function render() {
  const elements = ['Venusaur', 'Froakie', 'Arcanine']

  const colors = ['#E5FADA', '#E0EBFF', '#F6E1D4']

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<Card key={items} name={value} color={colors[index]} />)
  }

  return items;
}

export default PokeList

{
  /* <Card img={Venusaur}
    name={'Venusaur'}
    color={'#E5FADA'}/> */
}
