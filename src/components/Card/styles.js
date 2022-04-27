import styled from 'styled-components'

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.lightGrey};
  box-shadow: 0px 12px 40px -5px rgba(28, 29, 4, 0.15);
  border-radius: 2.188rem;
  width: 18.75rem;
  height: 21.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.1);
  }
`
export const PokemonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .id {
    font-weight: 500;
    margin-right: 13rem;
  }
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
  margin-bottom: 0;
  text-transform: capitalize;
`
export const PokeType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-transform: capitalize;
  font-weight: 500;
  img{
    width: 5%;
  }
`

export const Icon = styled.svg`
  width: 80%;
`
