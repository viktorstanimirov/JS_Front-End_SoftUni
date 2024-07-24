function wordsFinder(inputArray) {
    const [seekingWords, ...text] = inputArray

    const words = seekingWords.split(" ").reduce((acc, word) => {
        acc[word] = 0;
        return acc;
    }, {});

    text.forEach(word => {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    });

    Object.keys(words)
        .sort((a, b) => words[b] - words[a])
        .forEach(word => {
            console.log(`${word} - ${words[word]}`);
        });
}

//Test case:
// wordsFinder(
//     [
//         'this sentence',
//         'In', 'this', 'sentence', 'you', 'have', 'to',
//         'count', 'the', 'occurrences', 'of', 'the',
//         'words', 'this', 'and', 'sentence', 'because',
//         'this', 'is', 'your', 'task'
//     ]
// )

// wordsFinder(
//     [
//         'is the',
//         'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
//     ]
// )