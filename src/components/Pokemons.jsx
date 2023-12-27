import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokemonList } from "./PokemonList";

export const Pokemons = () => {
  const [listPokemons, setListPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const pokemonsByName = listPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  console.log(pokemonsByName);

  const getListPokemon = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=100`
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
          <PokemonList pokemons={pokemonsByName} />
        :
        <span className="container-no-result">No hay resultados :c</span>
      }
    </section>
  );
};
