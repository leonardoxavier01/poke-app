import React from 'react'
import Footer from '../Footer'
import { Container, MainContent } from './styles'
import HeaderMenu from '../HeaderMenu'

const Layout = ({ children }) => (
  <Container>
    <HeaderMenu />
    <MainContent>{children}</MainContent>
    <Footer />
  </Container>
)

export default Layout
