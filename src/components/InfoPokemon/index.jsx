import React from 'react'

const InfoPokemon = ({ data, onClick }) => {
  return (
    <div>
      <div>
        <button onClick={onClick}>Voltar</button>
      </div>
      <span>#0{data.id}</span>
      <h1>{data.name}</h1>
      {data.types.map((poke, index) => {
        return (
          <div key={index}>
            <h3>{poke.type.name}</h3>
          </div>
        )
      })}
      <img
        src={data.sprites.other.dream_world.front_default}
        alt={`image pokemon ${data.name}`}
      />
      <img src={data.sprites.back_default} alt={`image back${data.name}`} />
      <img src={data.sprites.front_default} alt={`image front${data.name}`} />
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
    </div>
  )
}

export default InfoPokemon
