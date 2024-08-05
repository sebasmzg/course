//CLASS 

//una clase es un molde para crear objetos sin repetir codigo

class Toy {
    private Phrase: string;

    constructor(Phrase: string) {
        this.Phrase = Phrase;
    }

    touch() {
        alert(this.Phrase);
    }
}

const toy = new Toy('Hola mundo');
toy.touch();

const toy2 = new Toy('Adios mundo');


//INTERFACE

//Una interfaz es un contrato para implementar ciertos metodos y propiedades

interface Person {
    name: string;
    lastName: string;
    age: number;
    breath?: ()=> void;
}

const person: Person = {
    name: 'Jorge',
    lastName: 'Muñoz',
    age: 30
}