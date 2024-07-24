function heroesRegistry(strArray) {
    const heroList = [];
    strArray.forEach(element => {
        const [heroName, heroLevel, heroItems] = element.split(' / ')

        const heroes = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems ? heroItems.split(', ') : []
        };
        heroList.push(heroes)

    });

    heroList.sort((a, b) => a.level - b.level)

    heroList.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

//Test case:

// heroesRegistry(
//     [
//         'Isacc / 25 / Apple, GravityGun',
//         'Derek / 12 / BarrelVest, DestructionSword',
//         'Hes / 1 / Desolator, Sentinel, Antara'
//     ]
// )

// heroesRegistry(
//     [
//         'Batman / 2 / Banana, Gun',
//         'Superman / 18 / Sword',
//         'Poppy / 28 / Sentinel, Antara'
//     ]
// )