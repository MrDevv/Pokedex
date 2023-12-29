import axios from "axios";
import React, { useEffect, useState } from "react";

export const PokemonCard = ({ pokemonURL, onClick }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    const { data } = await axios.get(pokemonURL);
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  // console.log(pokemon);
  return pokemon ? (
    <article className="card-pokemon" onClick={() => onClick(pokemon)}>
      <header>
        <img
          src={
            pokemon?.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt=""
        />
      </header>
      <span>N° {pokemon?.id}</span>
      <h4>{pokemon?.name}</h4>
      <ul>
        {pokemon?.types.map(({ type }) => (
          <li key={type.name} className={type.name}>
            {type.name}
          </li>
        ))}
      </ul>
    </article>
  ) : (
    <div className="container-loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
