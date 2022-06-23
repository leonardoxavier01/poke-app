import styled from 'styled-components'

export const AbilitiesStyled = styled.div`
  min-width: 25rem;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.2rem;
  @media (min-width: 300px) {
    flex-direction: column;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const AbilityStyled = styled.div`
  margin: 1rem;
  background-color: ${({ theme }) => theme.offWhite};
  height: 2rem;
  padding: 5px;
  min-width: 12rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.Grey};
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.blackout};
  }
`
