export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    gretting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    eat(food) {
        return `${this.firstName} is eating ${food}`;
    }
    brushTeeth() {
        return `${this.firstName} is brushing teeth`;
    }
}
export class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }
}
export class Home {
    constructor(adress, rooms) {
        this.adress = adress;
        this.rooms = rooms;
    }
}
export class Animal {
    constructor(gender, specie) {
        this.gender = gender;
        this.specie = specie;
    }
}
export class Dog extends Animal {
    constructor(gender, specie, name) {
        super(gender, specie);
        this.name = name;
    }
}
export class Cat extends Animal {
    constructor(gender, specie, name) {
        super(gender, specie);
        this.name = name;
    }
}
