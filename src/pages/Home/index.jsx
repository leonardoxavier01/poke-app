import React, { useState, useEffect } from 'react'
import baseUrl from '../../services/pokeApiAxios'
import { InputSearch, SectionPokedex } from '../../components'
import { ButtonLoad } from '../../components'
import { Suggestions } from '../../components'
import { PokeList } from '../../components'
import { Container, PokeContent } from './styles'
import Loader from '../../components/Loader'

const Home = () => {
  let url = 'https://pokeapi.co/api/v2/pokemon?limit=20'

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(url)
  const [input, setInput] = useState('')
  const [pokeSearch, setPokeSearch] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
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
    setAllPokemons((currentList) => [...currentList, res])
    await allPokemons.sort((a, b) => a.id - b.id)
  }

  useEffect(() => {
    getAllPokemons()
    const loadPokeSearch = async () => {
      const response = await baseUrl.get(`/pokemon?limit=100000`)
      setPokeSearch(response.data.results)
      setTimeout(() => {
        setLoading(false)
      }, 100)
    }
    loadPokeSearch()
  }, [])

  async function handleSearch(input) {
    if (setInput === '') {
      location.reload()
    }
    try {
      let inputPokemon = input.toLowerCase()
      const response = await baseUrl.get(`/pokemon/${inputPokemon}`)
      cretePokemonSearch(response.data)
      setInput('')
      setSuggestions([])
    } catch {
      alert('Ops houve um erro por aqui')
      setInput('')
    }
  }

  const onChangeHandler = (input) => {
    let matches = []
    if (input.length > 0) {
      matches = pokeSearch.filter((pokemon) => {
        const regex = new RegExp(`${input}`, 'gi')
        return pokemon.name.match(regex)
      })
    }
    setSuggestions(matches)
    setInput(input)
  }
  return (
    <>
      <SectionPokedex />
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <PokeContent>
            <InputSearch
              value={input}
              onChange={(e) => onChangeHandler(e.target.value)}
              onClick={handleSearch}
            >
              {suggestions.length > 0 && (
                <Suggestions search={suggestions} onClick={handleSearch} />
              )}
            </InputSearch>
            <PokeList pokemons={allPokemons} loading={loading} />
            <ButtonLoad text="Load more" onClick={() => getAllPokemons()} />
          </PokeContent>
        </Container>
      )}
    </>
  )
}

export default Home
