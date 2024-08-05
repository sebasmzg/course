"use strict";
//CLASS 
//una clase es un molde para crear objetos sin repetir codigo
class Toy {
    constructor(Phrase) {
        this.Phrase = Phrase;
    }
    touch() {
        alert(this.Phrase);
    }
}
const toy = new Toy('Hola mundo');
toy.touch();
const toy2 = new Toy('Adios mundo');
const person = {
    name: 'Jorge',
    lastName: 'Muñoz',
    age: 30
};
