import styled from "styled-components";

export const BoxStyled = styled.div`
  background-color: ${({ theme }) => theme.offWhite};
  border-radius: 1rem;
  width: 25rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem;
  div {
    background-color: ${({ theme }) => theme.secondaryWhite};
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 6rem;
    height: 6rem;
  }
`