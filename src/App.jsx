import { useContext } from "react"
import { Aside } from "./components/Aside"
import { ModalPokemon } from "./components/ModalPokemon"
import { Pokemons } from "./components/Pokemons"
import { PokemonContext } from "./context/PokemonContext"

function App() {  

  const {showDetailPokemon, closePokemonDetail} = useContext(PokemonContext);

  return (
    <>
      <section className="parent-container">
        <main>
          <Pokemons/>
          <Aside/>
          <ModalPokemon showModal={showDetailPokemon} onCloseModal={closePokemonDetail}/>
        </main>
      </section>
    </>
  )
}

export default App
