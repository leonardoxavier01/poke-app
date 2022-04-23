import styled from 'styled-components'

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.4rem 0;
`
export const ButtonLoadMore = styled.button`
  background: rgba(120, 86, 254, 0.8);
  color: black;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 6.25rem;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  min-height: 2.5rem;
  width: 15rem;
  cursor: pointer;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.1);
  }
`
