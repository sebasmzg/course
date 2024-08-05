/* function saludar({name,age}:{name:string, age:number}):string{
    console.log(`Hola ${name}, tienes ${age} años`)
    return name
} */

const sayHiFromFunction = (fn: (name:string) => void) => {
    fn('Jorge')
}

const sayHi = (name:string)=>{
    console.log(`Hola ${name}`)
    return name
}

sayHiFromFunction(sayHi)

//tipar las arrow function

/* //tipar parametros : y el tipo que retorna
const sumar = (a:number, b:number):number => {
    return a+b
}

//tipar parametros, el tipo de la funcion y luego hacer la funcion
const restar: (a:number, b:number)=> number = (a,b) => {
    return a-b
} */

/* type Person = {
    name:string,
    age: number
}

let user: Person = {
    name: 'Ramón',
    age: 30
} */

/* function createUser(name:string, age:number):Person{
    return { name, age}
} */
/* function createUser(person:Person):Person {
    const {name,age} = person
    return {name, age}
}

const userCreated = createUser({name:'Jorge', age:30})
*/
/* type HeroId = `${string}-${string}-${string}-${string}-${string}`; //template union type

type Hero = {
    readonly id?: HeroId,
    name:string,
    age:number,
    isActive?: boolean
};

let hero: Hero = {
    name: 'Thor',
    age: 2342
};

function createHero(hero: Hero): Hero {
    const {name, age} = hero;
    return {id: crypto.randomUUID(), //crypto.randomUUID() genera un id aleatorio
        name, 
        age, 
        isActive: true}; 
}

const thor = createHero({name: 'Thor', age: 2342});
thor.id?.toString();

const ironman = Object.freeze(createHero({name: 'Ironman', age: 42})); //object.freeze evita que se pueda modificar el objeto */

//union types

/* type HeroId = `${string}-${string}-${string}-${string}-${string}`; //template union type
type HeroPowerScale = 'local' | 'planet' | 'galaxy' | 'universe' | 'multiverse'; // | es un operador de union 'or'

let ann: number | string;
ann = 23;
ann = '23';

type Hero = {
    readonly id?: HeroId,
    name:string,
    age:number,
    isActive?: boolean,
    powerScale?: HeroPowerScale
};

let hero: Hero = {
    name: 'Thor',
    age: 2342
};

function createHero(hero: Hero): Hero {
    const {name, age} = hero;
    return {id: crypto.randomUUID(), //crypto.randomUUID() genera un id aleatorio
        name, 
        age, 
        isActive: true}; 
}

const thor = createHero({name: 'Thor', age: 2342});
thor.id?.toString();
thor.powerScale = 'universe';

const ironman = Object.freeze(createHero({name: 'Ironman', age: 42})); //object.freeze evita que se pueda modificar el objeto */


//intersection types

/* type HeroId = `${string}-${string}-${string}-${string}-${string}`; //template union type
type HeroPowerScale = 'local' | 'planet' | 'galaxy' | 'universe' | 'multiverse'; // | es un operador de union 'or'
type HeroBasicInfo = {
    name:string,
    age:number
};

let ann: number | string;
ann = 23;
ann = '23';

type HeroProperties = {
    readonly id?: HeroId,
    isActive?: boolean,
    powerScale?: HeroPowerScale
};

type Hero = HeroBasicInfo & HeroProperties;

let hero: Hero = {
    name: 'Thor',
    age: 2342
};

function createHero(input: HeroBasicInfo): Hero {
    const {name, age} = input;
    return {id: crypto.randomUUID(), //crypto.randomUUID() genera un id aleatorio
        name, 
        age, 
        isActive: true}; 
}

const thor = createHero({name: 'Thor', age: 2342});
thor.id?.toString();
thor.powerScale = 'universe';

const ironman = Object.freeze(createHero({name: 'Ironman', age: 42})); //object.freeze evita que se pueda modificar el objeto */


//type indexes 

/* type HeroProperties = {
    isActive: boolean,
    adress: {
        planet: string,
        city: string
    }
};

const adressHero: HeroProperties['adress']= {
    planet: 'Tierra',
    city: 'New York'
};

//type from value

const adress = {
    planet: 'Tierra',
    city: 'New York'
};

type Adress = typeof adress; */


//type from function return

/* function createAdress(){
    return {
        planet: 'Tierra',
        city: 'Medellín'
    }
}

type Adress = ReturnType<typeof createAdress> */



//----------ARRAYS

//const languages: Array<string> = []
//const languages: string[] = []
const languages: (string | number)[] = [];

languages.push('JavaScript');


/* 
[
    ['x','o','x'], //string[]
    ['o','x','o'], //string[]
    ['x','','x'] //string[]
]
*/
/* type CellValue = 'x' | 'o' | '';
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
];

const gameBoard: string[][] = [
    ['x','o','x'],
    ['o','x','o'], 
    ['x','','x']
] */


//Tuples

type RGB = [number, number, number];    
const RGB = [255,255,0]