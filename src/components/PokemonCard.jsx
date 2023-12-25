import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const PokemonCard = ({pokemonURL}) => {
    const [pokemon, setPokemon] = useState(null);

    const getPokemon = async () => {
        const {data} = await axios.get(pokemonURL)
        setPokemon(data)        
    }

    useEffect(() => {      
        getPokemon();
    }, [])
    
    console.log(pokemon);
  return (
    <article className='card-pokemon'>
        <header>
            <img src={pokemon?.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="" />
        </header>
        <span>N° {pokemon?.id}</span>
        <h4>{pokemon?.name}</h4>
        <ul>
            {
                pokemon?.types.map(({type}) => (
                    <li className={type.name}>{type.name}</li>
                ))
            }
        </ul>
    </article>
  )
}
