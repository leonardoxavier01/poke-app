import React, { useState } from 'react'

const test = () => {
  const [input, setInput] = useState('')
  const [searchPokemon, setCep] = useState({})
  async function handleSearch() {
    if (input === '') {
      alert('Preencha o Campo!')
    }
    try {
      const response = await api.get(`/pokemon/${input}`)

      console.log(allPokemons)

      setCep(response.data)
      console.log(response.data)
      setInput('')
    } catch {
      alert('erro ao buscar!')
      setInput('')
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Digite o pokemon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{' '}
      <button onClick={handleSearch}></button>
    </div>
  )
}
