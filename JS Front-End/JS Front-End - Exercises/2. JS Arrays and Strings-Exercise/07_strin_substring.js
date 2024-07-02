function stringSubstring (word, text) {
    
    let allWord = text.toLowerCase().split(' ');

    let result = allWord.includes(String(word))

    if (result == true) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}


//Test code
// stringSubstring('javascript', 'JavaScript is the best programming language')
// stringSubstring('python','JavaScript is the best programming language')