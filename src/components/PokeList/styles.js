import styled from "styled-components";


export const PokeListContainer = styled.div`

/* margin: 6rem;
margin-left: 25rem; */
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

export const PokeListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 32px;
grid-row-gap: 52px;
`