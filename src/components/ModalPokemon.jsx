import { IconX } from "@tabler/icons-react";
import React from "react";
import { PokemonDetail } from "./PokemonDetail";

export const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  console.log(pokemon);

  return (
    <section
      className={`modal-pokemon ${showModal && "show-modal"} ${
        pokemon.types && pokemon.types[0]
      }`}
    >
      <button className="btn-close" onClick={onCloseModal}>
        <IconX size={32} stroke={4} />
      </button>

      <PokemonDetail pokemon={pokemon}/>
    </section>
  );
};
