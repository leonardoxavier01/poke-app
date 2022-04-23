import React from 'react'

import { SideMenu } from '@components'
import { Container} from './styles'
import Icon from '../../components/Icon'
import PokeSection from '../../components/PokeSection/index'
import SectionPokedex from '../../components/SectionPokedex/index'

const Home = () => {
  return (
    <>
      <SectionPokedex/>
      <Container>
         <PokeSection/>
      </Container>
    </>
  )
}

export default Home