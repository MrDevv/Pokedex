import axios from "axios";
import React, { useEffect, useState } from "react";
import { getBackgroundColor } from "../helpers/getBackgroundColorPokemon";
import { getIconType } from "../helpers/getIconTypePokemon";

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
    <article
      className={`card-pokemon`}
      style={{ backgroundColor: getBackgroundColor(pokemon.types[0]) }}
      onClick={() => onClick(pokemon)}
    >
      <div className="container-info-pokeball">
        <div className="info">
          <span>#{pokemon?.id}</span>
          <h4>{pokemon?.name}</h4>
          <ul>
            {pokemon?.types.map(({ type }) => (
              <li key={type.name} className={type.name}>
                <img src={getIconType(type.name)} alt="" />                
              </li>
            ))}
          </ul>
        </div>
        <div className="pokeball">
          <img src="/assets/pokeball.png" alt="" />
        </div>
      </div>
      <img
        className="image-pokemon"
        src={
          pokemon?.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        alt=""
      />
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
