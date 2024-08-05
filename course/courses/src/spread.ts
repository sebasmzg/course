// Operador Spread (...)

//combinar objetos
console.groupCollapsed('combinar objetos');
const user = {name: 'Juanito',adress:'Avenida siempre viva'};
const books = {books: ['abc','1234']};

const body = {name: user.name, adress: user.adress, books: books.books}
console.log(body);
const body2 = {...user,...books};
console.log(body2);
console.groupEnd();

//copiar arrays
console.groupCollapsed('copiar arrays');
const ages1 = [20,30,40];
console.log(ages1);
const copyAges = [...ages1,50,60,70];
console.log(copyAges);
console.groupEnd();

//combinar Arrays
console.groupCollapsed('combinar Arrays');
const ages2 = [80,90,100];
const combinedAges = [...copyAges,...ages2];
console.log(combinedAges);
console.groupEnd();

//reemplazar valores en objetos
console.groupCollapsed('reemplazar valores en objetos')
const person2 = {name:'Pedro',age: 23}
const updatedPerson = {...person2,age:59}
console.log(updatedPerson);

console.groupEnd();