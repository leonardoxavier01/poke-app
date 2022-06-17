import React from 'react'
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

const InfoPokemon = ({ data, onClick }) => {
  const colors = {
    bug: '#A7B723',
    dark: '#75574C',
    dragon: '#3e7746',
    electric: '#ded237',
    fairy: '#f396c9',
    fighting: '#f0a715',
    fire: '#e1521a',
    flying: '#A891EC',
    ghost: '#70559B',
    grass: '#45be41',
    ground: '#f09d3e',
    ice: '#3addec',
    normal: '#667e79',
    poison: '#A43E9E',
    psychic: '#b93057',
    rock: '#8d5e0f',
    steel: '#1c566f',
    water: '#6493EB',
  }

  const dividingSize = (value) => value / 10

  return (
    <Container key={data.id} color={colors[data.types[0].type.name]}>
      <BoxButtonId>
        <span>#0{data.id}</span>
        <button onClick={onClick}>
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
        <h3>height: {dividingSize(data.height)}</h3>
        <h3>weight: {dividingSize(data.weight)}</h3>
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
