import styled from "styled-components";

export const PokeListWrapper = styled.div`
padding: 2rem;
margin-top: 3rem;
display: grid;
grid-column-gap: 32px;
grid-row-gap: 52px;
border-radius: 50px 50px 50px 50px;
border: 0.4rem solid #A2A3A3;
@media (min-width: 600px) {
   grid-template-columns: repeat(2, 1fr); 
}
@media (min-width: 900px) {
   grid-template-columns: repeat(3, 1fr);
}
`