import { IconX } from "@tabler/icons-react";
import React from "react";

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
      <article className="details-pokemon">
        <header>
          <img src={pokemon?.image} alt="" />
        </header>
        <div className="container-details">
          <span>N° {pokemon?.id}</span>
          <h2>{pokemon?.name}</h2>
          <ul>
            {pokemon &&
              pokemon.types.map((type) => (
                <li key={type} className={type}>
                  {type}
                </li>
              ))}
          </ul>
          <section className="container-description">
            <h4>Description</h4>
            <p>{pokemon?.description}</p>
          </section>
          <section className="container-height-wight">
            <div>
              <h4>Height</h4>
              <span>{pokemon?.height} m</span>
            </div>
            <div>
              <h4>Weight</h4>
              <span>{pokemon?.weight} kg</span>
            </div>
          </section>
          <section>
            <h4>Abilities</h4>
            <div className="container-abilities">
              {pokemon &&
                pokemon.abilities.map((ability) => (
                  <span key={ability} className={ability}>
                    {ability}
                  </span>
                ))}
            </div>
          </section>
          <section className="container-stats">
            <h4>Stats</h4>
            <ul>
              {pokemon &&
                pokemon.stats.map(({ name, base_stat }) => (
                  <li className="stat" key={name}>
                    {" "}
                    <span className="stat-name">{name}</span> {base_stat}
                  </li>
                ))}
            </ul>
          </section>
          <section className="container-evolutions">
            <h4>Evolutions</h4>
            <ul>
              {pokemon &&
                pokemon.evolution.map(({ name, min_level, url_image }) => (
                  <li className="evolution" key={name}>
                    <span>Lv. {min_level}</span>
                    <img src={url_image} alt="" />
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
};
