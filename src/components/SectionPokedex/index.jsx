import React, { useState, useEffect } from 'react'
import './styles.css'
import pokedex from '../../assets/images/pokedex.png'
import pokeball from '../../assets/images/pokeball.png'
const SectionPokedex = () => {
  const [image, setImage] = useState(pokedex);

  useEffect(() => {
    setInterval(() => {
      setImage(pokeball);
    }, 10000);
    setInterval(() => {
      setImage(pokedex);
    }, 20000);
  }, []);

  return (
    <div className=" header__container">
      <div className='container__text'>
        <h5>Hello World</h5>
        <h1>Discover All Pokemons</h1>
        <h5 className="text-ligth">Web pokedex</h5>
      </div>
      <div className="box-image">
        <img className='' src={image} alt="ME" />
      </div>
    </div>
  )
}

export default SectionPokedex