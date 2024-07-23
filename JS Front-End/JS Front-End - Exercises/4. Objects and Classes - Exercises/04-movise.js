function movieDatabase(input) {
    const movies = [];

    input.forEach(command => {
        if (command.startsWith('addMovie ')) {
            const movieName = command.split('addMovie ')[1];
            movies.push({ name: movieName });
        } else if (command.includes(' directedBy ')) {
            const [movieName, director] = command.split(' directedBy ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(' onDate ')) {
            const [movieName, date] = command.split(' onDate ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    });

    const allMovies = movies.filter(m => m.name && m.director && m.date);

    allMovies.forEach(movie => console.log(JSON.stringify(movie)));
}

//Test case:
// movieDatabase(
//     [
//         'addMovie Fast and Furious',
//         'addMovie Godfather',
//         'Inception directedBy Christopher Nolan',
//         'Godfather directedBy Francis Ford Coppola',
//         'Godfather onDate 29.07.2018',
//         'Fast and Furious onDate 30.07.2018',
//         'Batman onDate 01.08.2018',
//         'Fast and Furious directedBy Rob Cohen'
//     ]
// )

// movieDatabase(
//     [
//         'addMovie The Avengers',
//         'addMovie Superman',
//         'The Avengers directedBy Anthony Russo',
//         'The Avengers onDate 30.07.2010',
//         'Captain America onDate 30.07.2010',
//         'Captain America directedBy Joe Russo'
//     ]
// )