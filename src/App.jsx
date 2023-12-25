import { Aside } from "./components/Aside"
import { Pokemons } from "./components/Pokemons"

function App() {  

  return (
    <>
      <section className="parent-container">
        <main>
          <Pokemons/>
          <Aside/>
        </main>
      </section>
    </>
  )
}

export default App
