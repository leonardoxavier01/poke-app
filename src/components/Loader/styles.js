import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
img{
    width: 8rem;
    animation: rotateCW 1.5s infinite linear;
}
h1{
    font-size: 1.5rem;
    color:${({theme})=> theme.blackout};
}
@keyframes rotateCW {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`