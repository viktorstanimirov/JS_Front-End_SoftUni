function meetingSchedule(strArray) {
    const schedule = {};

    for (const entry of strArray) {
        let [weekDay, name] = entry.split(" ");

        if (!schedule[weekDay]) {
            schedule[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        } else {
            console.log(`Conflict on ${weekDay}!`);
        }
    }
    for (const day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}


//Test case:

// meetingSchedule(
//     [
//         'Monday Peter',
//         'Wednesday Bill',
//         'Monday Tim',
//         'Friday Tim'
//     ]
// )
// meetingSchedule(
//     [
//         'Friday Bob',
//         'Saturday Ted',
//         'Monday Bill',
//         'Monday John',
//         'Wednesday George'
//     ]
// )