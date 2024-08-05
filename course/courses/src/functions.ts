//arrow function
const gretting = (nombre: string):string=> {
    return 'Hola ' + nombre;
}; 

//function normal
function suma(nombre: string):string{
    return 'Hola ' + nombre;
}

function agregar (a: number, b: number): void{
    console.log(a+b);
}

agregar(3,1) //4

const getDataRickAndMorty = async ()=>{
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    
}

document.addEventListener('DOMContentLoaded', async ()=>{
    getDataRickAndMorty();
})

const saludar = (nombre: string, edad: number):boolean  => {
    return true;
}