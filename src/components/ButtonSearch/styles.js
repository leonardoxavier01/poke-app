import styled from 'styled-components'

export const ButtonStyled = styled.div`
  font-weight: 600;
  color: white;
  text-align: center;
  width: 36%;
  background-color: rgba(193, 69, 174, 0.993);
  border: 4px solid rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
  margin: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  list-style-type: none;
  max-width: 18rem;
  border-radius: 1rem;
  transition: transform 0.5s;

  :hover {
    transform: scale(1.1);
  }
`
