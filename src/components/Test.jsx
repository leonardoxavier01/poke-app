import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Test = () => {
  const { id } = useParams()
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/1${id}`
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data)
    })
  }, [])

  if (!post) return null

  return (
    <div>
      <h1>{post.name}</h1>
      <h1>{post.id}</h1>
    </div>
  )
}

export default Test
