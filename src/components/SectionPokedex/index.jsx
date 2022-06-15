import React, { useState, useEffect } from 'react'
import pokedex from '../../assets/images/pokedex.png'
import pokeball from '../../assets/images/pokeball.png'
import { Container, Texts, BoxImage } from './styles'

const SectionPokedex = () => {
  const imagesArray = [pokedex, pokeball]
  const [image, setImage] = useState(0)
  const [imageAlt, setImageAlt] = useState('pokedex')
  const [change, setChange] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (change === false) {
        setImage(1)
        setImageAlt('pokeball')
        setChange(true)
      } else {
        setImage(0)
        setImageAlt('pokedex')
        setChange(false)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [change])

  return (
    <Container>
      <Texts>
        <h2>Hello World</h2>
        <h1>Discover All Pokemons</h1>
        <h2>Web pokedex</h2>
      </Texts>
      <BoxImage>
        <img src={imagesArray[image]} alt={`image_${imageAlt}`} />
      </BoxImage>
    </Container>
  )
}

export default SectionPokedex
