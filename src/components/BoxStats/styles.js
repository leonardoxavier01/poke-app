import styled from 'styled-components'

export const StatsPokemon = styled.div`
  background-color: ${({ theme }) => theme.offWhite};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1.5rem;
  @media (min-width: 300px) {
    min-width: 80%;
  }
  @media (min-width: 900px) {
    min-width: 50%;
  }
`

export const Stat = styled.div`
  background-color: ${({ theme }) => theme.secondaryWhite};
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StatName = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  span {
    color: ${({ theme }) => theme.blackout};
    font-size: 1rem;
    font-weight: bolder;
  }

  @media (min-width: 300px) {
    width: 30%;
  }
  @media (min-width: 900px) {
    width: 150px;
  }
`

export const BaseStat = styled.div`
  @media (min-width: 300px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 450px;
  }
`

export const Value = styled.div`
  height: 1.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-radius: 2rem;
  background-color: ${(props) => props.color};
  width: ${(props) => (props.value ? props.value : 'auto')}px;
  border: 1px solid ${({ theme }) => theme.blackout};
  span {
    background-color: #fff;
    color: ${({ theme }) => theme.blackout};
    font-weight: bolder;
    border-radius: 50%;
    min-width: 15px;
    height: 15px;
    padding: 2px;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-size: 1rem;
    @media (max-width: 600px) {
      min-width: 10px;
      height: 10px;
    }
  }
  @media (min-width: 600px) {
    width: ${(props) => (props.value ? props.value + 100 : 'auto')}px;
  }
  @media (min-width: 900px) {
    width: ${(props) => (props.value ? props.value + 200 : 'auto')}px;
  }
`
