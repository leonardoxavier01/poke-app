import React from 'react'

import { SideMenu, PokeList } from '@components'
import { Container, ListWrapper } from './styles'
import Icon from '../../components/Icon'
import PokeSection from '../../components/PokeSection/indes'

const Home = () => {
  return (
    <Container>
       <SideMenu>
        <Icon.Bug/>
        <span>test</span>
       </SideMenu>
       <PokeSection/>
    </Container>
  )
}

export default Home