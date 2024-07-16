function catCreator(strArray) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    const cats = [];
    for (const entry of strArray) {
        let [name, age] = entry.split(' ');
        let cat = new Cat(name, parseInt(age));
        cats.push(cat);
    }

    for (const cat of cats) {
        cat.meow();
    }
}


//Test case:
// catCreator(['Mellow 2', 'Tom 5'])
// catCreator(['Candy 1', 'Poppy 3', 'Nyx 2'])