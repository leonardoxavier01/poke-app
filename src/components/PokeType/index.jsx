import { Type } from './styles'

const PokeType = ({ color, type }) => {
  return (
    <Type color={color}>
      <h3>{type}</h3>
    </Type>
  )
}

export default PokeType
