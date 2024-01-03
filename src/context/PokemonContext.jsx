import { createContext, useState } from "react";
import { formatAbilities, formatStats, formatTypes, getEvolution, getPokemonDescription } from "../helpers/pokemon";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [showDetailPokemon, setshowDetailPokemon] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState(false);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(true)

  const showPokemon = async (pokemonInfo) => {
    setIsLoadingPokemon(true)

    const { data: dataSpecies } = await axios.get(pokemonInfo.species.url);
    const { data: dataEvolution } = await axios.get(dataSpecies.evolution_chain.url);
    
    
    const { id, name, height, weight, types, stats, abilities, sprites } = pokemonInfo;
    const image = sprites.versions["generation-v"]["black-white"].animated.front_default

    console.log(pokemonInfo);
    setPokemonDetail({
      id,
      name,
      height: height/10,
      weight: weight/10,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
      evolution: await getEvolution(dataEvolution),
      image
    })
    setshowDetailPokemon(true);   
    setTimeout(() => {      
      setIsLoadingPokemon(false)     
    }, 500);
  };

  const closePokemonDetail = () => {
    setshowDetailPokemon(false);
  };

  return (
    <PokemonContext.Provider
      value={{ showDetailPokemon, showPokemon, closePokemonDetail, pokemonDetail, isLoadingPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
