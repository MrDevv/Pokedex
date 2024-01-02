import { getEvolutionsInfo } from "../services/pokemonServices";

export const formatStats = (stats) => {
    const nameTypes = {
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SpA",
        "special-defense": "SpD",
        speed: "SPD"
    };

    const newStats = stats.map(({stat, base_stat}) => ({
        name: nameTypes[stat.name], 
        base_stat
    }));

    newStats.push({
        name: "TOT",
        base_stat: newStats.reduce((acc, curr) => curr.base_stat + acc ,0)
    });

    return newStats;
}


export const formatTypes = (types) => {    
    const newTypes = types.map(type => type.type.name);

    return newTypes;
}

export const formatAbilities = (abilities) => {    
    const newAbilities = abilities.map(ability => ability.ability.name);

    return newAbilities;
}

export const getPokemonDescription = (pokemonSpecie) => {    
    return pokemonSpecie.flavor_text_entries[1].flavor_text;
}

export const getEvolution = async (evolutionInfo) => {
    const evolutions = [];
    let evolutionData = evolutionInfo.chain

    do{
        const evoDetails = evolutionData["evolution_details"][0]
        const { url_image, pokemonInfo} = await getEvolutionsInfo(evolutionData.species.name);

        evolutions.push({
            name: evolutionData.species.name,
            min_level: evoDetails?.min_level ?? 1,            
            url_image,
            pokemonInfo
        })
        
        evolutionData = evolutionData.evolves_to[0]
    }while(evolutionData);

    return evolutions;
}