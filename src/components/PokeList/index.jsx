import React, { useState, useEffect } from 'react'
import { PokeListContainer, PokeListWrapper } from './styles'
import Card from '../Card'
import InputSearch from '../InputSearch'
import ButtonLoad from '../ButtonLoad/ButtonLoad'
import baseUrl from '../../Services/pokeApiAxios'
import './styles.css'


const PokeList = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])
  const [suggestions, setSeggestions] = useState([])

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

  async function handleSearch(input) {
    if (setInput === '') {
      location.reload();
    }
    try {
      const inputPokemon = input.toLowerCase();
      const response = await baseUrl.get(`/pokemon/${inputPokemon}`)
      cretePokemonSearch(response.data)
      setInput('')
      setSeggestions([]);
    } catch {
      alert('Ops houve um erro por aqui')
      setInput('')
    }
  }

  useEffect(() => {
    const loadUsers = async () => {
      const response = await baseUrl.get(`/pokemon?limit=200`)
      console.log(response.data.results)
      setUsers(response.data.results)
    }
    loadUsers()
  }, [])

  const onChangeHandler = (input) => {
    let matches = []
    if (input.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${input}`, "gi")
        return user.name.match(regex)
      })
    }
    setSeggestions(matches)
    setInput(input)
  }

  return (
    <PokeListContainer>
      <div>
        <InputSearch
          value={input}
          onChange={(e) => onChangeHandler(e.target.value)}
          onClick={handleSearch}
        >
          <ul className='test'>
            {suggestions && suggestions.map((suggestions, i) =>
              <li className='list' key={i} onClick={() => handleSearch(suggestions.name)} >{suggestions.name}</li>
            )}
          </ul>
        </InputSearch>
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
        <ButtonLoad
          text='Load more'
          onClick={() => getAllPokemons()} />
      </div>

    </PokeListContainer>)
}


export default PokeList
