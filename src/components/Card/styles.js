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
    list-style: none;
    padding: 40px;
    background-color:aqua;
    text-align: center;
    border-radius: 20px;
    position: relative;
  }
  h2 {
    text-transform: capitalize;
    margin-bottom: 0px;
    font-size: 32px;
    font-weight: normal;
    position: relative;
    z-index: 2;
  }
  img {
    height: 180px;
    position: relative;
    z-index: 2;
  }
`
