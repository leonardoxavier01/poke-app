import React from 'react'
import ButtonSearch from '../ButtonSearch'
import { SuggestionsContainer } from './styles'

const Suggestions = ({ search, onClick}) => (
  <>
    <SuggestionsContainer>
      {search && search.map((search, index) =>
        <ButtonSearch
          key={index}
          onClick={() => onClick(search.name)}
        >
          {search.name}
        </ButtonSearch>
      )}
    </SuggestionsContainer>
  </>
)

export default Suggestions