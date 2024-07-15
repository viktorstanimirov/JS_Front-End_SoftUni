function loadingBar(number) {
    const maxPercent = 100;
    const percentToPrint = number / 10;
    const dotsToPrint = 10 - percentToPrint;
    const loadingState = `${"%".repeat(percentToPrint)}${".".repeat(dotsToPrint)}`;

    if (number == maxPercent) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${number}% [${loadingState}]`);
        console.log('Still loading...');
    }

}

//Test code


// loadingBar(30);
// loadingBar(50);
// loadingBar(100);