export const formatStats = (stats) => {
    console.log(stats);
    const newStats = stats.map(({stat, base_stat}) => ({
        name: stat.name, 
        base_stat
    }));

    newStats.push({
        name: "total",
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
