import React from 'react'
import './styles.css'
import Pokedex from '../../assets/images/pokedex.png'

const SectionPokedex = () => {
  return (
      <div className=" header__container">
        <div className='container__text'>
          <h5>Hello World</h5>
          <h1>Discover all pokemons</h1>
          <h5 className="text-ligth">Web pokedex</h5>
        </div>
        <div className="me">
          <div className='main'><img className='image' src={Pokedex} alt="ME" /></div>
        </div>
      </div>
  )
}

export default SectionPokedex