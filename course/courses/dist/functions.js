"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//arrow function
const gretting = (nombre) => {
    return 'Hola ' + nombre;
};
//function normal
function suma(nombre) {
    return 'Hola ' + nombre;
}
function agregar(a, b) {
    console.log(a + b);
}
agregar(3, 1); //4
const getDataRickAndMorty = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://rickandmortyapi.com/api/character');
    const data = yield response.json();
});
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    getDataRickAndMorty();
}));
const saludar = (nombre, edad) => {
    return true;
};
