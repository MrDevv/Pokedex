import React from "react";
import { PokemonDetail } from "./PokemonDetail";

export const Aside = ({ pokemon, isLoadingPokemon }) => {
  console.log(isLoadingPokemon);
  return (
    <div className="section-aside">
      <article
        className={`container-pokemon-info ${!pokemon ? "show-aside" : ""}`}
      >
        <article className="details-pokemon">
          <header>
            <img src={"/assets/no-pokemon-selected-image.png"} alt="" />
          </header>
          <span className="span-select-pokemon">Selecciona un Pokemon</span>
        </article>
      </article>

      <article
        className={`container-pokemon-info ${
          pokemon && !isLoadingPokemon ? "show-aside" : ""
        } `}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>

      {isLoadingPokemon && (
        <div className="container-loading-aside">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};
