import { SvgCardPoke } from "./styles"

const SvgCard = ({ color }) => {
    const colors = {
        bug: '#A7B723',
        dark: '#75574C',
        dragon: '#3e7746',
        electric: '#ded237',
        fairy: '#f396c9',
        fighting: '#f0a715',
        fire: '#e1521a',
        flying: '#A891EC',
        ghost: '#70559B',
        grass: '#528f34',
        ground: '#f09d3e',
        ice: '#3addec',
        normal: '#667e79',
        poison: '#A43E9E',
        psychic: '#b93057',
        rock: '#8d5e0f',
        steel: '#1c566f',
        water: '#6493EB'
    }
    
    return (
        <SvgCardPoke width="173" height="158" viewBox="0 0 173 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M89.5341 10.0436C101.451 13.6249 113.155 18.1311 122.103 27.0154C130.1 34.9548 130.035 48.0169 136.87 57.0401C146.861 70.2286 166.505 75.3528 170.926 91.4653C175.641 108.649 172.394 129.954 160.408 142.824C148.439 155.678 128.314 153.276 111.199 155.605C96.6019 157.591 82.2626 158.867 67.9252 155.409C52.9279 151.792 38.5307 145.919 27.0527 135.311C14.5451 123.751 1.01362 109.978 0.0421257 92.6686C-0.921362 75.5017 14.8898 63.0549 22.1283 47.5706C29.1635 32.5211 27.7481 10.8665 41.9885 2.93844C56.377 -5.07208 73.8401 5.32708 89.5341 10.0436Z" fill={colors[color]} />
        </SvgCardPoke>
    )
}

export default SvgCard

