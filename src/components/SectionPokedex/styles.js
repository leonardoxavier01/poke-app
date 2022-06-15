import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.backgroundGradient};
  display: flex;
  padding: 4rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`
export const Texts = styled.div`
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 4px 13px #dc0a2d;
  h1 {
    font-size: 4.5rem;
    margin: 1rem;
    color: ${({ theme }) => theme.white};
  }
  h2 {
    color: ${({ theme }) => theme.white};
    margin: 0;
    font-size: 2rem;
  }
`
export const BoxImage = styled.div`
  width: 40%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: float 3s ease-in-out infinite;

  @media (min-width: 300px) {
    img {
      max-width: 25rem;
    }
    height: 20rem;
  }

  @media (min-width: 600px) {
    img {
      max-width: 30rem;
    }
    height: 22rem;
  }

  @media (min-width: 900px) {
    img {
      max-width: 40rem;
    }
    height: 24rem;
  }
`
