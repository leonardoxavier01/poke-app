import styled from 'styled-components'

export const SuggestionsContainer = styled.div`
  width: 30rem;
  position: absolute;
  z-index: 3;
  border-radius: 2rem;
  background-color: #f8f8f8;
  max-height: 23.5rem;
  overflow-y: scroll;
  padding-left: 1rem;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  ::-webkit-scrollbar {
    width: 17px;
  }

  ::-webkit-scrollbar-button {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: #c145af;
    border: 4px solid rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 450px) {
     width: 24rem;
    }
`
