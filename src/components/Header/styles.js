import styled from 'styled-components'

export const HeaderContainer = styled.header`
  /* background: ${({ theme }) => theme.backgroundGradient}; */
  background: rgb(120, 86, 254);
  background: linear-gradient(
    90deg,
    rgba(120, 86, 254, 1) 0%,
    rgba(193, 69, 175, 1) 57%
  );
  height: 5.8rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4.58rem;
  position: fixed;
  z-index: 10;
`

export const NavbarItem = styled.nav`
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }

  ${({ isFirst }) => (isFirst ? 'margin-left: 7.9rem;' : '')}
`
