import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(0deg, #fff, ${(props) => props.color} 100%);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  h1 {
    margin: 0;
    color: ${({ theme }) => theme.blackout};
    font-size: 5rem;
    text-transform: capitalize;
  }
  @media (min-width: 300px) {
    min-width: 80%;
  }
  @media (min-width: 600px) {
    min-width: 100%;
  }
  @media (min-width: 600px) {
    min-width: 80%;
  }
`
export const Type = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  min-width: 9rem;
  height: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border: 1px solid ${({ theme }) => theme.Grey};
  h3 {
    font-family: 'Courier New', Courier, monospace;
    color: black;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.white};
    text-shadow: 0px 2px 15px #8b8b8b;
  }
`
export const Types = styled.div`
  margin-bottom: 3rem;
  min-width: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const BoxImage = styled.div`
  background-color: ${({ theme }) => theme.offWhite};
  border-radius: 72% 28% 44% 56% / 30% 50% 50% 70%;
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  img {
    width: 18rem;
    height: 18rem;
  }
`
export const MiniImages = styled.div`
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

export const BoxButtonId = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.blackout};
  }
  button {
    background: transparent;
    border: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.blackout};
  }
  @media (min-width: 300px) {
    min-width: 90%;
  }
  @media (min-width: 900px) {
    min-width: 70%;
  }
`
export const Abilities = styled.div`
  min-width: 25rem;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.2rem;
  div {
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
  }
  @media (min-width: 300px) {
    flex-direction: column;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
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
export const Sizes = styled.div`
  min-width: 350px;
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.blackout};
  }
`
