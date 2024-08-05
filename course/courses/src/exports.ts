class Circle{
    constructor(public radius: number){}
    getArea(): number{
        return Math.PI * Math.pow(this.radius, 2);
    }

}

class Square{
    constructor (public sideLenght: number){}
    getArea():number{
        return Math.pow(this.sideLenght, 2);
    }
}

//export multiple
export {Circle, Square};

//import multiple
//import {Circle, Square} from './exports';

//export all----- Reexprotaciones
export * from './exports'; 

//export default
export default class User {
    constructor(public name: string){}
    getName() {
        return `Hola, soy ${this.name}`;
    }
}
//import default
//import User from './exports'; sin {llaves} porque es default
export function getTime(){
    return new Date().toLocaleTimeString();
}
//import User,{getTime} from './export