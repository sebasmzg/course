interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    skills: string[];
    gretting():void;
}

const user1:IUser = {
    firstName: 'Silvestre',
    lastName: 'Stallone',
    age: 40,
    skills: ['JavaScript', 'TypeScript', 'Python'],
    gretting(){
        console.log(`Hola soy ${this.firstName} ${this.lastName}, tengo ${this.age} años y mis habilidades son: ${this.skills.join(', ')}`);
    }
}

console.log(user1);


interface IExamplePost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getPost = async ()=> {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: IExamplePost = await response.json();
    console.log(data); 
}

console.log(getPost());