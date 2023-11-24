// USING VAR
// declaration, asignation / re-declaration, re-asignation
var firstName; //declaration undefined
firstName = 'Luis'; //declaration
console.log(firstName);

var lastName = 'Ruiz'; //declaration defined
lastName = 'Uribe'; //re-declaration of variable
console.log(lastName);

var secondName = 'Antonio';//re-asignation of a variable
var secondName = 'Luisito';
console.log(secondName);

// USING LET
let fruit = 'Apple'; // able to declare and asign
fruit = 'Kiwi'; // able to reasign
console.log(fruit);

// let fruit = 'Banana' // Unable to re-declare.

// USING CONST
const animal = 'Dog'; //able to declare and asign
// animal = 'Cat'; //unable re-asign
console.log(animal);

const vehicles =  []; //const cannot be alreted by re-asigning or re-declaration
vehicles.push("carro");//const can be altered by arrays or objects manipulation
console.log(vehicles);

vehicles.pop();
console.log(vehicles);