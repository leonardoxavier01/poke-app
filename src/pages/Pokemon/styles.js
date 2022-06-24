import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundGradient};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1 {
    margin: 0;
    color: ${({ theme }) => theme.blackout};
    font-size: 5rem;
    text-transform: capitalize;
  }
`
export const Wrapper = styled.div`
  background: linear-gradient(0deg, #fff, ${(props) => props.color} 100%);
  border: 0.3rem solid rgba(193, 69, 175, 1);
  border-radius: 50px;
  margin: 0 2rem;
  min-height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  @media (min-width: 300px) {
    width: 90%;
  }
  @media (min-width: 600px) {
    min-width: 35rem;
  }
  @media (min-width: 900px) {
    width: 50rem;
  }
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
