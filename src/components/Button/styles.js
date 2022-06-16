import styled from 'styled-components'

export const ButtonStyled = styled.button`
  height: 2.3125rem;
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  background-color: ${(props) => props.color};
  border: 0px;
  color: ${({ theme }) => theme.white};
  padding: 0.75rem 2rem;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  z-index: 2;
  :hover{
    border: 1px solid black;
  }
`
