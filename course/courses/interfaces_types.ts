//G
//definicion interface 
//Una interfaz en TypeScript es una estructura que define el contrato o la forma de un objeto. Especifica las propiedades y métodos que un objeto debe tener, sin proporcionar una implementación. Las interfaces ayudan a garantizar que los objetos adheridos a ellas cumplan con ciertas expectativas de forma y comportamiento.


//F
//interface y types se diferencian en que los types son más flexibles y pueden ser usados para definir tipos primitivos, tipos de objetos, tipos de funciones, etc. Mientras que las interfaces son más rígidas y solo pueden ser usadas para definir tipos de objetos.

//interfaz es moldear un contrato que va a tener un objeto

//SINTAXIS

//Definicion de una interfaz

//Interface
interface x {
    a?: number
    b: string
    c?: boolean
    d?: bigint
    e?: symbol
    f?: string[]
    g?: undefined
    h?: string | null
}

interface setx {
    (a: number, b: string): void
}

//Definicion de un tipo

//Type
type y = {
    a: number
    b: string
}

type sety = (a: number, b: string) => void

//IMPLEMENTACION 

//Para tipo o interfaz a un objeto 

const objetoX : x = {
    b: 'hola'
}

async function gety(url: string) : Promise<void> {
    let res : Response = await fetch (url)
    let w : y[] = await res.json()
}

gety('https://jsonplaceholder.typicode.com/users')

//EJEMPLO

interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    saludar():void;
}

const person1: IPerson = {
    id: 1,
    firstName: 'Jorge',
    lastName: 'Muñoz',
    age: 130,
    saludar() {
        console.log(`Hola soy ${this.firstName} ${this.lastName}, tengo ${this.age} años`);
    }
}


//L
//interface anidada

interface IProducto{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ICarritoCompras {
    totalPrice: number;
    productos: IProducto[]
}

const carrito: ICarritoCompras = {
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
}

// los tipos no se pueden anidar sino que se unen
type PersonBasicInfo = {
    name:string,
    age?:number
};

type PersonProperties = {
    readonly id?: number,
    isStudent?: boolean,
    title: string
};

type Human = PersonBasicInfo | PersonProperties;

let human: Human = {
    name: 'Pedro Picapiedra',

};



//N
//EXTEND

//se pueden extender interfaces

interface IZapato extends IProducto {
    talla: number;
}
const zapato: IZapato = {
    id: 2,
    name: 'Zapato',
    price: 100,
    quantity: 1,
    talla: 42
}



//Ambos pueden ser extendidos, pero las interfaces pueden ser extendidas por multiples interfaces, mientras que los types no pueden ser extendidos por multiples types.
//interface puede ser extendida por un type y viceversa.

//Interface extendiendo interface
interface Character {
    name: string;
    health: number;
    attack(): void;
}

interface Warrior extends Character {
    weapon: string;
    shield: boolean;
    defend(): void;
}

//Type extendiendo type
type MagicalCreature = {
    name: string;
    magicPower: number;
};
type Dragon = MagicalCreature & {
    breathesFire: boolean;
};

//Interface extendiendo type
type Vehicle = {
    wheels: number;
    seats: number;
};
interface Car extends Vehicle {
    doors: number;
    model: string;
}

//Type extendiendo interface
interface User {
    username: string;
    email: string;
    age: number;
}

type AdminUser = User & {
    isAdmin: boolean;
    manageUsers: () => void;
};



//G
//FUNCIONES

/* interface ICarritoFunctions{
    add:(product : IProducto) => void;
    remove:(id: number) => void;
} */
interface ICarritoFunctions{
    add(product : IProducto):void;
    remove(id: number):void;
    size: number;
}

//se pueden escribir dos veces

interface ICarritoFunctions{
    getTotal():number;
    remove(product: IProducto):void;
    /* size: string; */
}

//automaticamente se extendió la interface

const functions : ICarritoFunctions = {
    add(product){
        console.log('Producto agregado');
    },
    remove(){
        console.log('Producto eliminado');
    },
    getTotal(){
        return 1000;
    },
    size: 10
}

//con los types no es posible hacer esto

type Carrito = {
    totalPrice: number;
    productos: IProducto[];
}

/* type Carrito = {
    id: number
} */


//las interfaces no quedan al compilar el código, solo son para desarrollo


//F

//Interfaces vs Types

//interfaces solo se pueden usar para objetos, no pueden declarar varios tipos primitivos en un solo atributo.
//types son más flexibles y pueden ser usados para definir tipos primitivos, tipos de objetos, tipos de funciones, etc.

/* type HeroID = number;  */
/* interface HeroID2 =
id :  `${number}-${string}`; */
type HumanID= `${number}-${string}`;
/* crypto.randomUUID(); */
interface Hero  {
    id: HumanID;
    name: string;
    age: number;
}


//definir un objeto, método de un objeto o forma de una clase: interface

//definir un tipo primitivo, unión de tipos, tipos de funciones, etc: type