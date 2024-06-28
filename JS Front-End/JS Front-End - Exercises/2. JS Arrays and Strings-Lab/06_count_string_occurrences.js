function countOccurrences(text, searchedWord) {
    let textWords = text.split(' ');
    let occurrences = 0;

    for (let word of textWords) {
        if(word === searchedWord){
            occurrences +=1
        }
    }

    console.log(occurrences);

}

//Test code
// countOccurrences('This is a word and it also is a sentence', 'is')
// countOccurrences('softuni is great place for learning new programming languages', 'softuni')
