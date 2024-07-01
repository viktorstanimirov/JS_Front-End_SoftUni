function uppercaseSplitter(text) {
    const regex = /([A-Z]{1}[^A-Z]*)/g;


    splitText = text.match(regex)
    console.log(splitText.join(', '));
}

//Test code
uppercaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
uppercaseSplitter('HoldTheDoor')
uppercaseSplitter('ThisIsSoAnnoyingToDo')