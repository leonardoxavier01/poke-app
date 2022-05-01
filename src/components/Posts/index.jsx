import React from 'react'
import Card from '../Card'

const Posts = ({ posts }) => (
    <>
        {posts.map(post => (
            <Card
                key={post.id}
                id={post.id}
                image={post.sprites.other.dream_world.front_default}
                name={post.name}
                type={post.types[0].type.name}
            />
        ))}
    </>
)


export default Posts