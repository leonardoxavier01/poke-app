import styled from 'styled-components'

export const SearchContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  max-width: 964px;
  width: 100%;
  margin-right: 100px;
`

export const SearchWrapper = styled.div`
  width: 100%;
`

export const Input = styled.input`
  border-radius: 8px;
  color: var(--black);
  border: 1px solid ${({ theme }) => theme.lightGrey};
  min-width: 300px;
  height: 2.375rem;
  padding: 0px 1rem;
`
