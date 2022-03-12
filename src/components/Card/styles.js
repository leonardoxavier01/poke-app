import styled from 'styled-components'

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 12px 40px -5px rgba(28, 29, 4, 0.15);
  border-radius: 12px;
  width: 18.75rem;
  height: 21.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PokemonContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 0.5rem;
`
export const PokemonImage = styled.img`
  width: 9.5rem;
  height: 9.5rem;
  z-index: 2;
  top: 0.85rem;
`
export const PokemonName = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`

/* export const Icon = styled.svg`
width: 80%;
` */

export const PokemonUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding-inline-start: 0;
  li {
    width: 15rem;
    list-style: none;
    padding: 40px;
    background: rgb(120, 86, 254);
    background: linear-gradient(
      90deg,
      rgba(120, 86, 254, 0.29735644257703087) 0%,
      rgba(193, 69, 175, 0.3449754901960784) 57%
    );
    text-align: center;
    border-radius: 20px;
    position: relative;
    box-shadow: 0px 6px 16px -1px rgba(0, 0, 0, 0.66);
    ::after {
      content: '';
      display: block;
      width: 50%;
      height: 45%;
      border-radius: 100%;
      background-color: #9172d4;
      opacity: 0.7;
      position: absolute;
      top: 15%;
      left: 25%;
    }
  }
  h2 {
    text-transform: capitalize;
    margin-bottom: 0px;
    font-size: 32px;
    font-weight: bold;
    position: relative;
    z-index: 2;
  }
  img {
    height: 180px;
    position: relative;
    z-index: 2;
  }
  button {
    height: 2.3125rem;
    border-radius: ${({ theme }) => theme.pxToRem(24)};
    background-color: rgba(120, 86, 254, 1);
    border: 0px;
    color: ${({ theme }) => theme.white};
    padding: 0.75rem 2rem;
    cursor: pointer;
  }
`
