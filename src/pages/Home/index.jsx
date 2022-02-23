import React from 'react'

import { SideMenu, PokeList } from '@components'
import { Container, ListWrapper } from './styles'

const Home = () => {
  return (
    <Container>
      <SideMenu>
        <span>test</span>
      </SideMenu>
      <PokeList/>
      <ListWrapper />
    </Container>
  )
}

export default Home