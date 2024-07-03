function charactersRange (char1, char2) {
   
        const ascii1 = char1.charCodeAt(0);
        const ascii2 = char2.charCodeAt(0);
    
        const start = Math.min(ascii1, ascii2);
        const end = Math.max(ascii1, ascii2);
    
        let result = '';
        for (let i = start + 1; i < end; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    
        console.log(result);
    }

//Test code
// charactersRange('a', 'd')
// charactersRange('#', ':')
// charactersRange('C', '#')
