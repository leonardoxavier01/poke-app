import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(0deg, #fff, ${(props) => props.color} 100%);
  width: 100%;
  min-height: 70vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    color: #202020;
    font-size: 5rem;
    text-transform: capitalize;
  }
`
export const Type = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  min-width: 9rem;
  height: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border: 1px solid #333333;
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
  background-color: #ffffff7a;
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
export const CarouselImage = styled.div`
  margin-top: 2rem;
  background-color: #ffffff7a;
  border-radius: 1rem;
  width: 25rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem;
  div {
    background-color: #ffffffa4;
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
  width: 30rem;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 2.4rem;
    color: #333333;
  }
  button {
    background: transparent;
    border: transparent;
    cursor: pointer;
    color: #333333;
  }
`
