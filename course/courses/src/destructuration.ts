console.groupCollapsed('destructuration');
const book: {title:string,author:string,description:string}={title: 'cien años de soledad',author:'Gabo',description:'xyz'};
const {title,description} = book
console.log(title);
console.groupEnd();
//------------------------------

/* destructuration with alias */
console.groupCollapsed('with alias')
const author:{firstName:string,lastName:string}={firstName:'Gabriel',lastName:'García Márquez'};
const {firstName: name1,lastName: name2} = author;
console.log(name1, name2);
console.groupEnd();
//-------------------------------

/* default values */
console.groupCollapsed('default values')
const product:{nameProduct:string,price:number, color: string} = {nameProduct:'xbox',price:1000};
const {nameProduct, color = 'black'} = product
console.log(color);
console.groupEnd();
//--------------------------------

/* arrays */
console.groupCollapsed('Arrays')
let coders = [1,2,3,4,5];
const [coder1,coder2,coder3] = coders;
console.log(1);
console.log(2);
console.log(3);
coders = [5,9,8];
console.log(1);
console.log(2);
console.log(3);
console.groupEnd();
// ---------------------------------

/* Arrays, skip element */
console.groupCollapsed('Arrays, skip element')
const tls =['milton','kevin','robin','kevin'];
const [tl1, ,tl2] = tls
console.log(tl1);
console.log(tl2);
console.groupEnd();
//-----------------------------------

/* Arrays (default values) */
console.groupCollapsed('Arrays (default values)')
const ages = [30,25,18];
const [firstAge,secondAge,thirdAge, newAge = 60] = ages;
console.log(firstAge);
console.log(newAge);
console.log(ages);
console.groupEnd();
//-----------------------------------

/* Nested destructuration */
console.groupCollapsed('Nested destructuration')
const response = {message: 'OK',
    ip: '123.123.1.1',
    data: {first: 'Gabo', second: 'garcia'}
};
const {data: {first}}=response;
console.log(response.data.first);
console.log(first);
console.groupEnd();