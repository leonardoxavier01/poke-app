import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.backgroundGradient};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15.43rem;
`

export const LogoPokeApi = styled.img`
  width: 9.18rem;
  height: 4rem;
`
