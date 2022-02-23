import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.backgroundGradient};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 17.43rem;
  box-shadow: 0px 3px 12px rgba(69, 62, 7, 0.3);
`

export const LogoAwari = styled.img`
  width: 9.18rem;
  height: 2.51rem;
`
