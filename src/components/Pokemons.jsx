import { IconSearch } from '@tabler/icons-react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PokemonList } from './PokemonList';

export const Pokemons = () => {
    const [listPokemons, setListPokemons] = useState([]);

    const getListPokemon = async () => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
        setListPokemons(data.results)        
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target);
    }

    useEffect(() => {          
      getListPokemon('')
    }, [])
    
    // console.log(listPokemons);

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="text" placeholder='Busca tu pokemon' />
                <div className="icon-search">
                    <IconSearch color='white' stroke={3}/>
                </div>
            </div>
        </form>
        <PokemonList pokemons={listPokemons}/>
    </section>
  )
}
