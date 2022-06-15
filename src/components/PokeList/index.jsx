import React,{useState} from 'react'
import Card from '../Card'
import { PokeListWrapper } from './styles'

const PokeList = ({ posts, infoPokemon }) => (
    
    <PokeListWrapper>
        {posts.map(post => (
            <Card
                onClick={() => infoPokemon(post)}
                key={post.id}
                id={post.id}
                image={post.sprites.other.dream_world.front_default}
                name={post.name}
                type={post.types[0].type.name}
            />
        ))}
    </PokeListWrapper>
)


export default PokeList