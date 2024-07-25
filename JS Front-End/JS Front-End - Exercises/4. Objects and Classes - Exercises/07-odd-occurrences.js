function oddOccurrences(input) {
    const wordsList = input.split(" ").reduce((acc, curr) => {
        const searchedWord = curr.toLowerCase();
        if (!acc.hasOwnProperty(searchedWord)) {
            acc[searchedWord] = 0
        }

        acc[searchedWord] += 1;

        return acc
    }, {});

    console.log(Object.keys(wordsList)
        .filter((searchedWord) => wordsList[searchedWord] % 2 !== 0)
        .join(" ")
    );

}

//Test case:
// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')