function pyramidResource(base, step) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;

    let row = 0;

    let currentSize = base;

    while (currentSize > 2) {
        let marble = currentSize * 4 - 4;
        let stone = currentSize * currentSize - marble;
    
        stoneRequired += stone;
    
        row++;
        if (row % 5 === 0) {
            lapisLazuliRequired += marble;
        } else {
            marbleRequired += marble;
        }
    
        currentSize -= 2;
    }
    
    row++;
    let goldRequired;
    if (currentSize === 1) {
        goldRequired = 1;
    } else {
        goldRequired = 4;
    }
    
    stoneRequired = Math.ceil(stoneRequired * step);
    marbleRequired = Math.ceil(marbleRequired * step);
    lapisLazuliRequired = Math.ceil(lapisLazuliRequired * step);
    goldRequired = Math.ceil(goldRequired * step);
    let pyramidHeight = Math.floor(row * step);
    
    let result = `Stone required: ${stoneRequired}\n` +
        `Marble required: ${marbleRequired}\n` +
        `Lapis Lazuli required: ${lapisLazuliRequired}\n` +
        `Gold required: ${goldRequired}\n` +
        `Final pyramid height: ${pyramidHeight}`;
    
    return result;
}


    
    

 



//Test code

// console.log(pyramidResource(11, 1));
// console.log(pyramidResource(11, 0.75));
// console.log(pyramidResource(12, 1));






