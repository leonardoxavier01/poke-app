import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import { Container, MainContent } from './styles'

const headerItems = ['Home', 'Pokedex', 'Games & Apps', 'Guides']

const Layout = ({ children }) => (
  <Container>
    <Header headerItems={headerItems} />
    <MainContent>{children}</MainContent>
    <Footer />
  </Container>
)

export default Layout
