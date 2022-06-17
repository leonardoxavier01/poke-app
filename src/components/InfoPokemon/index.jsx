import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { colors } from './colors'
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
} from './styles'
import { FiArrowLeftCircle } from 'react-icons/fi'

const InfoPokemon = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data)
    })
  }, [])

  if (!data) return null

  const dividingSize = (value) => value / 10

  return (
    <Container key={data.id} color={colors[data.types[0].type.name]}>
      <BoxButtonId>
        <span>#0{data.id}</span>
        <button onClick={() => navigate(-1)}>
          <FiArrowLeftCircle size={36} />
        </button>
      </BoxButtonId>
      <h1>{data.name}</h1>
      <Types>
        {data.types.map((poke, index) => {
          return (
            <Type key={index} color={colors[poke.type.name]}>
              <h3>{poke.type.name}</h3>
            </Type>
          )
        })}
      </Types>
      <BoxImage>
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={`image pokemon ${data.name}`}
        />
      </BoxImage>
      <Sizes>
        <h3>height: {dividingSize(data.height)}m</h3>
        <h3>weight: {dividingSize(data.weight)}kg</h3>
      </Sizes>
      <MiniImages>
        <div>
          <img
            src={data.sprites.front_default}
            alt={`image front${data.name}`}
          />
        </div>
        <div>
          <img src={data.sprites.back_default} alt={`image back${data.name}`} />
        </div>
        <div>
          <img
            src={data.sprites.front_shiny}
            alt={`image front shiny${data.name}`}
          />
        </div>
        <div>
          <img
            src={data.sprites.back_shiny}
            alt={`image back shiny${data.name}`}
          />
        </div>
      </MiniImages>
      <Abilities>
        {data.abilities.map((poke, index) => {
          return (
            <div key={index}>
              <h3>{poke.ability.name}</h3>
            </div>
          )
        })}
      </Abilities>
      <Sizes>
        <h3>height: {dividingSize(data.height)}m</h3>
        <h3>weight: {dividingSize(data.weight)}kg</h3>
      </Sizes>
      <StatsPokemon>
        {data.stats.map((poke, index) => {
          return (
            <Stat key={index}>
              <StatName>
                <span>{poke.stat.name}:</span>
              </StatName>
              <BaseStat>
                <Value
                  value={poke.base_stat}
                  color={colors[data.types[0].type.name]}
                >
                  <span>{poke.base_stat}</span>
                </Value>
              </BaseStat>
            </Stat>
          )
        })}
      </StatsPokemon>
    </Container>
  )
}

export default InfoPokemon
