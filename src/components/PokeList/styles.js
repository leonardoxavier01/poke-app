import styled from "styled-components";

export const PokeListContainer = styled.div`
max-width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 1rem;
`

export const PokeListWrapper = styled.div`
padding: 2rem;
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 32px;
grid-row-gap: 52px;
border-radius: 50px 50px 50px 150px;
border: 0.4rem solid #A2A3A3;
`