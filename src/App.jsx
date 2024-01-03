import { useContext } from "react";
import { Aside } from "./components/Aside";
import { ModalPokemon } from "./components/ModalPokemon";
import { Pokemons } from "./components/Pokemons";
import { PokemonContext } from "./context/PokemonContext";
import { Header } from "./components/Header";

function App() {
  const {
    showDetailPokemon,
    closePokemonDetail,
    pokemonDetail,
    isLoadingPokemon,
  } = useContext(PokemonContext);

  return (
    <>
      <section className="parent-container">
        <Header/>
        <main>
          <Pokemons />
          <Aside pokemon={pokemonDetail} isLoadingPokemon={isLoadingPokemon} />
          <ModalPokemon
            showModal={showDetailPokemon}
            onCloseModal={closePokemonDetail}
            pokemon={pokemonDetail}
          />
        </main>
      </section>
    </>
  );
}

export default App;
