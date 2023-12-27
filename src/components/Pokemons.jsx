import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { PokemonList } from "./PokemonList";
import { useIntersectionObserver } from "../hooks/useIntersectionOberser";

const INITIAL_LIMIT =  40;
const INCREASE_LIMIT = 20;

export const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [listPokemons, setListPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting

  const pokemonsByName = listPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  }

  const getListPokemon = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=649`
    );
    setListPokemons(data.results);      
    setIsLoading(false);
  };

  useEffect(() => {
    getListPokemon("");    
  }, []);

  useEffect(() => {      
    const maxPokemons = pokemonsByName.length;
    if (isVisible && maxPokemons  !== 0) {
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
        !isLoading 
        ?
          pokemonsByName.length > 0          
          ? 
            <PokemonList pokemons={pokemonsByName.slice(0, limit)} />                              
          :
          <span className="container-no-result">No hay resultados :c</span>
        :
        <div className="container-loading">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      } 
      <span ref={targetObserver}></span>      
    </section>
  );
};
