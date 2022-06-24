import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Wrapper, BoxImage, BoxButtonId, Sizes } from './styles'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { themePokemons } from '../../styles/theme'
import {
  PokeAbilities,
  BoxMiniPictures,
  BoxStats,
  BoxTypes,
  Loader,
} from '../../components'

const RenderImage = ({ pokemon }) => {
  return (
    <>
      {pokemon.sprites.other.dream_world.front_default ||
      pokemon.sprites.other.home.front_default ||
      pokemon.sprites.front_default ? (
        <img
          src={
            pokemon.sprites.other.dream_world.front_default ||
            pokemon.sprites.other.home.front_default ||
            pokemon.sprites.front_default
          }
          alt={`main image ${pokemon.name}`}
        />
      ) : (
        <div>unavailable</div>
      )}
    </>
  )
}

const Pokemon = (res) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios(baseUrl)
      setPokemon(response.data)
      console.log(response.data)
      setTimeout(() => {
        setLoading(false)
      }, 100)
    }
    window.scrollTo(0, 0)
    getPokemon()
  }, [])

  if (!pokemon) return null

  return loading ? (
    <Loader />
  ) : (
    <Container key={pokemon.id}>
      <Wrapper color={themePokemons[pokemon.types[0].type.name]}>
        <BoxButtonId>
          <span>#0{pokemon.id}</span>
          <button onClick={() => navigate(-1)}>
            <FiArrowLeftCircle size={36} />
          </button>
        </BoxButtonId>
        <h1>{pokemon.name}</h1>
        <BoxTypes pokemon={pokemon} />
        <BoxImage>
          <RenderImage pokemon={pokemon} />
        </BoxImage>
        <Sizes>
          <h3>height: {pokemon.height / 10}m</h3>
          <h3>weight: {pokemon.weight / 10}kg</h3>
        </Sizes>
        <BoxMiniPictures pokemon={pokemon} alt={pokemon.name} />
        <PokeAbilities pokemon={pokemon} />
        <BoxStats pokemon={pokemon} />
      </Wrapper>
    </Container>
  )
}

export default Pokemon
