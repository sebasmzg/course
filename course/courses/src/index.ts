import { Person, Student, Home, Animal, Dog, Cat } from "./clases.js";  

const person1 = new Person('Jorge','Muñoz');
const person2 = new Person('Sebastián','Muñoz');

console.log(person1.gretting(), person2);
console.log(person2.eat('Pizza'));
console.log(person1.brushTeeth());

let people: Person[] = [];
people.push(person1,person2);
console.log(people);

people.map((person) => {
    console.log(person.eat('Pizza'));    
});

const student = new Student('Pepito','Perez','History')
console.log(student);
const home = new Home('Calle 123',3);
console.log(home);
const animal1 = new Animal('Canis','lupus');
const animal2 = new Animal('Felis','catus');
console.log(animal1, animal2);
const dog = new Dog('Canis','lupus','Scooby');
console.log(dog);
const cat = new Cat('Felis','catus','Garu');
console.log(cat);

console.log(`${student.firstName} is ${student.course} student, he lives in ${home.adress}, his house have ${home.rooms} rooms. He have 2 pets, a dog named ${dog.name} and a cat named ${cat.name}`);


