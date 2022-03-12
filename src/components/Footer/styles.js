import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.backgroundGradient};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15.43rem;
  background: rgb(120, 86, 254);
  background: linear-gradient(
    90deg,
    rgba(120, 86, 254, 1) 0%,
    rgba(193, 69, 175, 1) 57%
  );
`

export const LogoAwari = styled.img`
  width: 9.18rem;
  height: 2.51rem;
`
