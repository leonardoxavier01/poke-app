import styled from "styled-components";

export const PokeListContainer = styled.div`
margin-left: 3rem;
background-color: #DC0A2D;
display: flex;
justify-content: center;
align-items: center;
min-width: 100%;
border-radius: 7rem;
border:2rem groove #8C082C;
box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`

export const PokeListWrapper = styled.div`
background-color: #d6c5fa;
padding: 2rem;
height: 45rem;
overflow-y: scroll;
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 32px;
grid-row-gap: 52px;
border-radius: 50px 50px 50px 150px;
border: 0.4rem solid #A2A3A3;

::-webkit-scrollbar {
    width: 17px;
}

::-webkit-scrollbar-button {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: rgba(193, 69, 175, 1);
    border: 4px solid rgba(0, 0, 0, 0.2);
}
`