import React from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons }) => {
  return (
      <section className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonURL={pokemon.url} />
        ))}
      </section>
  );
};
