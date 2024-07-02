function login (inputArray) {
    const username = inputArray.shift();
    const password = username.split('').reverse().join('');
    let tryCount = 0
    for (word of inputArray){
        
        
      

        if (word == password){
            console.log(`User ${username} logged in.`);
            break;
        } else {
            tryCount += 1;
            if (tryCount == 4){
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');

            }
        
        }
    }

}


//Test code
login(['Acer','login','go','let me in','recA'])
login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])