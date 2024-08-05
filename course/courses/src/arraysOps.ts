//Array Ops
const numbersFortune = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach(callback) - ejecuta una función por cada elemento del array.
numbersFortune.forEach((number) => {
  //console.log(number);
});

//filter(callback) - crea un nuevo aarray con los elementos que cumplen una condición.
const evenNumbers = numbersFortune.filter((number)=> number % 2 === 0);
//console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

//map(callback) - crea un nueco array aplicancdo una transformación a cada elemento.
const doubleNumber = numbersFortune.map((number)=> number * 2);
console.log(doubleNumber); // hace un array con los elementos multiplicados por 2
// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
console.log(typeof doubleNumber); //object


//reduce(callback) - reduce un array a un solo valor acumulado.
const sum = numbersFortune.reduce((acc, number)=> acc + number, 0); //0 es el valor inicial del acumulador,acc es el acumulador. //sumara todos los elementos del array
console.log(sum); //55 => suma de todos los numeros de 1 a 10

//find(callback) - devuelve el primer elemento que cumple una condición.
const firstEvenNumber = numbersFortune.find((number)=> number % 2 === 0);
console.log(firstEvenNumber); //2

//some(callback) - devuelve true si al menos un elemento cumple una condición.
const isNotEven = numbersFortune.some((number)=> number %2 !== 0);
console.log(isNotEven); //true

//every(callback) - devuelve true si todos los elementos cumplen una condición.
const allEven = numbersFortune.every((number)=> number % 2 === 0);
console.log(allEven); //false

//includes(value) - devuelve true si el array incluye un valor.
const hasFive = numbersFortune.includes(5);
console.log(hasFive); //true

//indexOf(value) - devuelve el índice de un valor.
const indexFive = numbersFortune.indexOf(5);
console.log(indexFive); //4

// ------------- Example filter and map

const users = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Jim', age: 20},
    {name: 'Jack', age: 35},
    {name: 'Jill', age: 40},
];

const usersOver30 = users.filter((user)=> user.age > 30);
console.log(usersOver30); // [ { name: 'Jack', age: 35 }, { name: 'Jill', age: 40 } ]

const usersNames = users.map((user)=>user.name);
console.log(usersNames); // [ 'John', 'Jane', 'Jim', 'Jack', 'Jill' ]