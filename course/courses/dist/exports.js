class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Square {
    constructor(sideLenght) {
        this.sideLenght = sideLenght;
    }
    getArea() {
        return Math.pow(this.sideLenght, 2);
    }
}
//export multiple
export { Circle, Square };
//import multiple
//import {Circle, Square} from './exports';
//export all----- Reexprotaciones
export * from './exports';
//export default
export default class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `Hola, soy ${this.name}`;
    }
}
//import default
//import User from './exports'; sin {llaves} porque es default
export function getTime() {
    return new Date().toLocaleTimeString();
}
//import User,{getTime} from './export
