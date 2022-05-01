import React, { useState, useEffect } from 'react'
import baseUrl from '../../Services/pokeApiAxios'
import { InputSearch } from '../../components'
import { ButtonLoad } from '../../components'
import { Suggestions } from '../../components'
import { Posts } from '../../components'
import { Container, PokeListContent, PokeListWrapper } from './styles'

const Home = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])
  const [suggestions, setSuggestions] = useState([])

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
      let inputPokemon = input.toLowerCase();
      const response = await baseUrl.get(`/pokemon/${inputPokemon}`)
      cretePokemonSearch(response.data)
      setInput('')
      setSuggestions([]);
    } catch {
      alert('Ops houve um erro por aqui')
      setInput('')
    }
  }

  useEffect(() => {
    const loadUsers = async () => {
      const response = await baseUrl.get(`/pokemon?limit=649`)
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
    setSuggestions(matches)
    setInput(input)
  }

  return (
    <Container>
      <PokeListContent>
        <div>
          <InputSearch
            value={input}
            onChange={(e) => onChangeHandler(e.target.value)}
            onClick={handleSearch}>
            {suggestions.length > 0 && (
              <Suggestions
                search={suggestions}
                onClick={handleSearch}
              />
            )}
          </InputSearch>
          {allPokemons.length > 0 && (
            <Posts posts={allPokemons} />
          )}
          <ButtonLoad
            text='Load more'
            onClick={() => getAllPokemons()} />
        </div>
      </PokeListContent>
    </Container>
  )
}

export default Home


