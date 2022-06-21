import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Container,
  Type,
  Types,
  BoxImage,
  MiniImages,
  BoxButtonId,
  Abilities,
  StatsPokemon,
  Stat,
  BaseStat,
  StatName,
  Value,
  Sizes,
  Test,
} from './styles'
import { FiArrowLeftCircle } from 'react-icons/fi'
import Loader from '../Loader'
import { themePokemons } from '../../styles/theme'

const InfoPokemon = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const getPokemon = async () => {
        const response = await axios(baseUrl)
        setPokemon(response.data)
        setLoading(false)
      }
      window.scrollTo(0, 0)
      getPokemon()
    }, 100)
  }, [])

  const dividingSize = (value) => value / 10

  return loading ? (
    <Loader />
  ) : (
    <Container key={pokemon.id}>
      <Test color={themePokemons[pokemon.types[0].type.name]}>
        <BoxButtonId>
          <span>#0{pokemon.id}</span>
          <button onClick={() => navigate(-1)}>
            <FiArrowLeftCircle size={36} />
          </button>
        </BoxButtonId>
        <h1>{pokemon.name}</h1>
        <Types>
          {pokemon.types.map((poke, index) => {
            return (
              <Type key={index} color={themePokemons[poke.type.name]}>
                <h3>{poke.type.name}</h3>
              </Type>
            )
          })}
        </Types>
        <BoxImage>
          <img
            src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default}
            alt={`image pokemon ${pokemon.name}`}
          />
        </BoxImage>
        <Sizes>
          <h3>height: {dividingSize(pokemon.height)}m</h3>
          <h3>weight: {dividingSize(pokemon.weight)}kg</h3>
        </Sizes>
        <MiniImages>
          <div>
            <img
              src={pokemon.sprites.front_default}
              alt={`image front${pokemon.name}`}
            />
          </div>
          <div>
            <img
              src={pokemon.sprites.back_default}
              alt={`image back${pokemon.name}`}
            />
          </div>
          <div>
            <img
              src={pokemon.sprites.front_shiny}
              alt={`image front shiny${pokemon.name}`}
            />
          </div>
          <div>
            <img
              src={pokemon.sprites.back_shiny}
              alt={`image back shiny${pokemon.name}`}
            />
          </div>
        </MiniImages>
        <Abilities>
          {pokemon.abilities.map((poke, index) => {
            return (
              <div key={index}>
                <h3>{poke.ability.name}</h3>
              </div>
            )
          })}
        </Abilities>
        <StatsPokemon>
          {pokemon.stats.map((poke, index) => {
            return (
              <Stat key={index}>
                <StatName>
                  <span>{poke.stat.name}:</span>
                </StatName>
                <BaseStat>
                  <Value
                    value={poke.base_stat}
                    color={themePokemons[pokemon.types[0].type.name]}
                  >
                    <span>{poke.base_stat}</span>
                  </Value>
                </BaseStat>
              </Stat>
            )
          })}
        </StatsPokemon>
      </Test>
    </Container>
  )
}

export default InfoPokemon
