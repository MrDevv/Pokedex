import React, { useContext } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

export const PokemonList = ({ pokemons }) => {
  const { showPokemon } = useContext(PokemonContext)

  return (
      <section className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonURL={pokemon.url} onClick={showPokemon}/>
        ))}
      </section>
  );
};
