export class Person {
   firstName: string;
   lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  gretting(): string{
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  eat(food:string):string{
    return `${this.firstName} is eating ${food}`;
  }

  brushTeeth():string{
    return`${this.firstName} is brushing teeth`;
  }
}

export class Student extends Person {
    course: string;
    constructor(firstName: string,lastName:string,course:string){
        super(firstName,lastName);
        this.course = course;
    }
}

export class Home {
    adress: string;
    rooms: number;
    constructor(adress: string, rooms: number){
        this.adress = adress;
        this.rooms = rooms;
    }
}

export class Animal {
    gender: string;
    specie: string;
    constructor(gender: string,specie: string){
        this.gender = gender;
        this.specie = specie
    }
}

export class Dog extends Animal {
    name: string;
    constructor(gender: string, specie:string, name: string){
        super(gender,specie)
        this.name = name;
    }
}

export class Cat extends Animal {
    name: string;
    constructor(gender: string, specie:string, name: string){
        super(gender,specie)
        this.name = name;
    }
}