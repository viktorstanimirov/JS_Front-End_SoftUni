function transformToUppercase (input) {
    let words = input.match(/\b\w+\b/g);

    let result = []


    for (let word of words) {
        result.push(word.toUpperCase())
    }
    console.log(result.join(', '));
}



//Test code
transformToUppercase('Hi, how are you?')
transformToUppercase('hello')