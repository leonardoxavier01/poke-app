import React from 'react'

import { SideMenu } from '@components'
import { Container} from './styles'
import Icon from '../../components/Icon'
import PokeSection from '../../components/PokeSection/indes'

const Home = () => {
  return (
    <Container>
       <SideMenu>
        <Icon.Bug/>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga nisi atque nesciunt dolores reiciendis, quae, facere doloremque amet velit sed dolorem cumque inventore suscipit cum voluptas voluptatem rem dignissimos.</span>
       </SideMenu>
       <PokeSection/>
    </Container>
  )
}

export default Home