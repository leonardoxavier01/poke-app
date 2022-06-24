import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
    text-shadow: 0px 4px 13px ${({ theme }) => theme.red};
    margin-bottom: 1rem;
  }
  button {
    border: 1px solid black;
  }
`
export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  h1 {
    font-size: 27rem;
    color: ${({ theme }) => theme.white};
    text-shadow: 0px 4px 13px ${({ theme }) => theme.red};
  }
  img {
    box-shadow: 0px 4px 13px #dc0a2d;
    border-radius: 50%;
    margin-top: 1.5rem;
  }

  @media (min-width: 300px) {
    width: 20rem;
    height: 10rem;
    h1 {
      font-size: 10rem;
    }
    img {
      width: 8rem;
    }
  }

  @media (min-width: 600px) {
    width: 35rem;
    height: 17rem;

    h1 {
      font-size: 18rem;
    }
    img {
      width: 13rem;
    }
  }
  @media (min-width: 600px) {
    margin-top: 3rem;
  }
`
