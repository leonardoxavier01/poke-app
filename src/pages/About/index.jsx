import React from 'react'
import './styles.css'
import * as Type from '../../assets/images/typesPokemons'

const About = () => {
  return (
    <section className='section'>
      <div>
        <h1>Pokemon types</h1>
      </div>
      <div className='content'>

        <div className='typecontent'>
          <div className='item'>
            <h2>Normal</h2>
            <img className='img' src={Type.grass} alt="" />
          </div>
          <div className='item'>
            <ul>
              <h3>Vantagens</h3>
              <li>não tem vantagem</li>
            </ul>
          </div>
          <div className='item'>
            <ul>
              <h3>Desvantagens</h3>
              <li>fada</li>
              <li>voador</li>
              <li>pisych</li>
            </ul>
          </div >
          <div className='item'>
            <ul>
              <h3>Imunidades</h3>
              <li>Não pussuem imunidades</li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About
