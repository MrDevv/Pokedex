import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { PokemonList } from "./PokemonList";
import { useIntersectionObserver } from "../hooks/useIntersectionOberser";

const INITIAL_LIMIT =  40;
const INCREASE_LIMIT = 20;

export const Pokemons = () => {
  const [listPokemons, setListPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting

  const pokemonsByName = listPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  console.log(pokemonsByName);
  console.log(isVisible);  

  const getListPokemon = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=898`
    );
    setListPokemons(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  }

  useEffect(() => {
    getListPokemon("");
  }, []);

  useEffect(() => {      
    if (isVisible) {
      const maxPokemons = pokemonsByName.length;
      const newLimit = limit + INCREASE_LIMIT;
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);      
    }    
  }, [isVisible])

  useEffect(() => {
        setLimit(INITIAL_LIMIT)
  }, [pokemonName])
  

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Busca tu pokemon"
            autoComplete="off"
            name="pokemonValue"
            value={pokemonName}
            onChange={handleChangePokemonName}
          />
          <div className="icon-search">
            <IconSearch color="white" stroke={3} />
          </div>
        </div>
      </form>
      {
        pokemonsByName.length > 0
        ?        
          <PokemonList pokemons={pokemonsByName.slice(0, limit)} />                  
        :
        <span className="container-no-result">No hay resultados :c</span>
      } 
      <span ref={targetObserver}></span>
    </section>
  );
};
