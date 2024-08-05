"use strict";
/* //SINTAXIS

//Interface
interface x {
    a: number
    b: string
}

interface setx {
    (a: number, b: string): void
}

//Type
type y = {
    a: number
    b: string
}

type sety = (a: number, b: string) => void */
const gameBoard = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', '', 'x']
];
/* //EXTEND

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
}; */
