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
position: relative;
margin-bottom: 0.5rem;
`
export const PokemonImage = styled.img`
width: 9.5rem;
height: 9.5rem;
position: absolute;
z-index: 2;
top: 0.85rem; 
`
