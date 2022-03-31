import React, { useState, useEffect } from 'react'
import { PokeListContainer, PokeListWrapper } from './styles'
import Card from '../Card'

import api from '../api'


const PokeList = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
    
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

 

  const [input, setInput] = useState("");
  const [searchPokemon, setCep] = useState({});
  async function handleSearch() {
    if (input === "") {
      alert("Preencha o Campo!");
    }
    try {
      const response = await api.get(`/pokemon/${input}`);
      
      console.log(allPokemons)

      setCep(response.data);
      console.log(response.data);
      setInput("");
    } catch {
      alert("erro ao buscar!");
      setInput("");
    }
  }

  return (
    <PokeListContainer>
      <div className="app-contaner">   
        <div className="pokemon-container">
          <PokeListWrapper className="all-container">
            {allPokemons.map((pokemonStats, index) =>
              <Card
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />)}
          </PokeListWrapper>
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
        </div>
      </div>
    </PokeListContainer>)
}


export default PokeList
