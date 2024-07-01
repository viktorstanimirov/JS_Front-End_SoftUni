function revealWords(words, text) {
    wordsArr = words.split(', ')

    for (let word of wordsArr) {
        text = text.replace('*'.repeat(word.length), word)
    }

    console.log(text)
}


//Test code
// revealWords('great', 'softuni is ***** place for learning new programming languages')
// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')