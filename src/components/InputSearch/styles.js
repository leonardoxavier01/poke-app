import styled from 'styled-components'

export const SearchContainer = styled.div`
  background-color: white;
  padding: 15px;
  display: flex;
  border-radius: 6.25rem;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  width: 48%;
  border: 2px solid ${({ theme }) => theme.lightGrey};
  input {
    background-color: transparent;
    border: 0;
    font-size: 20px;
    color: var(--black);
    outline: none;
    width: 90%;
  }
  button {
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;
    :hover {
      transform: scale(1.2);
    }
  }
`