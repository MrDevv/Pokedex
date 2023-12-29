import { IconX } from "@tabler/icons-react";
import React from "react";

export const ModalPokemon = ({showModal, onCloseModal}) => {
  return (
    <section className={`modal-pokemon ${showModal && 'show-modal'}`}>
      <button className="btn-close" onClick={onCloseModal}>
        <IconX size={32} stroke={4} />
      </button>
      <article className="details-pokemon">Pokemon</article>
    </section>
  );
};
