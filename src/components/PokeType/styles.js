import styled from "styled-components";

export const Type = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  min-width: 9rem;
  height: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border: 1px solid ${({ theme }) => theme.Grey};
  h3 {
    font-family: 'Courier New', Courier, monospace;
    color: black;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.white};
    text-shadow: 0px 2px 15px #8b8b8b;
  }
`