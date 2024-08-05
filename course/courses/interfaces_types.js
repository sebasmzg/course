"use strict";
//G
//definicion interface 
//Una interfaz en TypeScript es una estructura que define el contrato o la forma de un objeto. Especifica las propiedades y métodos que un objeto debe tener, sin proporcionar una implementación. Las interfaces ayudan a garantizar que los objetos adheridos a ellas cumplan con ciertas expectativas de forma y comportamiento.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//IMPLEMENTACION 
//Para tipo o interfaz a un objeto 
const objetoX = {
    b: 'hola'
};
function gety(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(url);
        let w = yield res.json();
    });
}
gety('https://jsonplaceholder.typicode.com/users');
const person1 = {
    id: 1,
    firstName: 'Jorge',
    lastName: 'Muñoz',
    age: 130,
    saludar() {
        console.log(`Hola soy ${this.firstName} ${this.lastName}, tengo ${this.age} años`);
    }
};
const carrito = {
    totalPrice: 1000,
    productos: [
        {
            id: 1,
            name: 'Laptop',
            price: 500,
            quantity: 1
        },
        {
            id: 2,
            name: 'Super Mouse',
            price: 500,
            quantity: 1
        }
    ]
};
let human = {
    name: 'Pedro Picapiedra',
};
const zapato = {
    id: 2,
    name: 'Zapato',
    price: 100,
    quantity: 1,
    talla: 42
};
//automaticamente se extendió la interface
const functions = {
    add(product) {
        console.log('Producto agregado');
    },
    remove() {
        console.log('Producto eliminado');
    },
    getTotal() {
        return 1000;
    },
    size: 10
};
//definir un objeto, método de un objeto o forma de una clase: interface
//definir un tipo primitivo, unión de tipos, tipos de funciones, etc: type
