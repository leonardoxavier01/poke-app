import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background-color: ${({ theme }) => theme.backgroundGradient};
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 50px;
  @media (max-width: 500px) {
    padding-left: 10px;
  }
`

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  @media (max-width: 500px) {
    padding-right: 20px;
  }
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-size: x-large;
  text-decoration: none;
  text-shadow: 0px 4px 18px #dc0a2d;
  font-weight: 500;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`
export const StyledTagA = styled.a`
  color: ${({ theme }) => theme.white};
  font-size: x-large;
  text-decoration: none;
  text-shadow: 0px 4px 18px #dc0a2d;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
`

export const StyledTagAExtended = styled.a`
  color: ${({ theme }) => theme.white};
  font-size: x-large;
  text-decoration: none;
  text-shadow: 0px 4px 18px #dc0a2d;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
`

export const NavbarLinkExtended = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-size: x-large;
  font-weight: 500;
  text-shadow: 0px 4px 18px #dc0a2d;
  text-decoration: none;
  margin: 10px;
`

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`
