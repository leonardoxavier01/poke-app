import { useState } from 'react'
import logoPokemon from '@assets/images/logo.png'

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  StyledTagA,
  StyledTagAExtended,
} from './styles'

const HeaderMenu = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <StyledTagA href="https://www.figma.com/file/JRMiIQLxO0QfVfux5VWZa5/Estudo-de-caso-Awari?node-id=0%3A1">
              Desing
            </StyledTagA>
            <StyledTagA href="https://pokeapi.co/">PokeApi</StyledTagA>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={logoPokemon}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <StyledTagAExtended href="https://www.figma.com/file/JRMiIQLxO0QfVfux5VWZa5/Estudo-de-caso-Awari?node-id=0%3A1">
            Desing
          </StyledTagAExtended>
          <StyledTagAExtended href="https://pokeapi.co/">
            PokeApi
          </StyledTagAExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default HeaderMenu
