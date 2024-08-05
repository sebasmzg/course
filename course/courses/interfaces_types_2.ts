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

//A diferencia de las interfaces los types pueden ser usados para definir tipos primitivos, tipos de objetos, tipos de funciones, etc.

//Interfaces solo pueden ser usadas para objetos, no pueden declarar tipos primitivos.

//primitivos
type Name = string;
//objecto
type Latitute = { lat: number };
type Longitute = { long: number };
//union
type Coords = Latitute | Longitute;
type FullCoords = Latitute & Longitute;
//tuple
type Data = [number, string];

type CellValue = 'x' | 'o' | '';
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
];

const gameBoard: string[][] = [
    ['x','o','x'],
    ['o','x','o'], 
    ['x','','x']
]


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

