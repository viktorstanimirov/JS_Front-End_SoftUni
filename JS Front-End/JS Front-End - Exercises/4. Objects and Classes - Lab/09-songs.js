function printSongs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(this.name);
        }
    }
    let allSongs = [];
    let songsList = [];
    let songNumbers = input.shift();
    let songsType = input.pop()

    for (let index = 0; index < songNumbers; index++) {
        let [type, name, time] = input[index].split('_');
        let song = new Song(type, name, time);

        songsList.push(song);

    }

    if (songsType === 'all') {
        songsList.forEach(song => song.print());
    } else {
        songsList.filter(song => song.type === songsType).forEach(song => song.print());
    }
}
//Test case:
// printSongs(
//     [
//         3,
//         'favourite_DownTown_3:14',
//         'favourite_Kiss_4:16',
//         'favourite_Smooth Criminal_4:01',
//         'favourite'
//     ]
// )

// printSongs(
//     [
//         4,
//         'favourite_DownTown_3:14',
//         'listenLater_Andalouse_3:24',
//         'favourite_In To The Night_3:58',
//         'favourite_Live It Up_3:48',
//         'listenLater'
//     ]
// )

// printSongs(
//     [
//         2,
//         'like_Replay_3:15',
//         'ban_Photoshop_3:48',
//         'all'
//     ]
// )