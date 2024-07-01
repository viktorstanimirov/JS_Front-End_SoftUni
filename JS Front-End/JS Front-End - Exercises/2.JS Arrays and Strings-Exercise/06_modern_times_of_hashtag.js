function findWords(text) {
    const regex = /#[A-Za-z]+/g;
    let matches = text.match(regex);
    
    for (let match of matches) {
        match = match.replace('#', '')
        console.log(match)
    }
}


//Test code
// findWords('Nowadays everyone uses # to tag a #special word in #socialMedia')
// findWords('The symbol # is known #variously in English-speaking #regions as the #number sign')