import { createContext, useState } from "react";
import { formatAbilities, formatStats, formatTypes } from "../helpers/pokemon";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [showDetailPokemon, setshowDetailPokemon] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState(false);

  const showPokemon = (pokemonInfo) => {

    const { id, name, height, weight, types, stats, abilities } = pokemonInfo;

    setPokemonDetail({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities)
    })
    setshowDetailPokemon(true);    
  };

  const closePokemonDetail = () => {
    setshowDetailPokemon(false);
  };

  return (
    <PokemonContext.Provider
      value={{ showDetailPokemon, showPokemon, closePokemonDetail }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
