import axios from "axios"

export const getEvolutionsInfo = async (name) => {
    const {data} =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

    return {
        url_image: data.sprites.versions["generation-v"]["black-white"].front_default,
        pokemonInfo: data
    }
}