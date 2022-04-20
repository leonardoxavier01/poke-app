import React, { useState, useEffect } from 'react'
import { PokeListContainer, PokeListWrapper } from './styles'
import Card from '../Card'
import InputSearch from '../InputSearch'
import ButtonLoad from '../ButtonLoad/ButtonLoad'
import baseUrl from '../../Services/pokeApiAxios'

const PokeList = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')
  const [input, setInput] = useState('')
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)
    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        await cretePokemon(data)
      })
    }
    createPokemonObject(data.results)
  }

  const cretePokemonSearch = async (res) => {
    setAllPokemons([])
    await cretePokemon(res)
  }

  const cretePokemon = async (res) => {
    setAllPokemons(currentList => [...currentList, res])
    await allPokemons.sort((a, b) => a.id - b.id)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  async function handleSearch() {
    if (input === '') {
      location.reload();
    }
    try {
      const inputPokemon = input.toLowerCase();
      const response = await baseUrl.get(`/pokemon/${inputPokemon}`)
      cretePokemonSearch(response.data)
      setInput(input)
    } catch {
      alert('Digite um nome correto!')
      setInput('')
    }
  }

  return (
    <PokeListContainer>
      <div>
        <InputSearch
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={handleSearch}
        />
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
        {!!(input === '') && (
          <ButtonLoad
            text='Load more'
            onClick={() => getAllPokemons()} />
        )}
      </div>

    </PokeListContainer>)
}


export default PokeList
