import { BoxStyled } from './styles'

const BoxMiniPictues = ({ pokemon, alt }) => {
  return (
    <BoxStyled>
      <div>
        {pokemon.sprites.front_default ? (
          <img src={pokemon.sprites.front_default} alt={`image front ${alt}`} />
        ) : (
          <div>unavailable</div>
        )}
      </div>
      <div>
        {pokemon.sprites.back_default ? (
          <img src={pokemon.sprites.back_default} alt={`image front ${alt}`} />
        ) : (
          <div>unavailable</div>
        )}
      </div>
      <div>
        {pokemon.sprites.front_shiny ? (
          <img
            src={pokemon.sprites.front_shiny}
            alt={`image front shiny ${alt}`}
          />
        ) : (
          <div>unavailable</div>
        )}
      </div>
      <div>
        {pokemon.sprites.back_shiny ? (
          <img
            src={pokemon.sprites.back_shiny}
            alt={`image back shiny ${alt}`}
          />
        ) : (
          <div>unavailable</div>
        )}
      </div>
    </BoxStyled>
  )
}

export default BoxMiniPictues
