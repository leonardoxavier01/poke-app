import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import SectionPokedex from '../SectionPokedex'
import { Container, MainContent } from './styles'
import HeaderMenu from '../HeaderMenu'

const Layout = ({ children }) => (
  <Container>
    <HeaderMenu />
    <SectionPokedex />
    <MainContent>{children}</MainContent>
    <Footer />
  </Container>
)

export default Layout
