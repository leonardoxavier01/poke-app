import React from 'react'
import { Container, Type, Types, BoxImage, CarouselImage, BoxButtonId } from './styles'
import { FiArrowLeftCircle } from "react-icons/fi";

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
    water: '#6493EB',
  }

  return (
    <Container color={colors[data.types[0].type.name]}>
      <BoxButtonId>
        <span>#0{data.id}</span>
        <button onClick={onClick}><FiArrowLeftCircle size={36}/></button>
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
      <CarouselImage>
        <div>
          <img src={data.sprites.back_default} alt={`image back${data.name}`} />
        </div>
        <div>
          <img
            src={data.sprites.front_default}
            alt={`image front${data.name}`}
          />
        </div>
        <div>
          <img
            src={data.sprites.back_shiny}
            alt={`image back shiny${data.name}`}
          />
        </div>
        <div>
          <img
            src={data.sprites.front_shiny}
            alt={`image front shiny${data.name}`}
          />
        </div>
      </CarouselImage>

      {data.abilities.map((poke, index) => {
        return (
          <div key={index}>
            <h3>{poke.ability.name}</h3>
          </div>
        )
      })}
      <h3>height: {data.height}</h3>
      <h3>weight: {data.weight}</h3>
      <h3>base experience: {data.base_experience}</h3>
      {data.stats.map((poke, index) => {
        return (
          <div key={index}>
            <h3>
              {poke.stat.name}:{poke.base_stat}
            </h3>
          </div>
        )
      })}
    </Container>
  )
}

export default InfoPokemon
