import styled from 'styled-components'

export const PokeListWrapper = styled.div`
  padding: 2rem;
  margin-top: 3rem;
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 30px;
  border-radius: 50px 50px 50px 50px;
  border: 0.3rem solid rgba(193, 69, 175, 1);
  transition: circle-in-top-right;
  animation: 0.5s cubic-bezier(0.25, 1, 0.3, 1) circle-in-top-right both;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @keyframes circle-in-top-right {
    from {
      clip-path: circle(0%);
    }
    to {
      clip-path: circle(150% at top right);
    }
  }
`
